import { headers } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import {
  createOrUpdateCustomer,
  createOrUpdateSubscription,
  addCreditsToCustomer,
} from "@/utils/supabase/subscriptions";

const CREEM_WEBHOOK_SECRET = process.env.CREEM_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const headersList = headers();
    const signature = (await headersList).get("creem-signature") || "";

    // Verify webhook signature manually using crypto
    const expectedSignature = crypto
      .createHmac("sha256", CREEM_WEBHOOK_SECRET)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("Invalid webhook signature");
      return new NextResponse("Invalid signature", { status: 401 });
    }

    const event = JSON.parse(body);
    console.log("Received webhook event:", event.type, event.data?.id);

    // Handle different event types
    switch (event.type) {
      case "checkout.completed":
        await handleCheckoutCompleted(event);
        break;
      case "subscription.active":
        await handleSubscriptionActive(event);
        break;
      case "subscription.paid":
        await handleSubscriptionPaid(event);
        break;
      case "subscription.canceled":
        await handleSubscriptionCanceled(event);
        break;
      case "subscription.expired":
        await handleSubscriptionExpired(event);
        break;
      case "subscription.trialing":
        await handleSubscriptionTrialing(event);
        break;
      default:
        console.log(
          `Unhandled event type: ${event.type} ${JSON.stringify(event)}`
        );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    // Return more specific error information
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Webhook processing failed", details: errorMessage },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(event: any) {
  const checkout = event.data; // Changed from event.object
  console.log("Processing completed checkout:", checkout);

  try {
    // Validate required data
    // Usually metadata is under checkout object directly or under a metadata field
    // Documentation doesn't specify metadata structure in webhook payload explicitly but implies it exists if sent.
    if (!checkout.metadata?.user_id) {
      console.error("Missing user_id in checkout metadata:", checkout);
      throw new Error("user_id is required in checkout metadata");
    }

    // Create or update customer
    // Check if customer object is embedded or just ID
    // If just ID, might need to fetch customer details separately or rely on what CreateOrUpdateCustomer needs (email etc).
    // Assuming checkout object has customer details or we can use metadata.
    // For safety, let's keep using checkout.customer but verify if it's an object.
    const customerId = await createOrUpdateCustomer(
      checkout.customer,
      checkout.metadata.user_id
    );

    // Check if this is a credit purchase
    if (checkout.metadata?.product_type === "credits") {
      await addCreditsToCustomer(
        customerId,
        checkout.metadata?.credits,
        checkout.id, // Changed from checkout.order.id
        `Purchased ${checkout.metadata?.credits} credits`
      );
    }
    // If subscription exists, create or update it
    else if (checkout.subscription) {
      await createOrUpdateSubscription(checkout.subscription, customerId);
    }
  } catch (error) {
    console.error("Error handling checkout completed:", error);
    throw error;
  }
}

async function handleSubscriptionActive(event: any) {
  const subscription = event.data;
  console.log("Processing active subscription:", subscription);

  try {
    // Create or update customer
    // Assuming subscription object has customer info embedded or referenced
    const customerId = await createOrUpdateCustomer(
      subscription.customer,
      subscription.metadata?.user_id
    );

    // Create or update subscription
    await createOrUpdateSubscription(subscription, customerId);
  } catch (error) {
    console.error("Error handling subscription active:", error);
    throw error;
  }
}

async function handleSubscriptionPaid(event: any) {
  const subscription = event.data;
  console.log("Processing paid subscription:", subscription);

  try {
    // Update subscription status and period
    const customerId = await createOrUpdateCustomer(
      subscription.customer,
      subscription.metadata?.user_id
    );
    await createOrUpdateSubscription(subscription, customerId);
  } catch (error) {
    console.error("Error handling subscription paid:", error);
    throw error;
  }
}

async function handleSubscriptionCanceled(event: any) {
  const subscription = event.data;
  console.log("Processing canceled subscription:", subscription);

  try {
    // Update subscription status
    const customerId = await createOrUpdateCustomer(
      subscription.customer,
      subscription.metadata?.user_id
    );
    await createOrUpdateSubscription(subscription, customerId);
  } catch (error) {
    console.error("Error handling subscription canceled:", error);
    throw error;
  }
}

async function handleSubscriptionExpired(event: any) {
  const subscription = event.data;
  console.log("Processing expired subscription:", subscription);

  try {
    // Update subscription status
    const customerId = await createOrUpdateCustomer(
      subscription.customer,
      subscription.metadata?.user_id
    );
    await createOrUpdateSubscription(subscription, customerId);
  } catch (error) {
    console.error("Error handling subscription expired:", error);
    throw error;
  }
}

async function handleSubscriptionTrialing(event: any) {
  const subscription = event.data;
  console.log("Processing trialing subscription:", subscription);

  try {
    // Update subscription status
    const customerId = await createOrUpdateCustomer(
      subscription.customer,
      subscription.metadata?.user_id
    );
    await createOrUpdateSubscription(subscription, customerId);
  } catch (error) {
    console.error("Error handling subscription trialing:", error);
    throw error;
  }
}

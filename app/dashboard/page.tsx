import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionStatusCard } from "@/components/dashboard/subscription-status-card";
import { CreditsBalanceCard } from "@/components/dashboard/credits-balance-card";

export default async function DashboardPage() {
  const supabase = await createClient();

  // 1. Check Auth User
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // 2. Fetch Customer Data (Credits, Subscription)
  // We use a single query to get the customer profile + related subscription & credits history
  const { data: customerData } = await supabase
    .from("customers")
    .select(
      `
      *,
      subscriptions (
        status,
        current_period_end,
        creem_product_id
      ),
      credits_history (
        amount,
        type,
        created_at
      )
    `
    )
    .eq("user_id", user.id)
    .single();

  const subscription = customerData?.subscriptions?.[0];
  const credits = customerData?.credits || 0;
  const recentCreditsHistory = customerData?.credits_history?.slice(0, 2) || [];

  return (
    <div className="flex-1 w-full flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 container">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border rounded-lg p-6 sm:p-8 mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 break-words">
          Welcome back, {customerData?.name || user.email?.split("@")[0]}
        </h1>
        <p className="text-muted-foreground">
          Manage your subscription, check your credits, and access your dashboard features.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Credits Card */}
        <CreditsBalanceCard credits={credits} recentHistory={recentCreditsHistory} />
        
        {/* Subscription Status */}
        <SubscriptionStatusCard subscription={subscription} />

      </div>

      {/* Placeholder for New Business Logic */}
      <div className="border border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center text-muted-foreground bg-muted/20">

      </div>
    </div>
  );
}

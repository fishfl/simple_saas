import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { creem } from '@/lib/creem';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, productType, userId, credits } = body;

    // Verify authentication
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }


    console.log('Creating checkout for user:', user.email, 'Product ID:', productId);
    console.log('Product Type:', productType, 'Credits:', credits);
    console.log('process.env.CREEM_API_KEY', process.env.CREEM_API_KEY);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('process.env.CREEM_SUCCESS_URL', process.env.CREEM_SUCCESS_URL);

    // Create checkout session using SDK
    const checkout = await creem.checkouts.create({
      productId: productId,
      customer: {
        email: user.email,
      },
      successUrl: process.env.CREEM_SUCCESS_URL || `${request.headers.get('origin')}/dashboard`,
      metadata: {
        user_id: user.id,
        product_type: productType,
        credits: credits || 0,
      }
    });

    return NextResponse.json({ checkoutUrl: checkout.checkoutUrl });

  } catch (error) {
    console.error('Checkout error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

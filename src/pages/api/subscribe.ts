import { NextApiResponse, NextApiRequest } from "next";
import { getSession } from 'next-auth/client'
import { stripe } from "../../services/stripe";

export default async function subscribe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
    })


    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1JajH4B91wzq19E71MjwlnWP', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader('Allow', 'Post')
    res.status(405).end('Methody not allowed')
  }
}
'use client';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const searchParams = useSearchParams();
  const rawAmount = searchParams.get('amount');
  const amount = rawAmount ? parseInt(rawAmount) * 100 : 0;

  if (!amount || isNaN(amount) || amount <= 0) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Invalid or missing amount. Please return to the product page.
      </div>
    );
  }

  const options = {
    mode: 'payment',
    currency: 'usd',
    amount,
  };

  return (
    <Elements stripe={stripePromise} options={options} >
      <CheckoutForm amount={amount} />
    </Elements>
    
  );
}

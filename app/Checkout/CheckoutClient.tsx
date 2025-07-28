'use client';

import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const rawAmount = searchParams.get('amount');
  const amount = rawAmount ? parseInt(rawAmount) * 100 : 0;

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (amount > 0) {
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [amount]);

  if (!amount || isNaN(amount) || amount <= 0) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Invalid or missing amount. Please return to the product page.
      </div>
    );
  }

  if (!clientSecret) {
    return <div className="text-center mt-20">Preparing payment...</div>;
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}

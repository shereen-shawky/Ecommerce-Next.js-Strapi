// app/Checkout/page.tsx
import React, { Suspense } from 'react';
import CheckoutClient from './CheckoutClient';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading Checkout...</div>}>
        <CheckoutClient />
      </Suspense>
    </div>
  );
}

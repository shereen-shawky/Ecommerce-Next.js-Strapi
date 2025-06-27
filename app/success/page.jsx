'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className=" bg-gradient-to-br from-indigo-50 to-white px-4">
      <div className="flex justify-center align-center">
        <div className="my-20 sm:my-20 lg:my-30  bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-indigo-100">
          <CheckCircle className="text-indigo-600 mx-auto mb-4" size={60} />
          <h1 className="text-2xl font-semibold text-indigo-700 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your transaction has been completed successfully.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                Go to Home
              </button>
            </Link>

            <Link href="/orders">
              <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition">
                View Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

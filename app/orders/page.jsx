'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import orderApis from '../_utils/orderApis';
import { CreditCard, CalendarDays, BadgeDollarSign } from 'lucide-react';

export default function OrdersByEmail() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    orderApis.getAllOrders().then((res) => {
      const allOrders = res.data?.data || [];
      const filtered = allOrders.filter(
        (order) => order.email === user.emailAddresses[0]?.emailAddress
      );
      setOrders(filtered);
    });
  }, [user]);

  if (!user) {
    return <div className="pt-24 p-6 text-gray-600 dark:text-gray-300">Loading user info...</div>;
  }

  return (
    <section className="pt-24 p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No orders found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-purple-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400 uppercase">Order ID</span>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                  #{order.documentId}
                </span>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <BadgeDollarSign className="text-green-500" size={20} />
                  <p className="text-sm">
                    <strong>Amount:</strong> ${(order.amount / 100).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="text-blue-500" size={20} />
                  <p className="text-sm">
                    <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CreditCard className="text-yellow-500" size={20} />
                  <p className="text-sm">
                    <strong>Email:</strong> {order.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

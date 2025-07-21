import React from 'react'
import { FiMonitor } from 'react-icons/fi';
import { BsShieldCheck, BsClockHistory } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaRegCreditCard } from 'react-icons/fa';
export default function Offers() {
  return (
          <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 text-gray-800 text-center py-5 px-4 border-b">
            <div className="flex flex-col items-center gap-2 py-2">
              <FiMonitor size={32} />
              <p className="font-medium">Latest and Greatest Tech</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <BsShieldCheck size={32} />
              <p className="font-medium">Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <TbTruckDelivery size={32} />
              <p className="font-medium">Free Shipping over 1000$</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <BsClockHistory size={32} />
              <p className="font-medium">24/7 Support</p>
            </div>
          </div>
  )
}

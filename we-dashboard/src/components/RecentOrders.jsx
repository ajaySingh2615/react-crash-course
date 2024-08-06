import React from 'react'

const RecentOrders = () => {
  // Sample data for recent orders
  const orders = [
    {
      customer: 'John Doe',
      orderNo: '12345',
      amount: '$250',
      status: 'Delivered',
      photo: 'https://i.pravatar.cc/30?img=1',
    },
    {
      customer: 'Jane Smith',
      orderNo: '12346',
      amount: '$120',
      status: 'Pending',
      photo: 'https://i.pravatar.cc/30?img=2',
    },
    {
      customer: 'Alice Johnson',
      orderNo: '12347',
      amount: '$310',
      status: 'Canceled',
      photo: 'https://i.pravatar.cc/30?img=3',
    },
    {
      customer: 'Bob Brown',
      orderNo: '12348',
      amount: '$220',
      status: 'Delivered',
      photo: 'https://i.pravatar.cc/30?img=4',
    },
    // Add more orders as needed
  ]

  // Function to determine the status label style
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 text-white'
      case 'Pending':
        return 'bg-yellow-500 text-white'
      case 'Canceled':
        return 'bg-red-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="bg-gray-800 p-1 rounded-lg shadow-lg relative">
      <h2 className="text-lg font-bold text-white mb-4 absolute top-2 left-2">Recent Orders</h2>
      <table className="min-w-full divide-y divide-gray-700 mt-8">
        <thead className="text-white">
          <tr>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Order No</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 text-white divide-y divide-gray-700">
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="px-4 py-2 flex items-center space-x-2">
                <img src={order.photo} alt={order.customer} className="w-8 h-8 rounded-full" />
                <span>{order.customer}</span>
              </td>
              <td className="px-4 py-2 text-left">{order.orderNo}</td>
              <td className="px-4 py-2 text-left">{order.amount}</td>
              <td className="px-4 py-2 text-left">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    order.status,
                  )}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentOrders

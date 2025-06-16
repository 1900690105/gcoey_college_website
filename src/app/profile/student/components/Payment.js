import React, { useState } from "react";

export default function FeesPayments() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const TabButton = ({ id, label }) => (
    <button
      className={`px-4 py-2 font-semibold rounded-t-lg ${
        activeTab === id
          ? "bg-white text-blue-600 border-t border-x border-gray-200"
          : "bg-gray-100 text-gray-600"
      }`}
      onClick={() => setActiveTab(id)}
      role="tab"
      aria-selected={activeTab === id}
      aria-controls={`${id}-panel`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Fees & Payments</h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="flex flex-wrap border-b border-gray-200"
          role="tablist"
          aria-label="Fees and Payments tabs"
        >
          {["overview", "breakdown", "history", "make-payment"].map((tab) => (
            <TabButton
              key={tab}
              id={tab}
              label={
                tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")
              }
            />
          ))}
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-blue-800">
                  Current Balance
                </h2>
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-gray-600">Total Fees Due:</p>
                    <p className="text-2xl font-bold text-red-600">$1,500</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Next Payment Due:</p>
                    <p className="text-xl font-bold text-yellow-600">
                      15th Sep 2024
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Upcoming Payments
                </h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Tuition - $1,200 - Due on 15th Sep 2024</li>
                  <li>Lab Fees - $200 - Due on 15th Sep 2024</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "breakdown" && (
            <div className="overflow-x-auto -mx-6 sm:-mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Fee Type", "Amount", "Due Date", "Status"].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        type: "Tuition",
                        amount: "$1,200",
                        dueDate: "15th Sep 2024",
                        status: "Unpaid",
                      },
                      {
                        type: "Lab Fees",
                        amount: "$200",
                        dueDate: "15th Sep 2024",
                        status: "Unpaid",
                      },
                      {
                        type: "Library Fees",
                        amount: "$100",
                        dueDate: "15th Sep 2024",
                        status: "Paid",
                      },
                    ].map((fee, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {fee.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {fee.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {fee.dueDate}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            fee.status === "Paid"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {fee.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="overflow-x-auto -mx-6 sm:-mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "Date",
                        "Payment Method",
                        "Amount",
                        "Receipt Number",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        date: "1st Aug 2024",
                        method: "Credit Card",
                        amount: "$500",
                        receipt: "REC123456",
                      },
                      {
                        date: "15th Jul 2024",
                        method: "Bank Transfer",
                        amount: "$1,000",
                        receipt: "REC789012",
                      },
                    ].map((payment, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payment.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payment.method}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payment.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payment.receipt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "make-payment" && (
            <form className="space-y-4 max-w-md mx-auto">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  id="amount"
                  type="text"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="payment-method"
                >
                  Payment Method
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  id="payment-method"
                >
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                  <option>UPI</option>
                </select>
              </div>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setShowConfirmation(true)}
              >
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Payment Plans
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Monthly Plan</h3>
              <p className="text-gray-600">
                Pay $500 per month. Next due: 15th Sep 2024.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Quarterly Plan</h3>
              <p className="text-gray-600">
                Pay $1,200 per quarter. Next due: 15th Dec 2024.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Scholarships and Financial Aid
          </h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Scholarship Amount: $500</p>
            <p className="text-gray-600">Remaining Balance: $1,000</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Payment Notifications
        </h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="email-notifications"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="email-notifications"
              className="ml-2 block text-sm text-gray-700"
            >
              Email Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="sms-notifications"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="sms-notifications"
              className="ml-2 block text-sm text-gray-700"
            >
              SMS Notifications
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Contact Support
        </h2>
        <p className="text-gray-600">
          If you have any issues with payments, please{" "}
          <a href="#" className="text-blue-600 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {showConfirmation && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Confirm Payment
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you sure you want to make this payment?
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => {
                    // Handle payment confirmation
                    setShowConfirmation(false);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

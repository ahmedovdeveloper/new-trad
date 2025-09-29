"use client"
import React from "react"
import { useState } from "react"
import {
  Clock,
  Bell,
  ChevronDown,
  History,
  ChartNoAxesColumnIncreasing,
  ArrowDownUp,
} from "lucide-react"

// Card components
function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Open")

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 bg-white">
        <div></div>
        <div className="flex gap-4 items-center">
          <Clock className="w-6 h-6 text-gray-600" />
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-6 bg-white">
        <h1 className="text-3xl font-bold text-black">Accounts</h1>
      </div>

      {/* Content Container */}
      <div className="px-4 space-y-4">
        {/* Promotional Banner */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200 p-5">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-1">Trade with 3x fewer stop outs.</h3>
              <p className="text-sm text-gray-600">
                Trade with the lowest Stop Out Level in the market.
              </p>
            </div>
            <div className="ml-4">
              <img
                className="w-20 h-20 object-contain"
                src="https://my.exness.com/download/15/153ad/153adb8cb208d20c2b913495d706f60f.webp"
                alt=""
              />
            </div>
          </div>
        </Card>

        {/* Account Section */}
        <Card className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-black">Akhmad</h2>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M9 6l11 0"></path>
                <path d="M9 12l11 0"></path>
                <path d="M9 18l11 0"></path>
                <path d="M5 6l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M5 18l0 .01"></path>
              </svg>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">Real</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">MT5</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">Zero</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-500">#43052818</span>
          </div>

          {/* Balance */}
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-black mb-6">20000 USD</h3>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="text-black"
                  >
                    <path
                      d="M4.66797 2.66602V4.66602M4.66797 8.66602V13.3327M11.3346 2.66602V4.66602M11.3346 11.3327V13.3327M2.66797 5.33268C2.66797 5.15587 2.73821 4.9863 2.86323 4.86128C2.98826 4.73625 3.15782 4.66602 3.33464 4.66602H6.0013C6.17811 4.66602 6.34768 4.73625 6.47271 4.86128C6.59773 4.9863 6.66797 5.15587 6.66797 5.33268V7.99935C6.66797 8.17616 6.59773 8.34573 6.47271 8.47075C6.34768 8.59578 6.17811 8.66602 6.0013 8.66602H3.33464C3.15782 8.66602 2.98826 8.59578 2.86323 8.47075C2.73821 8.34573 2.66797 8.17616 2.66797 7.99935V5.33268ZM9.33464 5.33268C9.33464 5.15587 9.40487 4.9863 9.5299 4.86128C9.65492 4.73625 9.82449 4.66602 10.0013 4.66602H12.668C12.8448 4.66602 13.0143 4.73625 13.1394 4.86128C13.2644 4.9863 13.3346 5.15587 13.3346 5.33268V10.666C13.3346 10.8428 13.2644 11.0124 13.1394 11.1374C13.0143 11.2624 12.8448 11.3327 12.668 11.3327H10.0013C9.82449 11.3327 9.65492 11.2624 9.5299 11.1374C9.40487 11.0124 9.33464 10.8428 9.33464 10.666V5.33268Z"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Trade</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M8 12l4 4"></path>
                    <path d="M12 8v8"></path>
                    <path d="M16 12l-4 4"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Deposit</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M15 9l-6 6"></path>
                    <path d="M15 15v-6h-6"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Withdraw</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <History className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">History</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Orders Section */}
        <Card className="pb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("Open")}
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "Open"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setActiveTab("Pending")}
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "Pending"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("Closed")}
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "Closed"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Closed
            </button>
            <div className="flex items-center justify-center px-4">
              <ArrowDownUp className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-500">No open orders</p>
          </div>

          {/* BTC Trade Banner */}
          <div className="mx-4 mb-4">
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <span className="text-black font-medium">BTC - Trade</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center py-2 text-black">
            <svg
              className="w-6 h-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4H10V12H4V4Z"></path>
              <path d="M4 16H10V20H4V16Z"></path>
              <path d="M14 12H20V20H14V12Z"></path>
              <path d="M14 4H20V8H14V4Z"></path>
            </svg>
            <span className="text-xs font-medium">Accounts</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg
              className="w-6 h-6 mb-1"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.66797 2.66602V4.66602M4.66797 8.66602V13.3327M11.3346 2.66602V4.66602M11.3346 11.3327V13.3327M2.66797 5.33268C2.66797 5.15587 2.73821 4.9863 2.86323 4.86128C2.98826 4.73625 3.15782 4.66602 3.33464 4.66602H6.0013C6.17811 4.66602 6.34768 4.73625 6.47271 4.86128C6.59773 4.9863 6.66797 5.15587 6.66797 5.33268V7.99935C6.66797 8.17616 6.59773 8.34573 6.47271 8.47075C6.34768 8.59578 6.17811 8.66602 6.0013 8.66602H3.33464C3.15782 8.66602 2.98826 8.59578 2.86323 8.47075C2.73821 8.34573 2.66797 8.17616 2.66797 7.99935V5.33268ZM9.33464 5.33268C9.33464 5.15587 9.40487 4.9863 9.5299 4.86128C9.65492 4.73625 9.82449 4.66602 10.0013 4.66602H12.668C12.8448 4.66602 13.0143 4.73625 13.1394 4.86128C13.2644 4.9863 13.3346 5.15587 13.3346 5.33268V10.666C13.3346 10.8428 13.2644 11.0124 13.1394 11.1374C13.0143 11.2624 12.8448 11.3327 12.668 11.3327H10.0013C9.82449 11.3327 9.65492 11.2624 9.5299 11.1374C9.40487 11.0124 9.33464 10.8428 9.33464 10.666V5.33268Z"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-xs">Trade</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg
              className="w-6 h-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M3.6 9h16.8"></path>
              <path d="M3.6 15h16.8"></path>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
            <span className="text-xs">Markets</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <ChartNoAxesColumnIncreasing className="w-6 h-6 mb-1" />
            <span className="text-xs">Performance</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg
              className="w-6 h-6 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}
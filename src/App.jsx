"use client"

import { useState } from "react"
import {
  Clock,
  Bell,
  ChevronDown,
  History,
  ChartNoAxesColumnIncreasing,
  ArrowDownUp,
} from "lucide-react"
import "./App.css" // импортируем стили

// Card components
function Card({ children, className = "", ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Open")
  const [activeNavTab, setActiveNavTab] = useState("Accounts")

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1></h1>
        <div className="header-icons">
          <Clock className="icon" />
          <div className="notification">
            <Bell className="icon" />
            <div className="dot"></div>
          </div>
        </div>
      </div>

      <div className="bg-title">
        <h1 className="title">Accounts</h1>
      </div>

      {/* Promotional Banner */}
      <div className="banner">
        <Card className="promo-card">
          <div className="promo-content">
            <div>
              <h3 className="promo-title">Trade with 3x fewer stop outs.</h3>
              <p className="promo-text">
                Trade with the lowest Stop Out Level in the market.
              </p>
            </div>
            <div className="promo-icon">
              <img
                className="img-promo-icon"
                src="https://my.exness.com/download/15/153ad/153adb8cb208d20c2b913495d706f60f.webp"
                alt=""
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Account Section */}
      <div className="orders">
        <div className="account-header">
          <div className="account-name">
            <h2>Akhmad</h2>
            <ChevronDown className="icon-small" />
          </div>
          <div className="account-actions">
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

        <div className="account-tags">
          <span>Real</span>
          <span>MT5</span>
          <span>Zero</span>
          <span className="account-id">#43052818</span>
        </div>

        {/* Balance */}
        <div className="balance">
          <h3>1000 USD</h3>
          <div className="actions">
            <div className="action">
              <div className="circle yellow">
                <svg
                  width="20"
                  height="20"
                  fontWeight="bold"
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
              </div>
              <span>Trade</span>
            </div>
            <div className="action">
              <div className="circle gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M8 12l4 4"></path>
                  <path d="M12 8v8"></path>
                  <path d="M16 12l-4 4"></path>
                </svg>
              </div>
              <span>Deposit</span>
            </div>
            <div className="action">
              <div className="circle gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M15 9l-6 6"></path>
                  <path d="M15 15v-6h-6"></path>
                </svg>
              </div>
              <span>Withdraw</span>
            </div>
            <div className="action">
              <div className="circle gray">
                <History className="icon" />
              </div>
              <span>History</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="">
        <div className="tabs">
          <button
            onClick={() => setActiveTab("Open")}
            className={activeTab === "Open" ? "tab active" : "tab"}
          >
            Open
          </button>
          <button
            onClick={() => setActiveTab("Pending")}
            className={activeTab === "Pending" ? "tab active" : "tab"}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab("Closed")}
            className={activeTab === "Closed" ? "tab active" : "tab"}
          >
            Closed
          </button>
          <div className="arrow_down_up">
            <ArrowDownUp className="nav-icon" />
          </div>
        </div>

        <div className="no-orders">
          <p>No open orders</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button>
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4H10V12H4V4Z"></path>
            <path d="M4 16H10V20H4V16Z"></path>
            <path d="M14 12H20V20H14V12Z"></path>
            <path d="M14 4H20V8H14V4Z"></path>
          </svg>
          <span>Account</span>
        </button>
        <button>
          <svg
            className="nav-icon"
            width="20"
            height="20"
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
          <span>Trade</span>
        </button>
        <button>
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          <span>Markets</span>
        </button>
        <button>
          <ChartNoAxesColumnIncreasing className="nav-icon" />
          <span>Performance</span>
        </button>
        <button>
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          <span>Profile</span>
        </button>
      </div>
    </div>
  )
}

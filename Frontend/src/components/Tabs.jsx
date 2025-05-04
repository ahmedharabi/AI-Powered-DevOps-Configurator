"use client"

import React, { useState } from "react"
import "../styles/Tabs.css"

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {React.Children.map(children, (child, index) => (
          <button className={`tab-button ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  )
}

export default Tabs

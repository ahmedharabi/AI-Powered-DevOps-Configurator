"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import "../styles/CodeBlock.css"

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block">
      <pre className="code-content">
        <code className="code-text">{code}</code>
      </pre>
      <button className={`copy-button ${copied ? "copied" : ""}`} onClick={copyToClipboard}>
        {copied ? <Check className="icon" /> : <Copy className="icon" />}
        <span className="sr-only">Copy code</span>
      </button>
    </div>
  )
}

export default CodeBlock

"use client"

import { createContext, useContext, useState } from "react"
import { cn } from "../../utils"

const TabsContext = createContext({})

export function Tabs({ defaultValue, children, ...props }) {
  const [value, setValue] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children }) {
  return <div className={cn("inline-flex items-center justify-center rounded-md p-1", className)}>{children}</div>
}

export function TabsTrigger({ className, value, children }) {
  const { value: selectedValue, setValue } = useContext(TabsContext)
  const isActive = selectedValue === value

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-slate-800 text-slate-100 shadow-sm" : "text-slate-400 hover:text-slate-100",
        className,
      )}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ className, value, children }) {
  const { value: selectedValue } = useContext(TabsContext)

  if (selectedValue !== value) return null

  return <div className={cn("mt-2", className)}>{children}</div>
}

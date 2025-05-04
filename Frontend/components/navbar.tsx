import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <span className="font-bold text-white">SD</span>
          </div>
          <span className="font-semibold text-xl">Smart DevOps</span>
        </Link>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
      </div>
    </nav>
  )
}

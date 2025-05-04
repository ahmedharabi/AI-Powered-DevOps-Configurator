import { Navbar } from "@/components/navbar"
import { ConfigGenerator } from "@/components/config-generator"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Smart DevOps Configurator</h1>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Describe your infrastructure needs and we'll generate the configuration files you need to get started.
        </p>
        <ConfigGenerator />
      </main>
      <Footer />
    </div>
  )
}

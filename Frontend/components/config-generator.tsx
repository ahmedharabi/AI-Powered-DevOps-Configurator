"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

// Sample generated configs


export function ConfigGenerator() {
  const [prompt, setPrompt] = useState("A Python web app running on FastAPI with Redis and deployed to Kubernetes.")
  const [configsDock, setConfigsDock] = useState<string>("")
  const [configsK8s, setConfigsK8s] = useState<string>("")
  const [configsHelm, setConfigsHelm] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    //docker files generation
    setLoading(true)
    const dockerResponse =await fetch("http://localhost:3001/docker",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "prompt":prompt
      })
    });
    const dockerData=await dockerResponse.json();


    //k8s files generation

    const k8sResponse =await fetch("http://localhost:3001/k8s",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "prompt":prompt
      })
    });
    const k8sData=await k8sResponse.json();
    setLoading(false)
    console.log(k8sData.response);
    setConfigsK8s(k8sData.response);
    console.log(dockerData.response);
    setConfigsDock(dockerData.response);




  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-4">
        <Textarea
          placeholder="Describe your infrastructure needs..."
          className="min-h-[120px] bg-slate-800 border-slate-700 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="w-full" size="lg" onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Config"}
        </Button>
      </div>

      {(
        <div className="mt-8 border border-slate-800 rounded-lg overflow-hidden">
          <Tabs defaultValue="dockerfile">
            <div className="bg-slate-800 px-4 py-2">
              <TabsList className="bg-slate-700">
                <TabsTrigger value="dockerfile">Dockerfile</TabsTrigger>
                <TabsTrigger value="kubernetes">Kubernetes YAML</TabsTrigger>
                <TabsTrigger value="helm">Helm Chart</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dockerfile" className="m-0">
              <CodeBlock code={configsDock} language="dockerfile" />
            </TabsContent>

            <TabsContent value="kubernetes" className="m-0">
              <CodeBlock code={configsK8s} language="yaml" />
            </TabsContent>

            <TabsContent value="helm" className="m-0">
              <CodeBlock code={configsHelm} language="yaml" />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

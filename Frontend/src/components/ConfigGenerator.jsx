"use client"

import { useState } from "react"
import CodeBlock from "./CodeBlock"
import Tabs from "./Tabs"
import "../styles/ConfigGenerator.css"

// Sample generated configs


function ConfigGenerator() {
  const [prompt, setPrompt] = useState("A Python web app running on FastAPI with Redis and deployed to Kubernetes.")
  const [configsDock, setConfigsDock] = useState(null)
  const [configsK8s, setConfigsK8s] = useState(null)
  const [configsHelm, setConfigsHelm] = useState(null)
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
    <div className="config-generator">
      <div className="input-container">
        <textarea
          placeholder="Describe your infrastructure needs..."
          className="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className={`generate-button ${loading ? "loading" : ""}`} onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Config"}
        </button>
      </div>

      {(
        <div className="results-container">
          <Tabs>
            <div label="Dockerfile">
              <CodeBlock code={configsDock} language="dockerfile" />
            </div>
            <div label="Kubernetes YAML">
              <CodeBlock code={configsK8s} language="yaml" />
            </div>
            <div label="Helm Chart">
              <CodeBlock code={configsHelm} language="yaml" />
            </div>
          </Tabs>
        </div>
      )}
    </div>
  )
}

export default ConfigGenerator

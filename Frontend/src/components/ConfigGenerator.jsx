"use client"

import { useState } from "react"
import CodeBlock from "./CodeBlock"
import Tabs from "./Tabs"
import "../styles/ConfigGenerator.css"

// Sample generated configs
const sampleConfigs = {
  dockerfile: `FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`,

  kubernetes: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: fastapi-app
  labels:
    app: fastapi-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fastapi-app
  template:
    metadata:
      labels:
        app: fastapi-app
    spec:
      containers:
      - name: fastapi-app
        image: fastapi-app:latest
        ports:
        - containerPort: 8000
        env:
        - name: REDIS_HOST
          value: redis-service
---
apiVersion: v1
kind: Service
metadata:
  name: fastapi-service
spec:
  selector:
    app: fastapi-app
  ports:
  - port: 80
    targetPort: 8000
  type: ClusterIP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  labels:
    app: redis
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:alpine
        ports:
        - containerPort: 6379
---
apiVersion: v1
kind: Service
metadata:
  name: redis-service
spec:
  selector:
    app: redis
  ports:
  - port: 6379
    targetPort: 6379`,

  helm: `apiVersion: v2
name: fastapi-app
description: A Helm chart for FastAPI with Redis
type: application
version: 0.1.0
appVersion: "1.0.0"

dependencies:
  - name: redis
    version: 16.x.x
    repository: https://charts.bitnami.com/bitnami
    
---
# values.yaml
replicaCount: 3

image:
  repository: fastapi-app
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80
  targetPort: 8000

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi

redis:
  enabled: true
  architecture: standalone`,
}

function ConfigGenerator() {
  const [prompt, setPrompt] = useState("A Python web app running on FastAPI with Redis and deployed to Kubernetes.")
  const [configs, setConfigs] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setConfigs(sampleConfigs)
      setLoading(false)
    }, 1500)
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

      {configs && (
        <div className="results-container">
          <Tabs>
            <div label="Dockerfile">
              <CodeBlock code={configs.dockerfile} language="dockerfile" />
            </div>
            <div label="Kubernetes YAML">
              <CodeBlock code={configs.kubernetes} language="yaml" />
            </div>
            <div label="Helm Chart">
              <CodeBlock code={configs.helm} language="yaml" />
            </div>
          </Tabs>
        </div>
      )}
    </div>
  )
}

export default ConfigGenerator

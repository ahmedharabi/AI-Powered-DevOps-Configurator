import express from "express";
import cors from 'cors';
import extractSection from "./utils/textExtraction.js";
const app=express();
import { default as docker } from "./routes/dockerRoute.js";
import { default as k8s } from "./routes/k8sRoute.js";
app.use(express.json());
app.use(cors());
/*let promptt="A Node.js web app built with Express, using MongoDB for data storage, and deployed on Kubernetes. The app should be containerized using Docker and configured to run on Kubernetes, with proper scaling and service management.\n"

import dockerResponse from "./controllers/dockerController.js"
import k8sResponse from "./controllers/k8sController.js";

const res=await dockerResponse(promptt);
const res2=await k8sResponse(promptt);*/


/*const parts = res.split("-----");

const dockerfile = parts[1]?.trim();      // content after 'DOCKERFILE'
const compose = parts[2]?.trim();         // content after 'DOCKERCOMPOSE'
const dockerignore = parts[3]?.trim();    // content after 'DOCKERIGNORE'*/
/*console.log('Dockerfile:\n', dockerfile);
console.log('Compose:\n', compose);
console.log('Dockerignore:\n', dockerignore);*/
/*
console.log(res2)
console.log(res)*/
app.use(docker);
app.use(k8s);



app.listen(3001)
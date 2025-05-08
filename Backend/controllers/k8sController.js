import getLlmResponse from "../services/llmService.js"

const k8sResponse=async (req,res)=>{
    let prompt=req.body.prompt
    prompt += " Respond ONLY with the raw content of the following 3 Kubernetes files in this exact order, separated by '-----' (five dashes):\n-----\n<Deployment YAML content>\n-----\n<Service YAML content>\n-----\n<Ingress YAML content>\nDo NOT include any explanation, markdown, comments, or additional text. Just the clean contents of the files, separated by '-----'.";


    const response=await getLlmResponse(prompt);
    res.json({response:response});
}
export default k8sResponse;
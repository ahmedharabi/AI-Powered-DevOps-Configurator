import getLlmResponse from "../services/llmService.js"

const dockerResponse=async (req,res)=>{
    let prompt =req.body.prompt;
    prompt += " Respond ONLY with the raw content of the following 3 files in this exact order, separated by '-----' (five dashes):\n-----\n<Dockerfile content>\n-----\n<docker-compose.yml content>\n-----\n<.dockerignore content>\nDo NOT include any explanation, markdown, comments, or additional text. Just the clean contents of the files, separated by '-----'.";


    const response=await getLlmResponse(prompt);
    res.json({response:response});
}
export default dockerResponse;
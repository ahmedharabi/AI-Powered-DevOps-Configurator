

const  getLlmResponse=async (prompt)=>{
    const response= await fetch("http://localhost:11434/api/generate",{
        method:"POST",

        body:JSON.stringify({
            model: "codellama",
            prompt: prompt,
            stream: false
        })
    })
    if(!response.ok){
        throw new Error("server error")
    }
    const data=await response.json();

    return data.response;
}
export default getLlmResponse;
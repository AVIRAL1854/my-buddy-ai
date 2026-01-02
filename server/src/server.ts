import cluster from "node:cluster";
import os from "os";
import app from "./app";


const PORT=5000;

if(cluster.isPrimary){
    const cpuCount=os.cpus().length;

    for(let i=0;i<cpuCount;i++){
        cluster.fork();
    }
}else{
    app.listen(PORT,()=>{
        console.log(`Worker processId ${process.pid} listening on Port: http://localhost:${PORT}/`)
    })
}
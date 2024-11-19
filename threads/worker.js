import { workerData, parentPort } from "node:worker_threads";
console.log(`Hello From Worker. Worker Data: ${workerData?.name}`);

parentPort.on("message", (mes) => {
  console.log("Message from Main Thread: " + mes);
});

parentPort.postMessage("Hello From Worker!");

import { Worker } from "node:worker_threads";
import path from "node:path";
console.log(`Main Thread...`);
const __dirname = import.meta.dirname;
const worker1 = new Worker(path.join(__dirname, "worker.js"), {
  workerData: [4, 5, 7],
});
// const worker2 = new Worker(path.join(__dirname, "worker.js"), {
//   workerData: { id: 1, name: "Bogdan" },
// });

worker1.postMessage("Hello worker1!");
worker1.on("message", (mes) => {
  console.log(mes);
});

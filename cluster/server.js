import express from "express";
import cluster from "node:cluster";
import os from "node:os";
const CPUs = os.cpus().length;
const PORT = 3000;
if (cluster.isPrimary) {
  console.log(`Primary cluster. PID: ${process.pid}`);
  for (let i = 0; i < CPUs - 1; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  app.get("/", (req, res) => {
    const arr = [];
    const N = 1000;
    for (let i = 0; i < N; i++) {
      arr.push(i * 3);
    }
    res.send(`Welcome to NODEJS server ${arr[N - 1]}`);
  });
  app.listen(PORT, () =>
    console.log(`Server is running htp://localhost:${PORT}`)
  );
}

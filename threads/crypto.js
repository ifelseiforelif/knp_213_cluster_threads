import crypto from "node:crypto";

const startDate = Date.now();
crypto.pbkdf2("nodejs", "salt", 10000000, 64, "sha512", () => {
  console.log(`Method 1. Time : ${Date.now() - startDate} ms`);
});
crypto.pbkdf2("nodejs", "salt", 10000000, 64, "sha512", () => {
  console.log(`Method 2. Time : ${Date.now() - startDate} ms`);
});

crypto.pbkdf2("nodejs", "salt", 10000000, 64, "sha512", () => {
  console.log(`Method 3. Time : ${Date.now() - startDate} ms`);
});

crypto.pbkdf2("nodejs", "salt", 10000000, 64, "sha512", () => {
  console.log(`Method 4. Time : ${Date.now() - startDate} ms`);
});
crypto.pbkdf2("nodejs", "salt", 10000000, 64, "sha512", () => {
  console.log(`Method 5. Time : ${Date.now() - startDate} ms`);
});

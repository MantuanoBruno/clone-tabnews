/* eslint-disable no-unused-vars */
const { spawn } = require("node:child_process");

function run(cmd, args, options = {}) {
  return spawn(cmd, args, { stdio: "inherit", shell: true, ...options });
}

console.log("🔼 Subindo serviços...");
run("npm", ["run", "services:up"]);

console.log("⏳ Aguardando database...");
run("npm", ["run", "services:wait:database"]);

console.log("📦 Rodando migrations...");
run("npm", ["run", "migrations:up"]);

console.log("🚀 Iniciando Next...");
const next = run("next", ["dev"]);

function shutdown() {
  console.log("\n🛑 Encerrando ambiente...");
  run("npm", ["run", "services:stop"]);
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

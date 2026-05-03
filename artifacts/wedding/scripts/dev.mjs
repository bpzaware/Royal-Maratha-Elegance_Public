import { spawn } from "node:child_process";

const child = spawn("pnpm", ["exec", "vite", "--config", "vite.config.ts", "--host", "0.0.0.0"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    VITE_FORCE_NO_ROLLUP_NATIVE: "1",
  },
});

child.on("exit", (code) => process.exit(code ?? 0));

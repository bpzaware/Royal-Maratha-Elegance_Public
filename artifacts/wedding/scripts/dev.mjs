import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const viteBin = require.resolve("vite/bin/vite.js");

const child = spawn(process.execPath, [viteBin, "--config", "vite.config.ts", "--host", "0.0.0.0"], {
  stdio: "inherit",
  env: {
    ...process.env,
    VITE_FORCE_NO_ROLLUP_NATIVE: "1",
  },
});

child.on("exit", (code) => process.exit(code ?? 0));

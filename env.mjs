import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export default (env = createEnv({
  server: { PORT: z.string().min(1).max(5) },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
}));

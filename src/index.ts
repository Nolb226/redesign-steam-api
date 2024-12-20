import { createServer } from "@/server";
import { env } from "./libraries/env";
import { Logger } from "./libraries/logger";
const app = createServer();

app.listen(env.PORT, () => {
  Logger.info(`Server started on port ${env.PORT}`);
});

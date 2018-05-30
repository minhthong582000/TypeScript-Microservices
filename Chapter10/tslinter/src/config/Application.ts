import { logger } from "../common/logging";
import { ExpressConfig } from "./Express";

export class Application {

  public server: any;
  public express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();

    const port = 3000;
    this.server = this.express.app.listen(port, () => {
      logger.info(`Server Started! Express: http://localhost:${port}`);
});
}

}

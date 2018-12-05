import { QhunEngineServer, Router } from "@qhun-engine/server";
import { FrontendController } from "./controller/FrontendController";
import { AssetController } from "./controller/AssetController";

@QhunEngineServer({
    documentRoot: __dirname + "/../../dist/public",
    httpPort: 7500
})
class QhunExampleServer {

    constructor(
        router: Router
    ) {

        // add all controllers to the router
        router.addController(FrontendController);
        router.addController(AssetController);
    }
}

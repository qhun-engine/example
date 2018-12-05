import { Controller, RequestMapping, FileResponse } from "@qhun-engine/server";

@Controller("/")
export class FrontendController {

    @RequestMapping()
    public serveFrontendFiles(): FileResponse {

        return new FileResponse("index.html");
    }

    @RequestMapping({ path: "qhunExampleGame.js" })
    public serveGame(): FileResponse {

        return new FileResponse("game.js");
    }

    @RequestMapping({ path: "qhunExampleGame.css" })
    public serveCss(): FileResponse {

        return new FileResponse("game.css");
    }
}

import { Controller, RequestMapping, FileResponse } from "@qhun-engine/server";
import * as express from "express";

@Controller("/assets")
export class AssetController {

    @RequestMapping({ path: "/*" })
    public serveAssets(request: express.Request): FileResponse {

        return new FileResponse(request.url);
    }
}
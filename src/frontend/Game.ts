import {
    QhunGame, SceneManager, AnimationManager, EngineReadyMessage,
    Once, Vector, FollowElasticCenterStrategy, On, Camera
} from "@qhun-engine/engine";
import { MainEntity } from "./MainEntity";
import { MainScene } from "./MainScene";
import { MainWorld } from "./world/MainWorld";

@QhunGame({
    exposeGameInstance: true,
    renderer: "canvas",
    debugMode: true,
    fps: 60
})
class Game {

    private entity!: MainEntity;
    private camera!: Camera;

    constructor(
        private sceneMan: SceneManager,
        private anim: AnimationManager
    ) {

        // noop
    }

    @Once(EngineReadyMessage)
    private async startGame(): Promise<void> {

        const world = new MainWorld();

        this.entity = new MainEntity();
        this.entity.setSize(Vector.from(
            this.entity.getTexture().width,
            this.entity.getTexture().height
        ));

        const scene = new MainScene().setWorld(world).addEntity(this.entity);

        await this.sceneMan.switchScene(scene);

        this.camera = world.createCamera();
        this.camera.follow(this.entity, new FollowElasticCenterStrategy(.5, .8));
        scene.setCamera(this.camera);
    }
}

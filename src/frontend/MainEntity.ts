import { DeclareAnimation, DeclareTexture, ActorEntity } from "@qhun-engine/engine";

@DeclareTexture("assets/entity.png")
export class MainEntity extends ActorEntity {

    protected speed: number = 100;
    protected friction: number = .5;
}

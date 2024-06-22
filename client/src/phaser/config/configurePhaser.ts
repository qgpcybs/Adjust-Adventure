import {
    defineSceneConfig,
    AssetType,
    defineScaleConfig,
    defineMapConfig,
    defineCameraConfig,
} from "@latticexyz/phaserx";
import { TileAnimations, Tileset } from "../../assets/world";
import {
    Sprites,
    Assets,
    Maps,
    Scenes,
    TILE_HEIGHT,
    TILE_WIDTH,
    Animations,
} from "./constants";

const ANIMATION_INTERVAL = 200;

const mainMap = defineMapConfig({
    chunkSize: TILE_WIDTH * 64, // tile size * tile amount
    tileWidth: TILE_WIDTH,
    tileHeight: TILE_HEIGHT,
    backgroundTile: [Tileset.Land],
    animationInterval: ANIMATION_INTERVAL,
    tileAnimations: TileAnimations,
    layers: {
        layers: {
            Background: { tilesets: ['Water'] },
            Foreground: { tilesets: ['Water', 'Tilemap_Flat'] },
        },
        defaultLayer: "Background",
    },
});

export const phaserConfig = {
    sceneConfig: {
        [Scenes.Main]: defineSceneConfig({
            assets: {
                [Assets.Tileset_Water]: {
                    type: AssetType.Image,
                    key: Assets.Tileset_Water,
                    path: "assets/tilesets/Water.png",
                },
                [Assets.Tileset_Tilemap_Flat]: {
                    type: AssetType.Image,
                    key: Assets.Tileset_Tilemap_Flat,
                    path: "assets/tilesets/Tilemap_Flat.png",
                },
                [Assets.MainAtlas]: {
                    type: AssetType.MultiAtlas,
                    key: Assets.MainAtlas,
                    // Add a timestamp to the end of the path to prevent caching
                    path: `assets/atlases/atlas.json?timestamp=${Date.now()}`,
                    options: {
                        imagePath: "assets/atlases/",
                    },
                },
            },
            maps: {
                [Maps.Main]: mainMap,
            },
            sprites: {
                [Sprites.Soldier]: {
                    assetKey: Assets.MainAtlas,
                    frame: "sprites/soldier/idle/0.png",
                },
            },
            animations: [
                {
                    key: Animations.RockIdle,
                    assetKey: Assets.MainAtlas,
                    startFrame: 0,
                    endFrame: 0,
                    frameRate: 6,
                    repeat: -1,
                    prefix: "sprites/rock/",
                    suffix: ".png",
                },
                {
                    key: Animations.ScissorsIdle,
                    assetKey: Assets.MainAtlas,
                    startFrame: 0,
                    endFrame: 0,
                    frameRate: 6,
                    repeat: -1,
                    prefix: "sprites/scissors/",
                    suffix: ".png",
                },
                {
                    key: Animations.PaperIdle,
                    assetKey: Assets.MainAtlas,
                    startFrame: 0,
                    endFrame: 0,
                    frameRate: 6,
                    repeat: -1,
                    prefix: "sprites/paper/",
                    suffix: ".png",
                },
            ],
            tilesets: {
                Water: {
                    assetKey: Assets.Tileset_Water,
                    tileWidth: TILE_WIDTH,
                    tileHeight: TILE_HEIGHT,
                },
                Tilemap_Flat: {
                    assetKey: Assets.Tileset_Tilemap_Flat,
                    tileWidth: TILE_WIDTH,
                    tileHeight: TILE_HEIGHT,
                },
            },
        }),
    },
    scale: defineScaleConfig({
        parent: "phaser-game",
        zoom: 1,
        mode: Phaser.Scale.NONE,
    }),
    cameraConfig: defineCameraConfig({
        pinchSpeed: 1,
        wheelSpeed: 1,
        maxZoom: 3,
        minZoom: 1,
    }),
    cullingChunkSize: TILE_HEIGHT * 16,
};

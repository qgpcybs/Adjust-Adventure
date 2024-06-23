import { PhaserLayer } from "../createPhaserLayer";
import { Direction } from "../../dojo/utils";
import { Data } from "../config/data";

export const controls = (layer: PhaserLayer) => {
    const {
        scenes: {
            Main: { input, objectPool, maps },
        },
        networkLayer: {
            systemCalls: { move },
            account: account,
        },
    } = layer;

    input.onKeyPress(
        (keys) => keys.has("W"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Up);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("A"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum - 1];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Left);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("S"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64 + 2) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Down);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("D"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.ceil(playerObj.position.y / 64) * 24 + Math.ceil(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum + 1];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Right);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("UP"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Up);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("LEFT"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum - 1];
            console.log(tileIndex)
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Left);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("DOWN"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.floor(playerObj.position.y / 64 + 2) * 24 + Math.floor(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum];
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Down);
        }
    );

    input.onKeyPress(
        (keys) => keys.has("RIGHT"),
        () => {
            const playerObj = objectPool.get(Data.playerEntity.toString(), "Sprite");
            const tileNum = Math.ceil(playerObj.position.y / 64) * 24 + Math.ceil(playerObj.position.x / 64)
            const tileIndex = Array.from(maps.Main.tiles['Foreground'].map)[tileNum + 1];
            if (!Data.canMove || !tileIndex || tileIndex[1] == 24) return;
            Data.canMove = false;
            move(account, Direction.Right);
        }
    );
};

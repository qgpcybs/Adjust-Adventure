export enum Scenes {
    Main = "Main",
}

export enum Maps {
    Main = "Main",
}

export enum Animations {
    RockIdle = "RockIdle",
    PaperIdle = "PaperIdle",
    ScissorsIdle = "ScissorsIdle",
}

// image addresses

export enum Sprites {
    Soldier,
    Warrior_Blue
}

export enum RPSSprites {
    Rock = "r",
    Paper = "p",
    Scissors = "s",
}

export const ImagePaths: { [key in RPSSprites]: string } = {
    [RPSSprites.Rock]: "rock.png",
    [RPSSprites.Paper]: "paper.png",
    [RPSSprites.Scissors]: "scissors.png",
};

export enum Assets {
    MainAtlas = "MainAtlas",
    Tileset_Water = "Tileset_Water",
    Tileset_Tilemap_Flat = "Tileset_Tilemap_Flat",
    Warrior_Blue = 'Warrior_Blue'

}

export enum Direction {
    Unknown,
    Up,
    Down,
    Left,
    Right,
}

export const TILE_HEIGHT = 64;
export const TILE_WIDTH = 64;

// contract offset so we don't overflow
export const ORIGIN_OFFSET = 100;

export const MAP_AMPLITUDE = 16;

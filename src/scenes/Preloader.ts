import Phaser from "phaser";

export default class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader');
    }
    preload(){
        this.load.image('tiles', 'tiles/ground_walls.png');
        this.load.tilemapTiledJSON('debug_dungeon','tiles/debug_dungeon.json');
    }
    create(){
        console.log("<preload>");
        this.scene.start('tBOI');
        console.log("</preload>");
    }
}
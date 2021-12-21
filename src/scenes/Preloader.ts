import Phaser from "phaser";

export default class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader');
    }
    preload(){
        this.load.image('tiles', 'tiles/ground_walls.png');
        this.load.tilemapTiledJSON('debug_dungeon','tiles/debug_dungeon.json');
        
        this.load.atlas('knight', 'character/knight.png', 'character/knight_atlas.json');

        this.load.atlas("flyer","enemies/flyer_run.png","enemies/flyer_run_atlas.json")
    }
    create(){
        console.log("<preload>");
        this.scene.start('tBOI');
        console.log("</preload>");
    }
}
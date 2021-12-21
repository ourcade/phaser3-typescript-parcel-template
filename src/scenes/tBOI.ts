import Phaser from 'phaser'

export default class tBOI extends Phaser.Scene
{
	constructor()
	{
		super('tBOI');
	}

	preload()
    {

    }

    create()
    {
        console.log("<game>");
        const map = this.make.tilemap({key: 'debug_dungeon'});
        console.log("<game>");

        const tileset = map.addTilesetImage('debug_dungeon2', 'tiles');
        console.log("<game>");

        map.createLayer("ground", tileset);
        map.createLayer("walls", tileset);
        console.log("<game>");

        console.log("</game>");
    }
}

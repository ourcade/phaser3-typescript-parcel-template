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
        const tileset = map.addTilesetImage('debug_dungeon2', 'tiles');
        const ground = map.createLayer("ground", tileset);
        const walls = map.createLayer("walls", tileset);
        walls.setCollisionByProperty({collides:true});

        walls.setScale(3);
        ground.setScale(3);

        const knight = this.add.sprite(128, 128, 'knight', 'knight_m_idle_anim_f0');
        knight.setScale(3);

        // const debugGraphics = this.add.graphics().setAlpha(0.7);            // comment/uncomment 
        // walls.renderDebug(debugGraphics,{                                   // here
        //     tileColor: null,                                                // for
        //     collidingTileColor: new Phaser.Display.Color(243,234,48,255),   // debug 
        //     faceColor: new Phaser.Display.Color(40,39,37,255)               // collision
        // })                                                                  // graphics

        console.log("</game>");

    }
}

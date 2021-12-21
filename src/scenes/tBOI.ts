import Phaser from 'phaser'
import {debugDraw} from "../utils/debug"
import Flyer from "../enemies/Flyer"
import {createFlyerAnims} from "../anims/FlyerAnim"


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

        const knight = this.add.sprite(128, 128, 'knight', 'knight_m_idle_anim_f0');

        walls.setScale(3);
        ground.setScale(3);
        knight.setScale(3);

        createFlyerAnims(this.anims);

        //const flyer = this.physics.add.sprite(310,310,'flyer','tiny_zombie_run_anim_f0');
        //flyer.setScale(2.5);
        //flyer.anims.play("flyer_run");
        //flyer.setFlipX(true);

        const flyers = this.physics.add.group({
            classType: Flyer
        })
        const flyer1 = flyers.get(320,320,"flyer");

        debugDraw(walls, this); //comment/uncomment for drawing debug        
        console.log("</game>");
    }
}

import Phaser from 'phaser'

export default class tBOI extends Phaser.Scene
{
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private knight!: Phaser.Physics.Arcade.Sprite
	constructor()
	{
		super('tBOI');
	}

	preload()
    {
        this.cursors = this.input.keyboard.createCursorKeys()

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

        this.knight = this.physics.add.sprite(128, 128, 'knight', 'knight_m_idle_anim_f0');
        this.knight.setScale(3);
        this.knight.body.setSize(this.knight.width*0.6, this.knight.height*0.2);
        this.knight.body.setOffset(3, 20);

        this.anims.create({
            key: 'knight-idle',
            frames: [{ key: 'knight', frame:'knight_f_idle_anim_f0'}]
        })

        this.anims.create({
            key: 'knight-run',
            frames: this.anims.generateFrameNames('knight', { start:0, end:3, prefix:'knight_f_run_anim_f' }),
            repeat: -1,
            frameRate: 15
        })

        this.physics.add.collider(this.knight, walls);

        // const debugGraphics = this.add.graphics().setAlpha(0.7);            // comment/uncomment 
        // walls.renderDebug(debugGraphics,{                                   // here
        //     tileColor: null,                                                // for
        //     collidingTileColor: new Phaser.Display.Color(243,234,48,255),   // debug 
        //     faceColor: new Phaser.Display.Color(40,39,37,255)               // collision
        // })                                                                  // graphics

        console.log("</game>");

    }

    update(t: number, dt: number) {
        if(!this.cursors || !this.knight)
        {
            return
        }

        const speed = 300;
        let velocityx: number;
        let velocityy: number;
        velocityx = 0;
        velocityy = 0;
        this.knight.setVelocity(0, 0);
        
        
        if (this.cursors.left.isDown){
            velocityx = -speed;
            this.knight.setFlipX(true);
        } else if (this.cursors.right.isDown){
            velocityx = speed;
            this.knight.setFlipX(false);
        }
        if (this.cursors.up.isDown){
            velocityy = -speed;
        } else if (this.cursors.down.isDown){
            velocityy = speed;
        }
        if(velocityx != 0 && velocityy != 0){
            velocityx/=1.42;
            velocityy/=1.42;    
        }
        if(velocityx == 0 && velocityy == 0){
            this.knight.anims.play('knight-idle');
        } else{
            this.knight.anims.play('knight-run', true);
        }
        this.knight.setVelocity(velocityx, velocityy);
    }
}

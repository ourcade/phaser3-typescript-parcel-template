import Phaser, { Physics } from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
  private platform?: Phaser.Physics.Arcade.StaticGroup
  private player?: Phaser.Physics.Arcade.Sprite
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private stars?: Phaser.Physics.Arcade.Group
  private score = 0
  private scoreText?: Phaser.GameObjects.Text
  private bombs?: Phaser.Physics.Arcade.Group
  private gameOver = false

	constructor()
	{
		super('hello-world')
	}

	preload()
    {
      this.load.image('sky', 'assets/sky.png')
      this.load.image('ground', 'assets/platform.png')
      this.load.image('star', 'assets/star.png')
      this.load.image('bomb', 'assets/bomb.png')
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48})
    }

    create()
    {
      this.add.image(400, 300, 'sky')
      this.platform = this.physics.add.staticGroup()
      const ground = this.platform.create(400, 568, 'ground') as Phaser.Physics.Arcade.Sprite
      
      ground
        .setScale(2)
        .refreshBody()

      this.platform.create(600, 400, 'ground')
      this.platform.create(50, 250, 'ground')
      this.platform.create(750, 220, 'ground')

      this.player = this.physics.add.sprite(100, 450, 'dude')
      this.player.setBounce(0.2)
      this.player.setCollideWorldBounds(true)

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      })

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
      })

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      })

      this.physics.add.collider(this.player, this.platform)
      this.cursors = this.input.keyboard.createCursorKeys()

      this.stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
      })

      this.stars.children.iterate(c => {
        const child = c as Phaser.Physics.Arcade.Image
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
      })

      this.physics.add.collider(this.stars, this.platform)
      this.physics.add.overlap(this.player, this.stars, this.handleCollectStar, undefined, this)

      this.scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        color: '#034'
      })

      this.bombs = this.physics.add.group()

      this.physics.add.collider(this.bombs, this.platform)
      this.physics.add.collider(this.player, this.bombs, this.handleHitBomb, undefined, this)
    }

    private handleHitBomb(player: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject)
    {
      this.physics.pause()

      this.player?.setTint(0xff000)
      this.player?.anims.play('turn')

      this.gameOver = true
    }

    private handleCollectStar(player: Phaser.GameObjects.GameObject, s: Phaser.GameObjects.GameObject)
    {
      const star = s as Phaser.Physics.Arcade.Image
      star.disableBody(true, true)

      this.score += 10
      this.scoreText?.setText(`Score: ${this.score}`)

      if(this.stars?.countActive(true) === 0)
      {
        this.stars.children.iterate(c => {
          const child = c as Phaser.Physics.Arcade.Image
          child.enableBody(true, child.x, 0, true, true)
        })

        if(this.player)
        {
          const x = this.player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400)

          const bomb: Phaser.Physics.Arcade.Image = this.bombs?.create(x, 16, 'bomb')
          bomb.setBounce(1)
          bomb.setCollideWorldBounds(true)
          bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
        }


        
      }


    }

    update()
    {
      if (!this.cursors)
      {
        return
      }

      if (this.cursors.left?.isDown)
      {
        this.player?.setVelocityX(-160)
        this.player?.anims.play('left', true)
      }
      else if (this.cursors.right?.isDown)
      {
        this.player?.setVelocityX(160)
        this.player?.anims.play('right', true)
      }
      else
      {
        this.player?.setVelocityX(0)
        this.player?.anims.play('turn')
      }

      if (this.cursors.up?.isDown && this.player?.body.touching.down)
      {
        this.player.setVelocityY(-330)
      }
    }
}

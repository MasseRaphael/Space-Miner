import Phaser from '../lib/phaser.js';

export default class Level extends Phaser.Scene
{
    constructor()
    {
        super('level')
    }

    init()
    {
        
    }

    preload()
    {
        this.load.image('space1', 'assets/background/purple.png')
        this.load.image('mine', 'assets/sprite/meteor_squareDetailedLarge.png')
    }

    create()
    {
        this.add.image(128, 128, 'space1').setScale(2)
        this.add.image(256, 556, 'mine')
    }

    update()
    {

    }
}
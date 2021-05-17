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
        //  Preload des images
        this.load.image('space1', 'assets/background/purple.png')
        this.load.image('mine1', 'assets/sprite/meteor_squareDetailedLarge.png')
        this.load.image('enemy1', 'assets/sprite/enemy_A.png')

        //  Preload des contrôles (Souris)
        this.pointer = this.input.activePointer;
    

    }

    //----------------------------------------------------CREATE--------------------------------------------------------------//

    create()
    {
        
    }

    update()
    {

    }
}
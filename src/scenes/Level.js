import Phaser from '../lib/phaser.js';

export default class Level extends Phaser.Scene
{
    score = 500

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
        this.load.image('mine', 'assets/sprite/meteor_squareDetailedLarge.png')
    }

    create()
    {

        //  Pose des images
        this.add.image(128, 128, 'space1').setScale(2)
        this.add.image(256, 556, 'mine')


        //  Définition du score
        const styleScore = {fontSize: 20}
        this.scoreText = this.add.text(10, -120, 'Score: 0', styleScore)


    }

    update()
    {

    }

    

    collectScore()
    {
        this.score++
        const value = `Score: ${this.score}`
        this.scoreText.text = value
    }



}
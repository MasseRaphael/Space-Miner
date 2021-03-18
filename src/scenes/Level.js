import Phaser from '../lib/phaser.js';
//import { GameObjects } from 'phaser';


export default class Level extends Phaser.Scene
{

    score;

    constructor()
    {
        super('level')
        
    }

    init()
    {
        this.score = 500;
    }

    preload()
    {
        //  Preload des images
        this.load.image('space1', 'assets/background/purple.png')
        this.load.image('mine', 'assets/sprite/meteor_squareDetailedLarge.png')

        //  Preload des contrôles (Souris)
        this.pointer = this.input.activePointer;
    

    }

    create()
    {

        //  Pose des images
        this.add.image(128, 128, 'space1').setScale(2);
        this.mine = this.physics.add.image(256, 556, 'mine');


        //  Définition du score
        const styleScore = {fontSize: 20};
        this.scoreText = this.add.text(10, -120, `Score: ${this.score}`, styleScore);


    }

    collectScore()
    {
        this.score++;
        const value = `Score: ${this.score}`;
        this.scoreText.text = value;
    }

    update()
    {
        let truc = this;
        this.mine.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            truc.collectScore()
        });
        
    }

    



}
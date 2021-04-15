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
        this.load.image('mine1', 'assets/sprite/meteor_squareDetailedLarge.png')
        this.load.image('enemy1', 'assets/sprite/enemy_A.png')

        //  Preload des contrôles (Souris)
        this.pointer = this.input.activePointer;
    

    }

    create()
    {

        //  Pose des images
        this.add.tileSprite(640, 360, 1280, 720, 'space1').setScale(1);
        this.mine = this.physics.add.image(156, 556, 'mine1');
        this.enemy = this.physics.add.image(1200, 556, 'enemy1');
        this.enemy.rotation = 4.7;

        //  Définition du score
        const styleScore = {fontSize: 20};
        this.scoreText = this.add.text(10, 0, `Score: ${this.score}`, styleScore);

        //  Augmentation du score
        let truc = this;
        this.mine.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            truc.collectScore()
        });

        //  Création d'un timer? (Itère une fois seulement)
        let timer = this.time.addEvent({
            delay: 2000,
            callback: this.collectScore(),
            callbackScope: this,
            loop: true
            
        });

        // Gestion des collisions

        this.physics.add.collider(this.mine, this.enemy, perteArgent(), undefined, this);


    }

    collectScore()
    {
        this.score++;
        const value = `Score: ${this.score}`;
        this.scoreText.text = value;
    }

    update()
    {
        this.enemy


    }

    



}
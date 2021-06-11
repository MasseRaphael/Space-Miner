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
        this.score = 5000;
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

        //  Pose des images

            //  Background
        this.add.tileSprite(640, 360, 1280, 720, 'space1').setScale(1);
            //  Mine
        this.mine = this.physics.add.image(156, 556, 'mine1');
            //Ennemi
        this.posx = 1200;
        this.enemy = this.physics.add.image(this.posx, 556, 'enemy1');
        this.enemy.rotation = 4.7;

        //  Définition du score
        const styleScore = {fontSize: 20};
        this.scoreText = this.add.text(10, 0, `Score: ${this.score}`, styleScore);

        //  Augmentation du score
        let truc = this;
        this.mine.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            truc.collectScore(10)
        });

        //  Création d'un timer? (Itère une fois seulement)
        /*let timer = this.time.addEvent({
            delay: 2000,
            callback: this.collectScore,
            callbackScope: this,
            loop: true
        });*/

        // Gestion des collisions

        this.physics.add.collider(this.mine, this.enemy, this.perteArgent(), null, this);


    }

    collectScore(dt)
    {
        this.score += dt;

        //  const value = `Score: ${this.score}`;
        this.scoreText.text = `Score: ${Math.floor(this.score)}`;
    }

    perteArgent()
    {
        this.score = Math.floor(this.score - (Math.floor(0.20*this.score)));
        //  const value = `Score: ${this.score}`;

        this.scoreText.text = `Score: ${this.score}`;
        //  this.enemy.destroy();
    }

    avancerEnemy(dt)
    {
        if (this.posx >= 156)
        {
            this.posx -= dt;
            this.enemy.setPosition(this.posx, 556);
        }
        else
        {
            this.perteArgent();
            return;
        }

    }

    //----------------------------------------------------UPDATE--------------------------------------------------------------//

    update(total, dt)
    {
        this.collectScore(this.CalculDelta(dt, 1))
        this.avancerEnemy(dt / 1000 * 100);
    }

    CalculDelta(dt, ups)    //  Unité par secondes
    {
        return (dt / 1000 * ups);
    }
}
import Phaser from '../lib/phaser.js';

import Enemy from '../game/Enemy.js';
import Mines from '../game/Mines.js';
import Turrets from '../game/Turrets.js';

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

        this.add.tileSprite(640, 360, 1280, 720, 'space1').setScale(1);

        this.enemies = this.physics.add.group({
            classType: Enemy
        });
        let enemy = this.enemies.get(640, 460, 'enemy1');

        const style = { color: '#fff', fontSize: 24};
        this.add.text(640, 150, `hp: ${enemy.hp}`, style)
            .setOrigin(0.5, 0);
        this.add.text(640, 250, `speed: ${enemy.speed}`, style)
            .setOrigin(0.5, 0);

        this.mines = this.physics.add.group({
            classType: Mines
        });

        let mine = this.mines.get(320, 460, 'mine1');

        this.add.text(320, 150, `level: ${mine.level}`, style)
            .setOrigin(0.5, 0);
        this.add.text(320, 250, `speed: ${mine.speed}`, style)
            .setOrigin(0.5, 0);

        this.turrets = this.physics.add.group({
            classType: Turrets
        });

        let turret = this.turrets.get(960, 460, 'enemy1');

        this.add.text(960, 150, `level: ${turret.level}`, style)
            .setOrigin(0.5, 0);
        this.add.text(960, 250, `speed: ${turret.speed}`, style)
            .setOrigin(0.5, 0);
        this.add.text(960, 350, `damages: ${turret.damages}`, style)
            .setOrigin(0.5, 0);


    }

    update()
    {

    }
}
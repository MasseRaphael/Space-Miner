import Phaser from '../lib/phaser.js';

export default class Enemy extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        
        super(scene, x, y, texture)

        this.hp = 100;
        this.speed = 10;
    }
}
import Phaser from '../lib/phaser.js';

export default class Turrets extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        
        super(scene, x, y, texture)

        this.level = 1;
        this.speed = 10;
        this.damages = 25;
    }
}
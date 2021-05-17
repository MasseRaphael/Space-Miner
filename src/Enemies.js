import Phaser from 'lib/phaser.js';

export default class Enemies extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        
        super(scene, x, y, texture)

    }
}
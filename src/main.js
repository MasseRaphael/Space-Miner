import Phaser from './lib/phaser.js';
import Level from './scenes/Level.js';

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [Level],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        },
    }
})

console.dir(Phaser);
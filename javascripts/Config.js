var Config = { sound: {}, image: {} };

//base:
Config.debug = false;
Config.framerate = 60;
Config.backgroundColor = '#FC0';

//piece:
Config.originalSize = { width: 400, height: 425 };

Config.image.src = "aj.png";
Config.image.transform = [-135.5, 20, 0.9473, 0.9473];

Config.sound.click = "sounds/glassbreaking";
Config.sound.loop = "sounds/loop";
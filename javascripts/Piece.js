(function(window) {
	const Piece = function(canvas, config) {
		this.initialize(canvas, config);
	}
	const p = Piece.prototype = new BasePiece();
	
	p.initialize = function(canvas, config) {
		BasePiece.prototype.initialize.call(this, canvas, config);
		this.initSound();
	}

	/*********************************
	 *			    FLOW
	 ********************************/

	p.setSize = function(w, h, dpr) {
		this.dpr = dpr;
		w = Math.floor(w * dpr);
		h = Math.floor(h * dpr);
		//
		const os = this.config.originalSize, ow = os.width, oh = os.height;
		const s = w / h > ow / oh ? h / oh : w / ow;
		this.stage.setTransform((w - ow * s) / 2, (h - oh * s) / 2, s, s);
		log("setSize", w, h, this.dpr);
	}

	p.start = function() {
		BasePiece.prototype.start.apply(this);
		const cfg = this.config.image;
		const img = new Image();
		img.onload = function() {
			this.bitmap = new createjs.Bitmap(img);
			const s = cfg.scale, w = img.width * s, h = img.height * s;
			this.bitmap.setTransform.apply(this.bitmap, cfg.transform);
			this.stage.addChild(this.bitmap);
			//
			this.addOns = this.stage.addChild(new Assets.AddOns());
			[this.addOns.part0, this.addOns.part1, this.addOns.part2].forEach(part => {
				part.hitArea = part.hitarea;
				part.addEventListener("click", function(e) { this.changePart(e.target); }.bind(this));
			});
		}.bind(this);
		img.src = cfg.src;
	}

	p.changePart = function(part) {	
		part.gotoAndStop((part.currentFrame+1)% part.totalFrames);
		SoundManager.play(this.config.sound.click);
	}

	/*********************************
	 *			    SOUND
	 ********************************/

	p.initSound = function() {
		const sounds = [this.config.sound.click, this.config.sound.loop];
		SoundManager.init(sounds, function() { log("Sounds loaded"); });
		this.handleClickToInitiateSound = this.handleClickToInitiateSound.bind(this);
		this.stage.addEventListener("stagemousedown", this.handleClickToInitiateSound, true);
	}

	p.handleClickToInitiateSound = function() {
		log("handleClickToInitiateSound", SoundManager.loaded.length);
		if (SoundManager.loaded.length) {
			this.stage.removeEventListener("stagemousedown", this.handleClickToInitiateSound, true);
			SoundManager.play(this.config.sound.loop, { loop: -1 });
		}
	}

	window.Piece = Piece;

}(window));


(function (cjs) {

var p; 
var lib= window.Assets = {};

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wigsHitarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxEKUQhggbA4hgIgFgCQgLgEgIgJQgJgNgDgPQgDgSADgSQADgXAPgSQgSgRgEgUQghi2ALi4QASkmDZi4QBbgYBZgcQCqg2Cog+QDMhMDXAJQDdALDIBfQCVgBCPArQB3AkBYBYQBlBkA4CFQB0EUgJEtQAgA1ADA9QAGBjhFA4QpuAdpvABQkyABkyAQQgjACgjAAQiYAAiTgpg");
	this.shape.setTransform(119.7629,70.1148);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.wigsHitarea, new cjs.Rectangle(0,0,239.6,140.2), null);


(lib.moustachesHitarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsDJeIgHgLIAQAMIgJgBgAhnIfQkjgWjbi1Qlfkig6nOQgFgmgYgeQgFgGgHgGIgMgLQgJgJgHgKIAEgsIA8ACQAtgiA8gGQDGgGDFAQQCEAKCFADQCFADCEABIEqABQFjgDFeAvQBtAOgeB8QhsG0leFDQgXAWgcAQIgNAKIgMALIgWAYQhBAXhCASQjIA4jRAAQguAAgugCg");
	this.shape.setTransform(109.1584,60.6932);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moustachesHitarea, new cjs.Rectangle(0,0,218.3,121.4), null);


(lib.glassesHitarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AwmFuQgSgygLgzQgThVAPhYQAkjZgEjhIAAgMIAxABQQgAAQfgWQgZCCgCCHQgFD9AmD1QltAEltAAQrMAArPgSg");
	this.shape.setTransform(110.2814,38.4361);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glassesHitarea, new cjs.Rectangle(0,0,220.6,76.9), null);


(lib.part2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.frame_0 = function() {
		this.stop();
	}
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	this.hitarea = new lib.moustachesHitarea();
	this.hitarea.name = "hitarea";
	this.hitarea.setTransform(-277.55,43.45,1,1,0,0,0,109.2,60.7);
	this.hitarea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitarea).wait(6));

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmfDKIgNgJQgDgJgBgKQgCgOABgOIACgIIgiACIgNgJIgDgKQgFgNACgPQBNhKBPhHQAOgNASgFIgBgEIAAgJIAAgJIAAgJIADgKQADgFAEgDIAJgHIAGgDQAkgNAmgGIAKgJQAHgFAIgEIAPgIIAEgBIAFgCIABgCIA5AEQAYgOATgPIAcADQAGAFAEAGQAHAIADAJIAFABQBCABBCgFQAhgCAgACIAMAKIAHAIQABAJAAAIIAeACIANAKIASAPIAKAAIAiAAQA+BQBKBIQAKAKAAAOIgEAJIgSATIgZAAQATADASAGQAHACAFAGQAEADADAFIADAKIAAAJIAAAJIgDAJIgEAJQgFAJgGAHIgGACQgjgCghgOQgagLgZgPIgMAEIgGABIhFgCIgLgKQgDgCgBgEIiSgJIjGgMIgFgEQh8AVhvBAQgTAMgVAJIgfgDgAl4BoIABgBIAAAAIgBABg");
	this.shape.setTransform(-279.9286,13.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABAA4IgNgKIgCgJIgDgTIgBgJQBKgvBmApQBUAiBYAEQgLgagKgoQgEgNAHgOIAJgGIADgDIAGgCIAAgBIAcADQBdBAg6BcQgHALgJAJQi9gHi7g0gAmlBRQgbgYgTggIgGgJQgKgvANgtQAFgQAKgNIAKgFIAFgCIABgCIAcADQAGAFAFAFIAHAJQAHANgGAPIgKAbIAEAJIAPAcQCcgJCkgCIAMAKIAHAHIABATQgBARgNALQidAdiiAAIgtgBg");
	this.shape_1.setTransform(-278.1735,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnvItIgNgJIgBgFIgwACIgMgKIgQgSIgDgKIgHAAIgMgJIgBgCQhFgYghhQIgCgJIgEgTQhUh8ggiRQgCgLgKgJQgWgygIg0QgCgKACgKQgFgagDgbQgNh4glhyQgEgKgBgLIgGgEQgKglgFglIgHgwIgJgJIgNgTIABgJQABgJACgJIADgKIAJgGIADgDIAGgDIApADQA5A8gHBZIgCAPQBMDEAgDVQADANgBAOIAFAJQBqChBtCaQAIgyAYgwIAEgGQgOiPAciQQAKgxAtgYIADgBIAMgwQAJgeAZgLIAoADIAMAKIACADQAvgkAwgeIAcADQAGAFAFAFIAHAJIgBAEIBDg5IAMgEIAAgCIAcADIAMAKIAHAJIgEAQIAfgMIABgBIA0ADIALAKIAHAIIgBALIAGgDQAWgHAOgKQBugOBGA6QDrBRBGD8IAlCBQAQALAKAOQAQAXAHAaIAIgFIAPgKQBwkEAikXQAIhAASg+IAIhNQACgFADgEIARgTIACgBIAEgKQAGgNAEgOQAWgYAOgfQAEgKAGgJIAMgFIABgBIAcADIALAKIAHAIQAEA3gfAzQgHALgDAOIgHAJIgSATIgEACQgOCagRCZQgJBOgHBOQgXEWjdCqIhFgDIgLgKIgRgSIgCgNIgIgHQgRgMgKgRIgCgKIAAgQQgegngGhFQgLiAg2htIgGAAQg3hIhOgrQgQgJgNgLQi+gNi2AZIgJgHIg4AgIgKAAQgfAbgvATIgLAFIgJAKQgHAIACAOQAGArgYAgQgEADgFAAIgQABQAAAnAFAoQAXCjhLCDQgWAmgoAAQgJAAgJgCg");
	this.shape_2.setTransform(-276.9271,21.1135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8JXQgKAFgQgEIgJgCQhGATgZhhQgWhZgKhbIgHg1QgqhMgLhWQg3hJA0hSQAWg7BagEQASgBASgDQCOADCPAPQAgAEAGAhQAMBKgrAaQANAngZA7QhVDNgODeQgCAUgVAEQgSADgPAAQgdAAgTgLgAmKkrQg+hCA7hLQBEhWBjgvQAmgSAigFQBBgEAVA6IADAKQBkBNhpBAQgXAOgdAGQhrAXhaA5QgRALgPAAQgVAAgSgTgAD0ldIgFgEIgCAAQhCAGgvgbQgcAKgrgRQg6gZAQg+IAGgTQgkhmBngSIAAgCQAhAJAWARQC0AnBjCOQARAYgSAYQgkAygtAAQgqAAgygtg");
	this.shape_3.setTransform(-274.5256,59.7302);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXLdIgMgKQgDgJgGgIQgGgLgJgJIgDgKIgDgSQgFgEgDACQgOAFgMAKIgvAAIgNgKQgGAAgFACQgJADgIAFIhgAAIgMgKIgKAGIgJAGIgsgCQgggVgOgkIgGgTQhpgthog/IgDgKQgFgNACgPIgNgSIgMgTIgCglIgKgBQgQAAgPgDIgNgJQgGgNAAgPIAAgcQgDgEgEgEIgMgLIgDgJQgFgNACgPIgMAAIgggCIgMgKQgLg7AEg/IABgiIgBgCQgPgJgPgHIgFgTQgCgNAAgMQgPgFgPgGQgHgDgGgFQgKgaACgdQABgOAHgOIgGgBIgfgFIgMgKIgQgSQgFhPAChPQABgPAIgNIgHgJIgJgKQgEACgEADIgUARIgiAAIgMgJQAEh1ARh2QAKhEAAhHQADgFAEgDIASgQIAcADQAEAAADgCQAHgIAEgJIAKgFIAFgDIABgBIAcACIALALQAEAEADAEQANBJgeBEIgLAcQgBAEABADQAHAPAMAIIAVgtQAHgPAQgIIAGgBQAOAAAOABIAMAKIAHAJQAFANgBAPQgBAOgHANQASBNgWBJQgEAOACAOQAcAlAsAcQAMBygKBuQgBASACATIACAAIARgSIAiAAIALAKIAHAIQAGApgCAqIgBAcIADgBQAJgMACgPIACgJQACgFADgDQAEgGAHgFIAiAAQAGAFAFAFIAHAJIADAJIABATQAWASAegDIAMALIAHAIIADACIAcAFIAMAJIAHAJQAFAXgBAYIgBAiIAMgBQATgBATACIAAgJIAAgTIAHgIIASgRIAcADIALALIAHAIQAGAXgCAYIgBAiIANgEQASgHANgOIAGgBQAOAAAOABQAMAOAPAHIAHgGQAHgBAFgDIABgBIAOABIABgFQACgEADgEQAFgGAGgFIAiAAIANAKIAVAAIAcADQAGAFAFAFIAHAJIACAJIABATIAAAGQARAHATADQADgLAIgIQAHgFAJgBQANgCAOACQAGAEAFAGQAGAIAFAJQAAACAFgHQAEgHAQgGIAcACQAFABAAgCQAHgQAQgHIAGgCQAOAAAOACIAMAKIAHAJIAOAAIAAgZQgBgUAFgRQACgGADgDIALgKIAiAAIANAJIAVABIAcACQAaAVAIAiQACALgBAMQAtg+BDgsIAcADIAMAJIAGAEQACgdAIgaQAEgOALgMQATgRAZAJQAEABAFABIAJi6QABgYAGgXQAHgIAKgEQAOgIAPgFIgBguQgBgPAFgNQAIgIAJgFQAOgIAQgEIgBgTQgBgQALgMQAAgFgCgDQgHgKgJgJQgNhOANhKQAEgYAOgVQAYgTAgAKQgFg2ACg9IAAgvQAOgUASgQIASgNIAcADIAMAJIAHAJIACAJIABATQAVANACAYIACATQABAFADADQAIALAJAJQgOCxgcCzQgEAYgTATIgGACIgZAHQADAhgOAeQgIAQgSAHQADBhgVBbIgKAtQgiBUgJBdQgDAXgRAOIg0ADQgGAYgaAgQgLANgRADQhQBfhFBpQhQgOhOAmIgFAIQgIALgJAJIgiAAQgHgEgFgHIgEgIIgvgFIgMgKQgOAKgHANQgGALgHAJIg1AEIgNgJIgQAOIgYAUIgvAAgAC4IaIAEgFIgDAAIgBAFg");
	this.shape_4.setTransform(-276.625,33.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.7,-39.8,218.29999999999998,160.5);


(lib.part1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.frame_0 = function() {
		this.stop();
	}

	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	this.hitarea = new lib.glassesHitarea();
	this.hitarea.name = "hitarea";
	this.hitarea.setTransform(-276.7,7.35,1,1,0,0,0,110.2,38.4);
	this.hitarea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitarea).wait(6));

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApaCnQgSgSgQgTQgCgFAAgFIAAgOQgaASgkAKQgtANglAXQh9Ach8gcIgNgJIgDgJQgFgOACgOQAIgSARgBQAzgCA0AFQCagRCAhTIgBgRQAAgYAFgXIAGgJQA3hRBVgoQCEgbB3AuQAsARAEAsQASARAJAVQAggRAngGQAwgIAogNQBOAGBPAKQAIABAHAFQAGgXARgWQA+hQBbgiQC+gXBKCVQAJATACAXQACAUgBATQCdAeCcAlQAwAMAyADIAMAKIAHAIIACAKQACAOgEAOIgFAIQgFAJgGAHQjYgVjRhGQgeBlhvA4QjiAIg/i4IgpgBIgLgKQgJgIgHgKIgEgJQh8gBh/AvIgJAJQgJBLhCA1QgBAEgDAEQgVAbgiALIgGAKIgNASIgPAQQgnAIgkAAQh1AAhYhWgAnIhqQh/AtASCEIAAAJQBJBoB+gRQBqhCAVhwQAEgRgNgPQgQgSgCgXQgzggg/AAQgkAAgoAKgAFsioQhWAogtBTQgCADAAAFQAyBmByArQAlgCAjgNQAOgQAQgOQAJgIAIgJQAOguAJgvQAFgbAAgcIgQgTIgTgTQg+gchCAAIgPAAg");
	this.shape.setTransform(-275.5589,6.3216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuKDrQgWhDAGhJQAJhhAahgQAEgTACgUQCwjoEggcQBTgPBhAKQAGABAGgDIBCADIAKAJQB3ACB2AEQAHAAAGADQEBgpDuBVQC9BEBaC1QASAjAXAhQAFAtADAvQANECj4BDQg6AQg9gOQjIgvhpiuQhNiAghiOQiNACiLAEQgkCgh4CBQgQBCg8A0Qg3Avg9AlQgjAEggAAQjhAAiNisgADljNQDNARDJApIAJACIAuAJQhehGh2gfQhEgShIgFIgKAOQg5gGg4gDIAOAygAmOjhQh9AVh4AjIgFAEIgFANQA3gPA+gJQAxgHAmgKICGACQA9gJA+gGQABgXAAgWQhoAJhnARgArnikIACACIAGgLIgIAJgACIjUQgDgXgGgYIAAgBQh3gEh1AHIAAArIAJAAQAGgBAGgDQBwAABwAGIAAAAg");
	this.shape_1.setTransform(-277.213,16.9041);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGVE6QgjgEgggPQh9g9hkhgQglADgigQQgdgPgbgUQjAAsiMCXQgPARgYADQjZAaitiEQgUgPgZgIQhhgfhsAOIgNgKIgCgJIgBgFIgWgBIgMgJIgDgKQgJgUAMgRIAHgIQAFgFAHgDIAMABIAAgEIAAgJQBfhEBJhaQBhh2CIg8QAggOAbgKQE5gpEBCrIAGAEIAhgDQDki2EsBLQA1ANAwAeQBPAxBDBHQBGBLBoAPIBXAMIALAKIAHAJIADAIIAAAKIgDAJIgMATIgCAAIAHAHIAHAIQAHAOgGAOQgKAUgTAOIhUAKQgrAlg4ANQiwCJjVAAQgkAAgmgEgAF4h4QggAYAAAmQgBCcCYgzIADgGQBaiGiYgrIAAACIgEAAQgfAAgZAOgAntiFQghAZAAAmQgBCbCYgzIADgGQBaiGiYgqIAAABIgEAAQgfAAgYAOg");
	this.shape_2.setTransform(-274.9319,7.4541);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ApUFUIgMgJIgFgTIAAgBIgHgGIgQgSIgDgMQgLgHgLgJQgoghgjgmIgCgKIgEgSQg6hFgOhYQgTAQgZAOQg1Adg0AgIgfgDIgDgCIgvACIgMgJIgDgJQgFgOACgOQCDhjBfiBQgEgXAAgZQAAgUAFgSQABgEADgEQAIgKAKgKIALgEIABgCIAOACIAIgRQAFgDAEgBIDzgPQAGAAAGgDIFgADIACABIAHgEIBaADIAJAIIAAAOIAAAJIAvACQAPAAAAgCIAAgLIAZAAIAMAAIAZAAQAMAAAAgBIAAgUIANgBIAAgBIANABQAGgJAGgFIAXADIABgBIABgCIH0ALQA4ACA4ADIAMAKIABABIAMABIAMALQAEADADAFQAFBBgEBCQAAAIgDAHQBxA2BIB0IADAHIA2AXQAMAFAJAJIACATQABAUgNARIgGAGQiYgZhPiNQgIgNgOgMIgfgZQgFAsgLAqIAFAHQAFAMAAAPQAAAOgFAOIgHAJIgPATQgKCEh1A2QgSAJgQAKQkKAOiajPIgQhLQgBgIABgGIgFgTIgBAAQgPgKgJgRQgWgngsgPQgIAFgJADQgSAGgTADQgCAPgMAJQgEADgFAAIgOABIgKAfIgfBXQgcBRhAA1IgKAJQgNAtgoAYQgRAmg1AJIgCADQgEAIgGAIQhAAOhBAAQhCAAhDgOgAo6iPQgsAIgsAEIgDACQgFASgBAUQgBAUgPAOIgDABIAFArIAAAJQAGALAIAKQAKAmANAmQADAIAAAHIASAcQAJAMAAAPQBbBoCRgrIAlgMQCKhTAniOQAHgaAJgbIAbhNQgNAAgOgBIgMgKIgDgIQhFgHhGAAQiFAAiHAagADoi2IgEAHQgLAPgOANQgFADgFAAIgCABQALDGC/BSQA5AYBDACQCxhmgCjNIgHAAQgWgPgRgVIhYgJQigAGimABgArjjYIAAAKIAmABQAMAAAAgBIAAgLIAMAAIAKgBIAPABQANAAAAgCIAAgiIAAgJIgygDIAAABIgZgBIAAAOIgZgCIAAAlgACTjuIgBgDIgDADIABAAIADAAIAAAAgALMjyQAMAAAAgCIAAgiIAAgJIgygDIAAACIglgCIAAAlIAAAJIAlACIAMgBIAaABgAiIkHIACAAIgCgBg");
	this.shape_3.setTransform(-276.8402,5.5125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AGRB7Qh3gIh4gDIgMgJIgBgEIgMAAQhQhQhzAPIgSATIgQATIAAAJQgCARgNALQk+ALlAgVIgMgJIgBgDQiXANiTgBIgMgJIgEgJQgEgOABgOIAGgKIAHgJIADgMQB7hACHgvIAKgIIAOgJIABgCIANACIgBgFQAAgFACgEIAFgKQADgEAEgDIALgGIAAgCQFFAEFFAJQFKAKFJALIDTAGIAMAKIAHAJIACAJIAAAIIABgCQCIAkB/BBQAEADAEAEIACATQABAVgNAQIgGAGIgJgBIAAABIgEAKIgGAJIgGAGQg9AAhAgJQg0gIg0gFQgBAIgDAIIgHAJIgJAHIgBACIgIAKIl2gXgANGAfIAcACIgcgLIAAAJgAstAHIAAAAIgBAAIAAAAIABAAg");
	this.shape_4.setTransform(-278.0902,8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.9,-31,220.59999999999997,88.6);


(lib.part0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.frame_0 = function() {
		this.stop();
	}

	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	this.hitarea = new lib.wigsHitarea();
	this.hitarea.name = "hitarea";
	this.hitarea.setTransform(-296.15,11.25,1,1,0,0,0,119.8,70.1);
	this.hitarea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitarea).wait(6));

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AN9Q5Qgng7Asg/QBFhig8h0QgUgngHgsQgHgmgDgnQgohTABhlQAAgsgHgsQggi8hNiuQg0h0h4gxQkVhwklAPQhBA3gOBZQgHAvAAAzQABAtATApQAsAzBAAMQBmATBnAPQAXAEAIAZQgSBRhZALQjEAZihhJQi6gnhaitQgcg2gQg7QiLA2g6CqQgKAcgTAWQgJBNgNBMQgTBxgxBqQgJAUgEAYQgWB6AYB5QAIApgdAZQAMBOgUBRQgDALgQgCQhLgIgDhLIgBhEIAAgTIgGgKQgkg3geg7QgPgdgDgfQhSiDgniUQg4jNAfjcQANhfAAhkQgBiNAxiFQA7ifCMhcQBHguBWgKQCMAECMAMQAbACAZAKQAOAFANAIIAMhKQAGgqAdggQC0jNEfAeQAOACAPgDQGagXEYEoQEAEOByFhQAgBhASBjQAVB2gOBwQApA6gjBaQgbBCgmA7QgHDBhlChQgGAKgMAIQAMCPh+BDQgEACgDAAQgIAAgGgKgAPjKcIACALIALgNgAtjA0IAKgBIgEgmQgEATgCAUgAqpizIgGALIARgPIgLAEg");
	this.shape.setTransform(-296.614,54.7031);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0GZ/QgTgBgEgUQgXgKgMgUIgEgJQhxhUhqhaIgDgKIgEgTQgug5gsg7Qh3g2BDhUQAUgaAdgUQCDhdBjh5QAYg6AlgzQAJgOAFgSQACgKAJgHQAviEAYiJQgHhNALhMQAIgvASgsQABgKACgLQBAkfgokmQgMhYAUhUIAVhaQgkgmAWhTQAXhSAohBQAOhpAZhmQAMguAegYQgBhbAkhLQBFgcA8geIAJAHIAEgEQgFgfARgaQAGgJAIgIQAggLAhAOQAdg0A6AXQA+gVBJAMQBOhoB9BUQAVAOAcgBQAjgvA3AMQAjgbAugGIANgDIAAgJIADgKIARgTIASgRIAHgCIATgEQAiAEAOAgIAEAJIAAADQAIACAIgCQAbg5A4AmQBAg9AnBPQADAGAAAIQBRgWA6AwQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAQALABAMAAIANgPIAQgRQBHgQAKBKIACAKIAdALQAHADAGAFQBBg8AnBOQADAGAAAIQAZAGARAXIAGAKQBUAGAmA+QAWgTAbgHQBMA+AKB2QAFAyAXAtQBaCxARDCQARC/BLCuQBvEEgZEcIgBANIADAEIgBAIQAAAdAIASQABAZAIAQIgBABIAAABIACAMQAOAXAHAeQAQA+AAA8QApAvAKBNQAQCEAuB5QBUC2CmBuQA2AkAcA2QAhA/g1AwIg7A1QhOBthsBeQgvAqg8AJQg4AIgrgkQgcgYgXgcQgggpgKgyQhpich2iIQgkgogsgeQgZgQAEggQAEgkALgbQgDgXABgXIABgUIAKgJQAIgCAHgDIABgCIAJAEIADgCIABgCQAIADAHAFIAFAFQAhgRAvgCQAUgRAVgOIAAgEQADgRAFgQQAVgKAPghQAvhlAhhsIABgFIADgDIgBgFQAAgLAFgNIAAgBQAFgMAJgHQALhhgbhdQg6gEgahBQgKAHgFAWQgDAQgPAKQgigBgUgOQgCBeAEBfQAFCFg5BzQgMAXAAAdQAAAigZAVQhaAihJgoQgVgMAKgYQAfhGAwhAQAXgfAEgoQADgoAIgoQAjivAMi1QAMi2g5imQh+ilAKjVQACgXgJgYQgehUhPgxQhcgFgVhCQgtACgtAVQkjCIk7hAIg6gMQjDgti6A8Qg5ASgnArQgdAggXAlQgFA3AGA6QASCbhXBxQgHDPgODOQgBATAEAUQArC3AvC3QAVAJAQAWQADAEABAFIgGALQA4BUgTBhQgCAJgKAIQhZAggrhAQhDgZACgoQgegZgGg2QgHhBgLhAQgThwghhsIgPgUIgHgJQgFgwgWgrQgtAQgpAZIgEAIQgTAogFAtQgFAqgHAoQAIAWgDAdIAIA9QAGALABAQIABAKQBJDLC9BxQAfATAhARQArAVAWAsQAPAdgKAfQBJCAgPCQIgCAcQgBAigaAVQiQgRhyBHQgoAZgiAiQguCKiKAAIgZgBgAuqpPIABAAIAAAAgAsts8IAHgJQABgQgCgPIgGAogAjQv6IAVABIgBgFIgUAEg");
	this.shape_1.setTransform(-297.7457,108.3267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtXRaIgChDIgKgKQglgEgcgWQgfgagUgjQhDgCgogeQgHALgJAKIgmAoQirBIi4gEQgSAAgPgUQhwiOBeiRQgOgggCgkQgCgfASgaIAWgeQAAgYAIgWQAOgigHgkQgCgJAAgKIAAgKQgJgWgXgRQgkgagGgpQg+gtgfg+Qgcg7AogzIAQgWQBZgNBChHQAUgUAQgVQggglADgyQABghAVgZIAXgdQibh0Bli0QA2hfBlgqQCkhDCUBUIAQAAIAMgKIAKgJIAKgKQh5hdA8icQAshzB+gbQCugmCWBMQAcAPAdAMQBphwCYA/QArASAqAWQAKg5AXg6QAbhCA9grQAlgaApgCQB0gIA/BWQADAEACAFQCbACCCBRQAwAeAGA6QBlgRBzgJQAlgDAigIIA8gPQClgoANCXQAHBUgfBSQgFAMAAAPQB/gHCAAEQAIAAANADQCoAhASCbQAKBUgHBZQA7AhAWBBQAKAggBAiIAAAKQAuA3AFBHQAIB5hrA+QBBAwAmBkQAsB2gyB0QgKAYgEAdQgKBFhDAcQAaBGARBOQAMA3gsAoQgsAngfAvQgdAMgbAGQADBBg5A7QgPAQgbAAQhkAAgahnQgRgNgOgPIgBAEQgGAcgLAcQgLAfgYAYQiTA7gTiXQgMheAchcQAOgtgGgwQiUg9gPibQgDgjAFghQhQgsgxhiQg0hnA+hsQAIgNAFgPQABgEgBgCQgVgXgLgdIgEgJQhygfh9ApQggALgagTIAAAUQAOAMAPAPQA0A1goA/QgkA7hIgCQgxDHing3QgigMgOgfQgag6AJg+QACgWAOgRQhighhiguQhXgqAHhkQgtAEgogHQgYAKgaAGQAiCch/BeQgfAXgvAGQgQAegcARQgkAWg1gRIgiBQQgYA2gzAYQAFBeANBjQAIA/gqAsQAXBhBkBCQAlAZAEAtQALCEhoBgQgmANgeAAQhZAAgGh7gAFshRIADADIAAgDIgBAAIgCAAg");
	this.shape_2.setTransform(-307.5326,37.202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("APOGiQgGgiACghQAFhbg4grQgGjZAMjYQALjJhtidIgCgKQgCgegKgYQAlgWAigYQAVATAbAHIADAIQAmBeAzBUQCYD5hREVQg2C7AZC+QAlEbDDDZQgrgMgoAOQhYAfgYBSQhKk1g3k/gAznp7QgFgcgVgVQgCgPAIgMQBSh7hohfQGmhFGzAiQKiA0KCiFQAGAjAZAcQANAOAKAQQgQAPgIASQgRAmgOAoIgGACQggAVghAQQg/AdgRAtQgNgCgQABQhUAOhbALQkjAlkmgBQi5AAi4AKQlHATlHAfQhWgWhOAYQAAgPgDgOg");
	this.shape_3.setTransform(-280.425,157.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("APoSeQgPgbgIghQgqipgkiqQgRAxgaAvQg1CNg8CHQgIATgUAGQhgAbAOhfIAMhPQA6lNAGlOQAChVAehTQAxiFgBiPQAAgYABgZQAOkJh8jmQiOAZiTAGQj+AKj+AGQifAEieAHQk5AOk4gMQgfAzhRAEQgTABgVAHQipA5gqiZQgIgbAUgUQgghJAbhJQAKgfARgbQhDg6AThXQAFgaAYgNIAHgBQAVg6BegJQA6gGA6gLQFehHFoAoQKoBLKIieQB6gOAHB1IAAAJQCEClg+DEQAWAkAMAuQAOA3AdAxQBoCpgHDMQgID+grD6QgGAkAHAnQAiBPANBeQAHAsAdAjQB2CKAtClQAOA0gtAjQhLA6hSg3QgFADgCAFQgIAQgOAMQAGCGhrgTIgHAMQgeAqgbAAQgeAAgagygAMnqiQAJAYADAeIACAKQBtCdgLDJQgNDZAGDYQA4ArgFBbQgBAhAGAiQA2E+BLE2QAYhSBYgfQAogOArAMQjEjZglkbQgZi+A3i7QBQkViXj5Qg0hUglheIgDgIQgbgHgWgTQghAYglAWgA0YvGQBoBghRB7QgIAMABAPQAVAVAGAcQACAOAAAPQBOgYBXAWQFGgfFIgTQC4gKC4AAQEmABEjglQBbgLBUgOQAQgBAOABQARgtA+gcQAigQAggVIAFgCQAOgoASgmQAIgSAQgPQgLgQgNgOQgYgcgHgjQqCCFqig0QiQgLiPAAQkgAAkaAtg");
	this.shape_4.setTransform(-279.7749,160.9353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AuIcQQgngJgUgZQg7AFgzgnQgUgOgVgOQhhg7hBhcQgXgggigYQiVhmiMhsQgYgSADggQADgkAfgTIAIgCQACgPAFgTQAriJAeiKQAJgqADgrIAyqwQAIhvAZhsQAui+gLjGQgLjLA5i8QAMgpAKgrQA8kJDFjDQAagZAjgRQBLgkBMgKQCWADCVAMIAJACQAehiBMhJQB4hzCjgPQGFgKFNDJQCdBfBwCSQAWAeAZAeQA2BAAdBMQAhAeAEAuQACAYAJAZQArBwAlBvQAIAYAGAZIAHAJIAIALQADAEABAFIAEAJIACAKIAEATQA3BuAPB7QAaDbgJDiQgQFmBRFRQAMATAIAVQAUA1AXA1QAcA9AmA3QBuBLBtBAQAPAIgJAQQggA6gtAxQh6CChyCJQhTBjh0A5QgrBUhdAkQh2AvAMhyQACgXANgTQgWhjgchjQgOgzgTgyQhhkKAKknQAHjCgLjBQgWlwAUloQh1AUh6gGQligSlhAJQgkAYgfgWQjOAIjOAQQhdAIhYAjQAEAegGAlQgLBHgCBJQgJF/AXF8QALDEAfDBQALBHgCBIQgJEVgZESQgCAbgYAAQgGAAgIgCgAD+owIABgDQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgCAAIgMACIgCADIAJAAIAJAAg");
	this.shape_5.setTransform(-290.8895,124.1363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477,-86.5,353.4,391.6);


// stage content:
(lib.AddOns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.part0 = new lib.part0();
	this.part0.setTransform(478.85,97.95,0.9473,0.9473);

	this.part1 = new lib.part1();
	this.part1.setTransform(457.9,206.55,0.9473,0.9473);

	this.part2 = new lib.part2();
	this.part2.setTransform(459.1,266.65,0.9473,0.9473);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part2},{t:this.part1},{t:this.part0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,254.7,35.89999999999998,110.60000000000002);

})(createjs = createjs||{});
var createjs;
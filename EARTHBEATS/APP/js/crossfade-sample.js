var CrossfadeSample = function () {
  // this.soundArray=[null,null,null];
  this.playerArray = [];
  // for (let index = 0; index < PARAMS.sounds.loopLib.length; index++) {
  // this.soundArray.push('../music/loop/drums/'+PARAMS.sounds.loopLib[index]+PARAMS.sounds.format,);
  // }
  loadSounds(this, {
    a: '../music/loop/mp3/' + PARAMS.sounds.loopLib[0] + PARAMS.sounds.format,
    b: '../music/loop/mp3/' + PARAMS.sounds.loopLib[1] + PARAMS.sounds.format,
    c: '../music/loop/mp3/' + PARAMS.sounds.loopLib[2] + PARAMS.sounds.format,
    d: '../music/loop/mp3/' + PARAMS.sounds.loopLib[3] + PARAMS.sounds.format,
    e: '../music/loop/mp3/' + PARAMS.sounds.loopLib[4] + PARAMS.sounds.format,
    f: '../music/loop/mp3/' + PARAMS.sounds.loopLib[5] + PARAMS.sounds.format,
    // g: '../music/loop/drums/' + PARAMS.sounds.loopLib[6] + PARAMS.sounds.format,

    // drums: '../music/loop/drums/'+PARAMS.sounds.loopLib[0]+PARAMS.sounds.format,
    // organ: '../music/loop/drums/'+PARAMS.sounds.loopLib[1]+PARAMS.sounds.format,
    // flute: '../music/loop/drums/'+PARAMS.sounds.loopLib[2]+PARAMS.sounds.format,

  });

  this.isPlaying = false;
}


CrossfadeSample.prototype.play = function () {
  this.playerArray.push(createSource(this.a));
  this.playerArray.push(createSource(this.b));
  this.playerArray.push(createSource(this.c));
  this.playerArray.push(createSource(this.d));
  this.playerArray.push(createSource(this.e));
  this.playerArray.push(createSource(this.f));
  this.playerArray.push(createSource(this.g));
  // Create two sources.
  // this.ctl1 = createSource(this.drums);
  // this.ctl2 = createSource(this.organ);
  // this.ctl3 = createSource(this.flute);
  for (let index = 0; index < this.playerArray.length; index++) {
    if (index == 0) {
      this.playerArray[0].gainNode.gain.value = 0;
      var onName = this.playerArray[0].source.start ? 'start' : 'noteOn';
      console.log(this.playerArray[0].gainNode.gain.value);
    }
    this.playerArray[index].source[onName](0);

  }
  // Mute the second source.
  // this.ctl1.gainNode.gain.value = 0;
  // Start playback in a loop
  // var onName = this.ctl1.source.start ? 'start' : 'noteOn';
  // this.ctl1.source[onName](0);
  // this.ctl2.source[onName](0);
  // this.ctl3.source[onName](0);
  // Set the initial crossfade to be just source 1.
  this.crossfade(0);

  function createSource(buffer) {
    var source = context.createBufferSource();
    var gainNode = context.createGain();
    source.buffer = buffer;
    // Turn on looping
    source.loop = true;
    // Connect source to gain.
    source.connect(gainNode);
    // Connect gain to destination.
    gainNode.connect(context.destination);

    return {
      source: source,
      gainNode: gainNode
    };
  }
};

CrossfadeSample.prototype.stop = function () {
  for (let index = 0; index < this.playerArray.length; index++) {
    if (index == 0) {
      var offName = this.playerArray[0].source.stop ? 'stop' : 'noteOff';
    }
    this.playerArray[index].source[offName](index);
  }
  // var offName = this.ctl1.source.stop ? 'stop' : 'noteOff';
  // this.ctl1.source[offName](0);
  // this.ctl2.source[offName](0);
  // this.ctl3.source[offName](0);
};
// Fades between 0 (all source 1) and 1 (all source 2)
CrossfadeSample.prototype.crossfade = function (element,instantValue) {

  // console.log(element);
  var x = parseInt(element) / parseInt(100);
  if (isNaN(x)) {
    x = Math.cos(0 * 0.25 * Math.PI);
  } else {
    x = element;
  }
  asignClip3(this.playerArray,x)
  // console.log(x);
  if(x==instantValue){
    // console.log("trigger");
  }


  // console.log("________");

  // console.log(element);
  // this.ctl1.gainNode.gain.value = gain1;
  // this.ctl2.gainNode.gain.value = gain2;
  // this.ctl3.gainNode.gain.value = gain2;
};

CrossfadeSample.prototype.toggle = function () {
  this.isPlaying ? this.stop() : this.play();
  this.isPlaying = !this.isPlaying;
};
function loopRange(value, index, numberOfSound) {
  const rangeSize = 100 / numberOfSound;
  const startR = rangeSize * index;
  const endR = startR + rangeSize;
  const defineRange = mapRange(value, startR, endR, 1, 0);

  return defineRange;
}
function modulateFader(x, offset) {
  const centerFade = Math.cos(Math.PI * 2 / 0.25 / 100 * x + Math.PI + offset);
  const normalise = (mapRange(centerFade, -1, 1, 0, 1).toFixed(2));
  return normalise;

}
function asignClip(array, x) {
  for (let index = 0; index < array.length; index++) {
    const pair = isPair(index); let gain2 = 0;
    if (pair != 0) {
      if (x > 25 && x < 50 && index == 0) {
        gain2 = modulateFader(x, pair);
        console.log("0");
      };
      if (x > 50 && x < 75 && index == 2) {
        gain2 = modulateFader(x, pair);
        console.log("2");
      }
    } else {
      if (x < 50 && index == 1) {
        gain2 = modulateFader(x, pair);
        console.log("1");
      } else if (x > 50 && index == 3) {
        gain2 = modulateFader(x, pair);
        console.log("3");
      }
      // console.log(x);
      // array[index].gainNode.gain.value
    }
    // console.log(index, array[index].gainNode.gain.value);
    array[index].gainNode.gain.value = gain2;
  }
}
function asignClip2(array, x) {
  console.log(array.length);
  for (let index = 0; index < array.length; index++) {
    const pair = isPair(index); let gain2 = 0;
    if (pair != 0) {
      if (x > 25 && x < 75 && index == 0) {
        gain2 = modulateFader(x, pair);
        // console.log("0");
      };

      //   if (x > 25 && x < 75 && index == 2) {
      //     gain2 = modulateFader(x, pair);
      //     console.log("2");
      // }

    } else {
      if (x < 50 && index == 1) {
        gain2 = modulateFader(x, pair);
        // console.log("1");
      }

      else if (x > 50 && index == 3) {
        gain2 = modulateFader(x, pair);
        // console.log("3");
      }

    }
    if (x % 25 == 0) {
      // console.log();
    }

    array[index].gainNode.gain.value = gain2;
  }
}
function asignClip3(array, x) {
  const sectionNumber = 8;
  const section = 100 / sectionNumber;
  for (let index = 0; index < array.length; index++) {
    const pair = isPair(index); let gain2 = 0;
    if (pair != 0) {
      if (x > section && x < section * 3 && index == 0) {
        gain2 = modulateFader(x, pair);
        // console.log("0");
      };
      // console.log(section);
      if (x > section * 3 && x < section * 5 && index == 2) {
        gain2 = modulateFader(x, pair);
        // console.log("2");
      }
      if (x > section * 5 && x < section * 7 && index == 4) {
        gain2 = modulateFader(x, pair);

      }
      // if (x > section * 7 && x < section * 9 && index == 6) {
      //   gain2 = modulateFader(x, pair);
      // }
      //   if (x > section*5 && x < section*7  && index == 2) {
      //     gain2 = modulateFader(x, pair);
      //     console.log("2");
      // }

    } else {
      if (x < section * 2 && index == 1) {
        gain2 = modulateFader(x, pair);
        // console.log("1");
      } else if (x > section * 2 && x < section * 4 && index == 3) {
        gain2 = modulateFader(x, pair);
        // console.log("3");
      }
      else if (x > section * 4 && x < section * 6 && index == 5) {
        gain2 = modulateFader(x, pair);
        // console.log("3");
      }
      // else if (x > section * 6 && x < section * 8 && index == 7) {
      //   gain2 = modulateFader(x, pair);
      // }
      //  console.log(index);
    }
    if (x % section == 0) {
      // console.log();
    }
    array[index].gainNode.gain.value = gain2;
  }
}
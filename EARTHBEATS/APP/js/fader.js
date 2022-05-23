function soundByMap(distCenter) {
    const minVolume = 0;
    const maxVolume = 100;
    let leadFader = (mapRange(distCenter, 0,  PARAMS.maxDistance, minVolume, maxVolume)).toFixed(2);
    // let leadFader = (mapRange(distCenter, 0,  window.innerHeight, 0.25, 1.8)).toFixed(2);
    // console.log(leadFader);
    SEND_MESSAGE(leadFader, "beatspace/slider");
    // sample.crossfade(leadFader);
    // console.log(leadFader);
}
function softSound(value,speed) {
    if( PARAMS.softFade.counterLerp<1){
        PARAMS.softFade.render=true;
        PARAMS.softFade.counterLerp+=speed  
    }else{
        PARAMS.softFade.counterLerp=1
        PARAMS.softFade.lastFade=value;
        PARAMS.softFade.render=false;
        PARAMS.softFade.counterLerp = 0;
    }
    const smooth = Math.round(lerp(PARAMS.softFade.lastFade,value, PARAMS.softFade.counterLerp));
   console.log(smooth);
    return smooth;
  }
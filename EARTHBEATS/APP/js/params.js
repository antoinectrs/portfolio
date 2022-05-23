let PARAMS = {
  beginShare: false,
  maxDistance: 80,
  actualDistance: null,
  external: null,
  softFade: {
    secondeCalcul: null,
    counterLerp: 0,
    startFade: 0,
    lastFade: 0,
    speed: 0.1,
    render:false,
    renderResult:null,
  },

  //LOCA
  watchID: null,
  user: {
    id: "guest",
    location: { lat: 0, lon: 0 }
  },
  // position fixe
  // locaTarget: {
  //   lat: 46.5371124,
  //   lon: 6.588135,
  // },
  userTarget: {
    lat: null,
    lon: null,
  },
  sounds: {
    format: '.mp3',
    loopLib: [
      'lente',
      'coco',
      'more',
      'ohno',
      // 'coco',
      'foret',
      'mystical',
    ]
  },
  intro: {
    moonDescription: null,
    userChoice: null,
    number1: null,
    number2: null,
    stateMachine: 0,
    content: [
      "éloignez vous de votre coté ambiance partager",
      "baladez vous solo!Autour de ce sticker",
    ],

  }
}
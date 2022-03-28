const app = Vue.createApp({
  data: () => ({
    scramble: "",
    preRotate: ["","y","y'","y2"],
    parameter: {},
    subNum: 0,
    mask: true,
    allSelect: true,
    showAnswer: false,
    caseSelect: ["pt1","pt2","pt3","pt4","pt5","pt6","pt7","pt8","pt9"],
    pll_3BAR:[
      "R2 U R U R' U' R' U' R' U R' y2",
      "R U' R U R U R U' R' U' R2 y2",
      "R2 U R U R' U' R' U' R' U R' y",
      "R U' R U R U R U' R' U' R2 y",
      "R' U L' U2 R U' R' U2 L R U'",
      "R U R' F' R U R' U' R' F R2 U' R' U' y2",
      "R U R' F' R U R' U' R' F R2 U' R' U' y'",
      "R' U L' U2 R U' R' U2 L R U' y'",
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R y'",
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R y2",
    ],
    pll_3BAR_arrow:[
      "U1U3-s8,U3U5-s8,U5U1-s8",
      "U3U1-s8,U5U3-s8,U1U5-s8",
      "U1U3-s8,U3U7-s8,U7U1-s8",
      "U3U1-s8,U7U3-s8,U7U1-s8",
      "U0U2,U2U0,U1U3-s8,U3U1-s8",
      "U0U6,U6U0,U1U3-s8,U3U1-s8",
      "U0U2,U2U0,U1U5-s8,U5U1-s8",
      "U0U6,U6U0,U3U7-s8,U7U3-s8",
      "U0U2,U2U0,U3U5,U5U3",
      "U0U6,U6U0,U1U7,U7U1"
    ],
    pll_DoubleLights:[
      "M' U M2' U M2' U M' U2 M2'",
      "M' U M2' U M2' U M' U2 M2' U'",
      "M2' U M2' U2 M2' U M2",
      "R U' R U R U R U' R' U' R2",
      "R2 U R U R' U' R' U' R' U R'",
      "R U' R U R U R U' R' U' R2 y'",
      "R2 U R U R' U' R' U' R' U R' y'",
    ],
    pll_DoubleLights_arrow:[
      "U1U3,U3U1,U5U7,U7U5",
      "U1U5,U5U1,U3U7,U7U3",
      "U1U7,U7U1,U3U5,U5U3",
      "U3U5-s8,U5U7-s8,U7U3-s8",
      "U5U3-s8,U7U5-s8,U3U7-s8",
      "U1U5-s8,U5U7-s8,U7U1,s8",
      "U5U1-s8,U7U5-s8,U1U7-s8",
    ],
    pll_Lights_2BAR:[
      "R U R' U' R' F R2 U' R' U' R U R' F' y'",
      "R U R' U' R' F R2 U' R' U' R U R' F' y2",
      "R U' R' U' R U R D R' U' R D' R' U2 R' U' y'",
      "R' U2 R U2 R' F R U R' U' R' F' R2 U' y'",
      "x' R U' R D2 R' U R D2 R2 x y",
      "x' R2 D2 R' U' R D2 R' U R' x y'",
      "D R' U' R U D' R2 U R' U R U' R U' R2' U'",
      "D' R U R' U' D R2 U' R U' R' U R' U R2 U y",
    ],
    pll_Lights_2BAR_arrow:[
      "U0U2,U2U0,U1U7-s8,U7U1-s8",
      "U0U6,U6U0,U3U5-8,U5U3-8",
      "U0U2,U2U0,U3U7,U7U3",
      "U0U6,U6U0,U1U5,U5U1",
      "U0U8-s8,U8U6-s8,U6U0-s8",
      "U0U8-s8,U8U2-s8,U2U0-s8",
      "U0U8-s8,U8U6-s8,U6U0-s8,U1U3-s6,U3U7-s6,U7U1-s6",
      "U0U8-s8,U8U2-s8,U2U0-s8,U1U5-s6,U5U3-s6,U3U1-s6",
    ],
    PLL_Lone_Lights:[
      "R' U2 R U2 R' F R U R' U' R' F' R2 U'",
      "R U' R' U' R U R D R' U' R D' R' U2 R' U' y2",
      "D' R U R' U' D R2 U' R U' R' U R' U R2 U y2",
      "D R' U' R U D' R2 U R' U R U' R U' R2' U' y'",
      "U' R2 U' R U' R U R' U R2 D' U R U' R' D y'",
      "U R2 U R' U R' U' R U' R2 D U' R' U R D' y2",
      "x' R2 D2 R' U' R D2 R' U R' x",
      "x' R U' R D2 R' U R D2 R2 x",
    ],
    PLL_Lone_Lights_arrow:[
      "U0U2,U2U0,U5U7,U7U5",
      "U0U6,U6U0,U5U7,U7U5",
      "U2U6-s8,U6U8-s8,U8U2-s8,U1U5-s6,U5U7-s6,U7U1-s6",
      "U2U8-s8,U8U6-s8,U6U2-s8,U3U7-s6,U6U5-s6,U5U3-s6",
      "U0U8-s8,U8U6-s8,U6U0-s8,U3U7-s6,U7U5-s6,U5U3-s6",
      "U0U8-s8,U8U2-s8,U2U0-s8,U1U5-s6,U5U7-s6,U7U1-s6",
      "U2U6-s8,U6U8-s8,U8U2-s8",
      "U2U8-s8,U8U6-s8,U6U2-s8",
    ],
    PLL_Double_2BAR:[
      "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "x' R U' R D2 R' U R D2 R2 x y2",
      "x' R2 D2 R' U' R D2 R' U R' x y2",
      "R' U R U' R' f' U' R U2 R' U' R U' R' f R y'",
      "R' U L' U2 R U' R' U2 L R U' y2",
      "R U R' F' R U R' U' R' F R2 U' R' U'",
      "R' U R U' R' F' U' F R U R' F R' F' R U' R",
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' y",
    ],
    PLL_Double_2BAR_arrow:[
      "U0U8,U8U0,U1U3,U3U1",
      "U0U2-s8,U2U6-s8,U6U0-s8",
      "U2U0-s8,U6U2-s8,U0U6-s8",
      "U1U3,U3U1,U2U6,U6U2",
      "U6U8,U8U6,U5U7-s8,U7U5-s8",
      "U2U8,U8U2,U5U7-s8,U7U5-s8",
      "U0U8,U8U0,U3U5,U5U3",
      "U0U8,U8U0,U1U7,U7U1",
    ],
    PLL_Outside_2BAR:[
      "R' U R U' R' f' U' R U2 R' U' R U' R' f R",
      "R' U R U' R' f' U' R U2 R' U' R U' R' f R y2",
      "R U' R' U' R U R D R' U' R D' R' U2 R' U'",
      "R' U2 R U2 R' F R U R' U' R' F' R2 U' y2",
      "U' R2 U' R U' R U R' U R2 D' U R U' R' D y",
      "U R2 U R' U R' U' R U' R2 D U' R' U R D'",
      "R U R' U' R' F R2 U' R' U' R U R' F'",
      "R U R' U' R' F R2 U' R' U' R U R' F' y",
      "x' R U' R D2 R' U R D2 R2 x y'",
      "x' R2 D2 R' U' R D2 R' U R' x y",
    ],
    PLL_Outside_2BAR_arrow:[
      "U0U8,U8U0,U1U5,U5U1",
      "U0U8,U8U0,U3U7,U7U3",
      "U1U3,U3U1,U2U8,U8U2",
      "U1U3,U3U1,U6U8,U8U6",
      "U0U2-s8,U2U8-s8,U8U0-s8,U1U3-s6,U3U5-s6,U5U1-s6",
      "U0U6-s8,U6U8-s8,U8U0-s8,U1U7-s6,U7U3-s6,U3U1-s6",
      "U2U8,U8U2,U3U5-s8,U5U3-s8",
      "U6U8,U8U6,U1U7-s8,U7U1-s8",
      "U0U2-s8,U2U8-s8,U8U0-s8",
      "U0U6-s8,U6U8-s8,U8U0-s8",
    ],
    PLL_Inside_2BAR:[
      "D R' U' R U D' R2 U R' U R U' R U' R2' U' y",
      "D' R U R' U' D R2 U' R U' R' U R' U R2 U",
      "U R2 U R' U R' U' R U' R2 D U' R' U R D' y",
      "U' R2 U' R U' R U R' U R2 D' U R U' R' D",
      "F R U' R' U' R U R' F' R U R' U' R' F R F' y",
      "F R U' R' U' R U R' F' R U R' U' R' F R F' y'",
    ],
    PLL_Inside_2BAR_arrow:[
      "U0U2-s8,U7U6-s8,U6U0-s8,U1U3-s6,U3U5-s6,U5U1-s6",
      "U0U6,s8,U6U2-s8,U2U0-s8,U1U7-s6,U7U3-s6,U3U1-s6",
      "U0U6-s8,U6U2-s8,U2U0-s8,U1U5-s6,U5U3-s6,U3U1-s6",
      "U0U2-s8,U2U6-s8,U6U0-s8,U1U3-s6,U3U7-s6,U7U1-s6",
      "U2U6,U6U2,U1U5,U5U1",
      "U2U6,U6U2,U3U7,U7U3",
    ],
    PLL_Bookends_NoBAR:[
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R y",
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "R U' R' U' R U R D R' U' R D' R' U2 R' U' y",
      "R' U2 R U2 R' F R U R' U' R' F' R2 U' y",
      "D' R U R' U' D R2 U' R U' R' U R' U R2 U y'",
      "D R' U' R U D' R2 U R' U R U' R U' R2' U' y2",
    ],
    PLL_Bookends_NoBAR_arrow:[
      "U3U5,U5U3,U6U8,U8U6",
      "U1U7,U7U1,U2U8,U8U2",
      "U1U5,U5U1,U6U8,U8U6",
      "U2U8,U8U2,U3U7,U7U3",
      "U0U6-s8,U6U8-s8,U8U0-s8,U3U5-s6,U5U7-s6,U7U3-s6",
      "U0U2-s8,U2U8-s8,U8U0-s8,U1U7-s6,U7U5-s6,U5U1-s6",
    ],
    PLL_No_Bookends:[
      "R' U R U' R' f' U' R U2 R' U' R U' R' f R y",
      "F R U' R' U' R U R' F' R U R' U' R' F R F' y2",
      "x' R U' R' D R U R' D' R U R' D R U' R' D' x y'",
      "x' R U' R' D R U R' D' R U R' D R U' R' D' x y2",
    ],
    PLL_No_Bookends_arrow:[
      "U2U6,U6U2,U5U7,U7U5",
      "U0U8,U8U0,U5U7,U7U5",
      "U0U2,U2U0,U6U8,U8U6",
      "U0U6,U6U0,U2U8,U2U8",
    ],
  }),
  methods: {
    createScramble(){
      this.showAnswer ? this.showAnswer = false : this.showAnswer = true
      let algorithm = []
      if(this.caseSelect.includes("pt1")) algorithm = algorithm.concat(this.pll_3BAR)
      if(this.caseSelect.includes("pt2")) algorithm = algorithm.concat(this.pll_DoubleLights)
      if(this.caseSelect.includes("pt3")) algorithm = algorithm.concat(this.pll_Lights_2BAR)
      if(this.caseSelect.includes("pt4")) algorithm = algorithm.concat(this.PLL_Lone_Lights)
      if(this.caseSelect.includes("pt5")) algorithm = algorithm.concat(this.PLL_Double_2BAR)
      if(this.caseSelect.includes("pt6")) algorithm = algorithm.concat(this.PLL_Outside_2BAR)
      if(this.caseSelect.includes("pt7")) algorithm = algorithm.concat(this.PLL_Inside_2BAR)
      if(this.caseSelect.includes("pt8")) algorithm = algorithm.concat(this.PLL_Bookends_NoBAR)
      if(this.caseSelect.includes("pt6")) algorithm = algorithm.concat(this.PLL_No_Bookends)

      let arrow = []
      if(this.caseSelect.includes("pt1")) arrow = arrow.concat(this.pll_3BAR_arrow)
      if(this.caseSelect.includes("pt2")) arrow = arrow.concat(this.pll_DoubleLights_arrow)
      if(this.caseSelect.includes("pt3")) arrow = arrow.concat(this.pll_Lights_2BAR_arrow)
      if(this.caseSelect.includes("pt4")) arrow = arrow.concat(this.PLL_Lone_Lights_arrow)
      if(this.caseSelect.includes("pt5")) arrow = arrow.concat(this.PLL_Double_2BAR_arrow)
      if(this.caseSelect.includes("pt6")) arrow = arrow.concat(this.PLL_Outside_2BAR_arrow)
      if(this.caseSelect.includes("pt7")) arrow = arrow.concat(this.PLL_Inside_2BAR_arrow)
      if(this.caseSelect.includes("pt8")) arrow = arrow.concat(this.PLL_Bookends_NoBAR_arrow)
      if(this.caseSelect.includes("pt6")) arrow = arrow.concat(this.PLL_No_Bookends_arrow)

      if(!algorithm.length){
        this.scramble = "you mast select a case."
        return
      }
  
      if(!this.showAnswer){
        this.subNum = Math.floor(Math.random() * algorithm.length)
      }

      const inverseScramble = this.inverse(algorithm[this.subNum])
      console.log(inverseScramble)
      this.scramble = cubeSolver.solve(inverseScramble)
      this.scramble = this.preRotate[Math.floor(Math.random() * this.preRotate.length)] + this.scramble

      this.parameter = {}
      if(this.mask){
        this.parameter.mask = "ll"
      }
      this.parameter.algorithm = this.scramble
      if( this.showAnswer){
        this.parameter.arrows = arrow[this.subNum]
      }
      this.parameter.width = 200
      this.parameter.height = 200

      const element = document.getElementById('visualcube')
      const SRVisualizer = window['sr-visualizer'];
      console.log(element)
      if(element.lastChild !== null){
        while (element.lastElementChild) {
          element.removeChild(element.lastElementChild);
        }
      }
      SRVisualizer.cubePNG(element, this.parameter)
    },
    inverse(scramble){
      let scrambleSplit
      let inverseScramble = []
      scrambleSplit = scramble.split(' ').reverse()
      scrambleSplit.forEach(element => 
        inverseScramble.push(this.inverseRotate(element))
      )
      const lastRotate = scrambleSplit[0]
      if(lastRotate.match(/y/)){
        return inverseScramble.join('').trim() + lastRotate
      }else{
        return inverseScramble.join('').trim()
      }
      
    },
    inverseRotate(rotate){
      if(rotate.match(/y/)){
        return ""
      }
      if(rotate.slice(-1) == 2){
        return rotate
      }
      if(rotate.slice(-1) == "'"){
        return rotate.replace("'","")
      }else{
        return rotate + "'"
      }
    },
    onKeyDown(event){
      if(event.code === 'Space'){
        this.createScramble()
      }
    },
    onTouch(event){
      this.createScramble()
    },
  },
  watch: {
    allSelect: function(newVal){
      if(newVal){
        this.caseSelect = ["pt1","pt2","pt3","pt4","pt5","pt6","pt7","pt8","pt9"]
      }else{
        this.caseSelect = []
      }
    },
  },
  mounted() {
    document.addEventListener('keyup', this.onKeyDown)
    document.addEventListener('touchend', this.onTouch)
    this.createScramble()
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyDown)
    document.addEventListener('touchend', this.onTouch)
  },
})
app.mount('#app')
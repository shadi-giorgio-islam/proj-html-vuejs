// header
var header = new Vue({
  el: '#header',
  data: {
    menu: [{
    main: 'Home',
    box: ['Driving School', 'High School', 'Kinder Garten', 'Header Video'],
    displayBox: 'none'
  },
  {
    main: 'Courses',
    box: ['Our Courses', 'Single Course', 'Instructor Profile', 'Become A Teacher'],
    displayBox: 'none'
  },
  {
    main: 'About Us',
    box: false
  },
  {
    main: 'News',
    box: ['EduPrime Blog', 'Single Post', 'Category Posts'],
    displayBox: 'none'
  },
  {
    main: 'Pages',
    box: ['How It Works', 'Single Event', 'University Shop', 'Single Product'],
    displayBox: 'none'
  },
  {
    main: 'Contact',
    box: false
  },
  {
    main: 'Purchase',
    box: false
  }],
    bg: [
      {
        url: 'img/theme_slider1_bg-1.jpg',
        title: 'Show your courses'
      },
      {
        url: 'img/theme_slider2_bg-1.jpg',
        title: 'Key to your success'
      },
      {
        url: 'img/theme_slider3_bg-1.jpg',
        title: 'Lead. Inspire. Win!'
      }
    ],
    indice: 0
  },
  methods:{
    showbox(index){
      for (let i = 0; i < this.menu.length; i++) {
        if (i == index) {
          this.menu[i].displayBox = 'active';
        }
        else {
          this.menu[i].displayBox = 'none';
        }
      }
    },
    closebox(index){
      this.menu[index].displayBox = 'none';
    },
    nextSlider(){
      if (this.indice == 2) {
        this.indice = 0;
      }
      else {
        this.indice++;
      }
    },
    prevSlider(){
      if (this.indice == 0) {
        this.indice = 2;
      }
      else {
        this.indice--;
      }
    }
  },
  mounted(){
    // cambio bg
    setInterval(()=>
    {
      if (this.indice == 2) {
        this.indice = 0;
      }
      else {
        this.indice++;
      }
    }
    , 5000);
    // fine cambio bg
  }
});
// fine header
// inizio main
// inizio sezione Faculties
var faculties = new Vue({
  el: '#faculties',
  data: {
    faculties: [
      {
        name: 'Law faculty',
        smallImg: 'img/Gavel-v2.png',
        bigImg: 'img/Gavel-Illustration-e1556884768193.png',
        text: 'Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        display: 'active'
      },
      {
        name: 'Economy',
        smallImg: 'img/Coins-tabs-v2.png',
        bigImg: 'img/Economy.png',
        text: 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.',
        display: 'none'
      },
      {
        name: 'Medicine',
        smallImg: 'img/Medicine-tabs-v2.png',
        bigImg: 'img/Medicine.png',
        text: 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.',
        display: 'none'
      },
      {
        name: 'Computer Science',
        smallImg: 'img/Computer-tabs-v2.png',
        bigImg: 'img/Computer-Science.png',
        text: 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.',
        display: 'none'
      },
      {
        name: 'Graphic Design',
        smallImg: 'img/Palette-tabs-v2.png',
        bigImg: 'img/Graphic-Design.png',
        text: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term ``graphic design`` is used synonymously.',
        display: 'none'
      }
    ],
    indice: 0
  },
  methods: {
    showContent(index){
      this.indice = index;
      for (let i = 0; i < this.faculties.length; i++) {
        if (i == index) {
          this.faculties[i].display = 'active';
        }
        else {
          this.faculties[i].display = 'none';
        }
      }
    }
  }
});
// fine sezione faculties
// fine main

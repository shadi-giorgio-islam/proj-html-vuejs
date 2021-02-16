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

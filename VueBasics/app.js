const app = Vue.createApp({
  data() {
    return {
      myName: "Patrik Jagielski",
      myAge: "25",
      faveNumber: "Favorite Number: ",
      image:
        "https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.myAge + 5;
    },
    favoriteNumber() {
      return this.faveNumber + Math.random();
    },
  },
});

app.mount("#user-goal");


const eventListeners = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: ""
      // confirmedName: "",
      // fullName: ""
    }
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if(value === "") {
    //     this.fullName = ""
    //   }else {
    //     this.fullName = value + " " + this.lastName
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = ""
    //   } else {
    //     this.fullName = this.name + " " + value
    //   }
    // }
  },
  computed: {
    fullName(){
      if(this.name === "" || this.lastName === ""){
        return ''
      }
      return this.name + " " + this.lastName
    }
  },
  methods: {
    outputFullName() {
    },
    // confirmInput() {
    //   this.confirmedName = this.name
    // },
    increment(val) {
      this.counter += val;
    },
    decrease(val) {
      this.counter -= val;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = ""
    }
  }
})

eventListeners.mount("#event-listeners");
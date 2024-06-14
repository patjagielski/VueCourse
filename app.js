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

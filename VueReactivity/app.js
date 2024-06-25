const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('Before mounted');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
  },
  unmounted() {
    console.log('unmounted')
  },
});

app.mount('#app');


// setTimeout(() => {
//   app.unmount();

// }, 3000)

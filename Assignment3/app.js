const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    watch: {
        result() {
            if (this.result >= 37) {
                
                setTimeout(() => {
                    alert("Resetting value...");
                    this.result = 0
                }, 5000)
            }
        }
    },
    methods: {
        Add(value) {
            this.result += value;
        },
        checkResult() {
            if (this.result < 37) {
                return "Not there yet :("
            } else if (this.result > 37) {
                return "Too much!!"
            }
            return "You Made it! " + this.result + " !! "
        }
    }
})

app.mount("#assignment3");
const app = Vue.createApp({
    data(){
        return {
            taskValue: '',
            tasks: [],
            listIsShown: true,
            buttonTitle: "Hide"
        }
    },
    methods:{
        addTask() {
            return this.tasks.push(this.taskValue);
        },
        toggleList() {
            this.listIsShown = !this.listIsShown;
            this.buttonTitle = this.listIsShown ? "Hide" : "Show"
        }
    }
});

app.mount('#assignment')
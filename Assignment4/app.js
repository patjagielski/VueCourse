const app = Vue.createApp({
    data() {
        return {
            classes: '',
            isVisible: true,
            bgColor: ''
        }
    },
    computed: {
        userClasses() {
            if(this.classes === 'user1'){
                return { user1: true, user2: false, visible: this.isVisible, hidden: !this.isVisible }
            } else if (this.classes === "user2") {
                return { user2: true, user1: false, visible: this.isVisible, hidden: !this.isVisible }
            } else {
                return { visible: this.isVisible, hidden: !this.isVisible }
            }
        },
    },
    methods: {
        onToggle() {
            this.isVisible = !this.isVisible
        }
    }
})

app.mount('#assignment4');
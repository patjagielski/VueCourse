const assignment = Vue.createApp({
    data() {
        return {
            info: "",
            confirmInput: ""
        }
    },
    methods: {
        showAlert() {
            alert("Alert!!");
        },
        setInfo(event) {
            this.info = event.target.value
        },
        setConfirmInfo(event) {
            this.confirmInput = event.target.value
        }

    }
})

assignment.mount("#assignment");
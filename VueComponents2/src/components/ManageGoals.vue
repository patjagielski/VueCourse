<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal"/>
        <button @click="setGoal"> Set Goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2> Input is invalid</h2>
                <p>Please enter a goal</p>
                <button @click="confirmError"> Okie </button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data(){
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredval = this.$refs.goal.value;
            if(enteredval === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>
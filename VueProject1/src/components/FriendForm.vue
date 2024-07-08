<template>
    <form @submit.prevent="submitForm"> 
        <div>
            <label>Enter Name: </label>
            <input type="text" placeholder="Full Name" v-model="friendName"/>
        </div>
        <div>
            <label>Enter Phone: </label>
            <input type="text" placeholder="Phone" v-model="friendPhone"/>
        </div>
        <div>
            <label>Enter Email: </label>
            <input type="email" placeholder="Email" v-model="friendEmail"/>
        </div>
        <button>Add Friend</button>
    </form>
</template>

<script>

export default {
    emits:['add-contact'],
    data() {
        return{
            friendName: '',
            friendPhone: '',
            friendEmail: ''
        }
    },
    methods: {
        submitForm() {
            this.$emit('add-contact', 
                this.friendName, 
                this.friendEmail, 
                this.friendPhone
            );
        }
    }
}
</script>

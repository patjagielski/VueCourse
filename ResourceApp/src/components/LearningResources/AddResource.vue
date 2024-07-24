<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p> Input Value is invalid </p>
            <p> Recheck each value please</p>
        </template>
        <template #actions>
            <base-button @click="confirmError"> Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="inputTitle"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" type="text" ref="inputDescription"/>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="inputLink"/>
            </div>
            <div>
                <base-button type="submit"> Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
    inject: ['addNewResource'],
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        submitData() {
            const title = this.$refs.inputTitle.value;
            const description = this.$refs.inputDescription.value;
            const link = this.$refs.inputLink.value;

            if(title.trim() === '' || description.trim() === '' || link.trim() === ''){
                this.inputIsInvalid = true;
                return
            }

            this.addNewResource(title, description, link)
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
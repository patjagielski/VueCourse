<template>
    <li>
        <h2> {{ name }} {{isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleIsFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong> Phone: </strong>
                {{ phoneNumber }}
            </li>
            <li>
                <strong> Email:</strong>
                {{emailAddress}}
            </li>
        </ul>
        <button @click="$emit('delete', id)">Delete contact</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: (value) => {
            //     return value === '1' || value === '0'
            // }
        }
    },
    emits: ['toggle-favorite', 'delete'],
    // emits: {
    //     'toggle-favorite': (id) => {
    //         if(id){
    //             return true
    //         }else {
    //             console.warn('Invalid event arguments');
    //             return false
    //         }
    //     }
    // }
    data() {
        return {
            detailsAreVisible: false,
            friend:  
            {
                id: 'manuel',
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com"
            },
    }
    },
    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleIsFavorite () {
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>
<template>
    <section>
        <header><h1> My Friends </h1></header>
        <friend-form @add-contact="addContact"/>
        <ul>
            <friend-contact 
              v-for="friend in friends"
              :key="friend.id"
              :id="friend.id"
              :name="friend.name"
              :phone-number="friend.phone"
              :email-address="friend.email"
              :isFavorite="friend.isFavorite"
              @toggle-favorite="toggleFavoriteStatus"
              @delete="deleteContact"
            ></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import FriendForm from './components/FriendForm.vue'
export default {
  components: { FriendContact, FriendForm },
    data(){
        return {
            friends: [
                  {
                    id: 'manuel',
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com",
                    isFavorite: true
                },
                {
                    id: 'julie',
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com",
                    isFavorite: false
                }
            ]
        }
    },
    methods: {
      toggleFavoriteStatus(friendId) {
        const identifiedFriend = this.friends.find(friend => friend.id === friendId)
        identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      },
      addContact(name, email, phone) {
        const newFriendContact = {
          id: new Date().toISOString(),
          name,
          email, 
          phone,
          isFavorite: false
        };
        this.friends.push(newFriendContact);
      },
      deleteContact(friendId){
        this.friends = this.friends.filter((friend) => friend.id !== friendId )
      }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
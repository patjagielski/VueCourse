<template>
    <base-card>
        <base-button 
            @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">
            Stored Resources
        </base-button>
        <base-button 
            @click="setSelectedTab('add-resource')" :mode="addResButtonMode">
            Add Resources
        </base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
     data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official guide', 
                    title: 'Official Guide', 
                    description: " The official Vue.js doc",
                    link: "https://vuejs.org"
                },
                {
                    id: 'google',
                    title: 'Googling', 
                    description: "For the modern Googler",
                    link: "https://google.com"
                },
            ]
    }
   },
    provide() {
        return {
            resources: this.storedResources,
            addNewResource: this.addNewResource,
            removeResource: this.removeResource
        }
    }, 
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
         addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    } , 
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addNewResource(title, description, link) {
            const newRes = {
                id: new Date().toISOString(),
                title,
                description, 
                link
            };
            this.storedResources.unshift(newRes);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>
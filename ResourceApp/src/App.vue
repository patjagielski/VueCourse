<template>
    <resource-header title="Remember Me"></resource-header>
    <the-resources></the-resources>
</template>

<script>
import ResourceHeader from './components/Layouts/ResourceHeader.vue';
import TheResources from './components/LearningResources/TheResources.vue';

export default{
    components: {
        ResourceHeader,
        TheResources
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>

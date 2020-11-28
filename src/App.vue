<template>
    <div id="app">
        <name-card></name-card>
    </div>
</template>

<script>
import Namecard from "./components/Namecard.vue";

export default {
    name: "App",
    components: {
        "name-card": Namecard,
    },
};
</script>

<style lang="sass">
@import "@/style/variable.sass"
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap')

#app
    font-family: "Poppins", sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: start

</style>

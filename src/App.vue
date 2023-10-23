<script setup>
    import CounterPage from './components/CounterPage.vue'
    import Indecision from './components/IndecisionPage.vue'
</script>

<template>
    <Indecision />
    <!-- <CounterPage title="Enter" :start="15" />
    <CounterPage /> -->
</template>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="editor">
        <Rete />
        <Dock />
    </div>
</template>

<script>
import Rete from "./components/Rete.vue";
import Dock from "./components/Dock.vue";
export default {
    name: "App",
    components: {
        Rete,
        Dock,
    },
};
</script>

<style>
.editor {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 25px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: row;
}
</style>

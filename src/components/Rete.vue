<template>
    <div class="rete" ref="reteElm"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import init from "../editor";
export default {
    setup() {
        const reteElm = ref(null);

        onMounted(() => {
            init(reteElm.value);
        });

        return {
            reteElm,
        };
    },
};
</script>

<style lang="scss">
.rete {
    flex: 3;
    order: 2;
    border-left: 1px solid green;
    border-top: 1px solid green;
}
</style>

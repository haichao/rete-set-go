<template>
    <div class="dock">
        <h3>Options</h3>
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>

<style lang="scss">
.dock {
    flex: 1;
    min-width: 200px;
    order: 1;
    border-top: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    .dock-item {
        .node {
            width: 150px;
            min-width: 20px;
            margin-bottom: 15px;
        }
    }
}
</style>
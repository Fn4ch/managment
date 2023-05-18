<template>
    <div class="modal" v-if="isOpen">
        <div class="modal__window">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    isOpen: Boolean
})

</script>
<style lang="scss" scoped>
.modal{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
    backdrop-filter: blur(50px);

    &__window{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: fit-content;
        height: fit-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        border-radius: 24px;
        background-color: $colorWhite;
    }
}
</style>
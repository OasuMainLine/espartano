<template>
   <button @click="dispatchClick">
       <slot />
   </button>
</template>

<script setup>

    const emits = defineEmits(["click-button"])

    function dispatchClick(){
        emits("click-button");
    }
</script>

<style lang="scss" scoped>

</style>
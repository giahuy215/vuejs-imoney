<template>
    <navigation-brand></navigation-brand>
    <slot></slot>
</template>

<script>
import NavigationBrand from '@/components/NavigationBrand.vue'
export default {
    setup() {
        
    },
    components: {
        NavigationBrand,
    },
}
</script>
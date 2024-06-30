<script setup lang="ts">
import Card from '@/components/Card/Card.vue';
import demoConfig from './demoConfig';
</script>

<template>
    <div class="event-demo-wrap">
        <Card
            v-for="item in demoConfig"
            :key="item.id"
            :demoConfig="item"
        />
    </div>
</template>

<style lang="scss" scoped>
.event-demo-wrap {
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1;
    flex-wrap: wrap;
}
</style>

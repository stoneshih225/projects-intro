<script setup lang="ts">
import EventDemo from '@/components/EventDemo/EventDemo.vue';
</script>

<template>
    <div class="app">
        <div class="app-wrap">
            <EventDemo />
        </div>
    </div>
</template>

<style lang="scss">
@import "./styles/styles";

.app {
    position: relative;
    min-width: 480px;
    min-height: 100vh;

    .app-wrap {
        position: relative;
        padding: 2.5rem 2rem;
        width: 100%;
        height: 100%;

        @media (min-width: 576px) {
            margin: 0 auto;
            width: 576px;
        }

        @media (min-width: 992px) {
            width: 992px;
        }

        @media (min-width: 1280px) {
            width: 1280px;
        }
    }
}
</style>

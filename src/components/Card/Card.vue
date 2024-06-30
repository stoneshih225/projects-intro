<script setup lang="ts">
import { PropType } from 'vue';
import { DemoConfig } from '../EventDemo/demoConfig';

const props = defineProps({
    demoConfig: {
        type: Object as PropType<DemoConfig>,
        required: true
    }
});
</script>

<template>
    <div class="card">
        <a
            class="link"
            :href="props.demoConfig.link"
            target="_blank"
        >
            <div class="picture-container">
                <img
                    class="picture"
                    :src="props.demoConfig.img"
                    :alt="props.demoConfig.alt"
                />
            </div>
            <div
                class="title"
                v-text="props.demoConfig.title"
            />
            <div
                class="tag"
                v-text="props.demoConfig.tag"
            />
        </a>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        position: relative;
        margin-bottom: 1.75rem;
        padding: 1.25rem;
        width: 100%;
        background-color: #151030;
        border-radius: 1rem;

        @media (min-width: 576px) {
            margin: 0 auto 1.75rem;
        }

        @media (min-width: 992px) {
            margin: 0 0.875rem 1.75rem;
            width: calc(50% - 1.75rem);
        }

        @media (min-width: 1280px) {
            width: calc(33.33% - 1.75rem);
        }

        .link {
            text-decoration: none;
            color: inherit;

            &:hover {
                .picture-container {
                    .picture {
                        transform: scale(1.1);
                    }
                }
            }

            .picture-container {
                position: relative;
                overflow: hidden;
                margin-bottom: 1.25rem;
                width: 100%;
                height: 230px;
                z-index: 1;

                .picture {
                    width: 100%;
                    height: 100%;
                    border-radius: 1rem;
                    transition: transform 0.2s;
                    transform-origin: center;
                    object-fit: cover;
                    object-position: center top;
                }
            }

            .title {
                position: relative;
                margin-bottom: 1.25rem;
                font-size: 1.5rem;
                font-weight: bold;
                color: #fff;
                z-index: 2;
            }

            .tag {
                position: relative;
                font-size: 1rem;
                color: #3ab27a;
                z-index: 3;
            }
        }
    }
</style>

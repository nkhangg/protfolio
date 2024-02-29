<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import Container from '../components/container/Container.vue';
import data from '../data/about';
</script>

<template lang="">
    <div class="text-primary min-h-[1000px] bg-primary flex justify-center">
        <div class="w-[1240px] mt-[8rem] flex justify-between gap-[30px]">
            <div class="flex-1 flex flex-col gap-10">
                <Container title="Tiểu sử">
                    <p v-for="d in data.about" :key="d">{{ d }}</p>
                </Container>
                <Container title="Thành tựu">
                    <p>{{ data.achievement.title }}</p>

                    <ul class="list-disc pl-5 flex flex-col gap-2 text-[15px]">
                        <li v-for="item in data.achievement.details" :key="item.title">
                            <span>{{ item.title }}</span>
                            <a target="_blank" class="text-secondary cursor-pointer hover:underline ml-1" :href="item.link" v-if="item.link">xem chi tiết</a>
                        </li>
                    </ul>
                </Container>
                <Container title="Kỹ năng">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex flex-col gap-2" v-for="item in data.skills" :key="item.title">
                                <p class="text-[16px]">{{ item.title }}</p>

                                <ul class="list-disc pl-5 flex flex-col gap-2 text-[15px]">
                                    <li v-for="i in item.details" :key="i">
                                        <span>{{ i }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-1 flex items-center justify-center -mt-9 gap-10">
                            <div class="flex flex-col gap-5">
                                <fa v-for="item in data.skillIcons.col1" :key="item" class="w-10 h-10" :icon="item" />
                            </div>
                            <div class="flex flex-col gap-5 mt-14">
                                <fa v-for="item in data.skillIcons.col2" :key="item" class="w-10 h-10" :icon="item" />
                                <img src="../assets/icons/dart.png" alt="dart" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div class="w-1/3 flex flex-col items-center justify-center">
                <img
                    v-motion
                    :initial="{
                        y: 60,
                    }"
                    :enter="{
                        y: -60,
                        transition: {
                            ease: 'linear',
                            duration: 2000,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        },
                    }"
                    src="../assets/icons/astro2.png"
                    alt="astro2"
                />

                <router-link to="/san-pham"><Button title="Sản phẩm" :icon="['fas', 'chevron-right']" /></router-link>
            </div>
        </div>
    </div>
</template>

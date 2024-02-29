<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '@/components/buttons/Button.vue';
import Loading from '@/components/loading/Loading.vue';
import { IProject } from '@/interface';
import { auth, db } from '../config/firebase';
import { getDoc, doc, deleteDoc } from 'firebase/firestore';

const router = useRoute();
const routers = useRouter();
const data = ref<IProject | null>(null);
const loading = ref(false);
const id = ref<string>(router.params.name as string);

const handleDeleteDoc = async () => {
    if (!id.value) return;

    const check = confirm('Bạn có chắt muốn xóa bài viết này không ?');

    if (!check) return;

    deleteDoc(doc(db, 'projects', id.value as string));

    routers.push({ name: 'product' });
};

const initData = async () => {
    if (!id.value) return;
    try {
        loading.value = true;
        const projects = doc(db, 'projects', id.value as string);
        const projectsShapshot = await getDoc(projects);

        if (projectsShapshot.data()) {
            data.value = projectsShapshot.data() as IProject;
        }
    } catch (error) {
        console.log('projectsShapshot: Error setting getNotification info in DB');
    } finally {
        loading.value = false;
    }
};

initData();
</script>

<template lang="">
    <div class="text-primary min-h-screen bg-primary flex justify-center">
        <div class="w-[1240px] mt-[8rem]">
            <div v-if="auth.currentUser" class="fixed top-0 left-0 p-5 flex flex-col gap-5">
                <router-link :to="`/san-pham/edit/${id}`"
                    ><button class="border border-primary rounded-full w-12 h-12 text-sm"><fa :icon="['fas', 'pen']" /></button
                ></router-link>
                <button @click="handleDeleteDoc" class="border border-primary rounded-full w-12 h-12 text-sm"><fa :icon="['fas', 'xmark']" /></button>
            </div>
            <div v-if="data" class="gap-10 flex justify-between">
                <div class="flex-1 flex flex-col gap-8">
                    <h1 class="text-2xl">{{ data.title }}</h1>
                    <p class="text-sm">
                        {{ data.content }}
                    </p>

                    <div class="flex flex-col gap-1">
                        <h2 class="text-2xl">Chức năng</h2>
                        <div class="w-full flex items-center justify-between">
                            <div v-if="data.funtion.client.length" class="flex flex-col gap-2">
                                <span class="text-[16px] font-medium">Người dùng:</span>
                                <ul class="list-disc pl-5 text-sm flex flex-col gap-2">
                                    <li v-for="item in data.funtion.client" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                            <div v-if="data.funtion.server.length" class="flex flex-col gap-2">
                                <span class="text-[16px] font-medium">Quản lí:</span>
                                <ul class="list-disc pl-5 text-sm flex flex-col gap-2">
                                    <li v-for="item in data.funtion.server" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h2 class="text-2xl">Công nghệ sử dụng</h2>
                        <div class="w-full flex flex-col gap-2">
                            <div v-for="(item, index) in data.tectical" :key="index" class="text-sm flex flex-col gap-1">
                                <span class="text-[16px] font-medium">{{ item.title }}:</span>

                                <ul class="pl-5 list-disc">
                                    <li v-for="i in item.details" :key="i">{{ i }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-1/3 flex flex-col items-center gap-5">
                    <div class="w-full aspect-video rounded-xl overflow-hidden">
                        <img class="w-full h-full object-cover hover:scale-110 transition-all ease-out bg-white" :src="data.image" :alt="data.image" />
                    </div>

                    <div class="flex flex-col gap-5">
                        <a target="_blank" :href="data.git" to="/san-pham"><Button title="Git Link" :icon="['fas', 'chevron-right']" /></a>
                        <a v-if="data.link" :href="data.link"><Button title="Live demo" :icon="['fas', 'chevron-right']" /></a>
                    </div>

                    <div>
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
                    </div>
                </div>
            </div>

            <Loading v-if="!data || loading" />
        </div>
    </div>
</template>

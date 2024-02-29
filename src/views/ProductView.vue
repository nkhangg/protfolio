<script lang="ts" setup>
import Product from '../components/product/Product.vue';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { IProject } from '@/interface';
import { ref } from 'vue';
import Loading from '@/components/loading/Loading.vue';

const fe = ref<IProject[] | null>(null);
const fs = ref<IProject[] | null>(null);
const loading = ref(false);

const initData = async () => {
    try {
        loading.value = true;
        const projects = await getDocs(collection(db, 'projects'));

        if (projects.docs.length) {
            const fsArr = projects.docs.filter((item) => item.data().type === 'fs').map((i) => ({ ...i.data(), id: i.id } as IProject));
            const feArr = projects.docs.filter((item) => item.data().type === 'fe').map((i) => ({ ...i.data(), id: i.id } as IProject));

            fe.value = feArr as IProject[];
            fs.value = fsArr as IProject[];

            console.log(feArr);
        }
    } catch (error) {
        console.log('projectsShapshot: Error setting getNotification info in DB');
    } finally {
        loading.value = false;
    }
};

initData();
</script>

<template>
    <div class="text-primary bg-primary min-h-screen flex justify-center">
        <div class="w-[1240px] mt-[8rem]">
            <div v-if="fe || fs" class="flex flex-col gap-10">
                <div class="flex flex-col gap-5">
                    <h4 class="text-2xl font-medium">Fullstack</h4>

                    <div class="grid grid-cols-4 gap-5">
                        <Product v-for="i in fs" :key="i.id" :data="i" />
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <h4 class="text-2xl font-medium">Front-end</h4>

                    <div class="grid grid-cols-4 gap-5">
                        <Product v-for="i in fe" :key="i.id" :data="i" />
                    </div>
                </div>
            </div>

            <Loading v-if="!fe || !fs || loading" />
        </div>
    </div>
</template>
<style></style>

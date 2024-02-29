<template>
    <section class="text-primary min-h-screen bg-primary flex items-center justify-center">
        <div class="w-[1240px] mt-[8rem]">
            <div v-if="data">
                <div class="mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                        v-model="data.title"
                        type="text"
                        id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Website..."
                        required
                    />
                </div>

                <span class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Funtions</span>
                <div class="mb-6">
                    <div class="flex flex-col gap-4">
                        <div>
                            <label for="client" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client:</label>
                            <input
                                v-model="client"
                                @keydown="(e) => handleKeyDown(e, 'f-client')"
                                type="text"
                                id="client"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Client..."
                                required
                            />
                            <ul class="list-disc pl-5 mt-2">
                                <li class="items-center gap-1 list-item" v-for="item in data.funtion.client" :key="item">
                                    <p class="inline-block">{{ item }}</p>
                                    <div class="text-sm inline-block">
                                        <span @click="() => handleDeleteFuntions(item, 'client')" class="p-4 cursor-pointer"><fa :icon="['fas', 'xmark']" /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label for="server" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Server:</label>
                            <input
                                v-model="server"
                                @keydown="(e) => handleKeyDown(e, 'f-server')"
                                type="text"
                                id="server"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Server..."
                                required
                            />
                            <ul class="list-disc pl-5 mt-2">
                                <li class="items-center gap-1 list-item" v-for="item in data.funtion.server" :key="item">
                                    <p class="inline-block">{{ item }}</p>
                                    <div class="text-sm inline-block">
                                        <span @click="() => handleDeleteFuntions(item, 'server')" class="p-4 cursor-pointer"><fa :icon="['fas', 'xmark']" /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label for="ai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ai:</label>
                            <input
                                v-model="ai"
                                @keydown="(e) => handleKeyDown(e, 'f-ai')"
                                type="text"
                                id="ai"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ai..."
                                required
                            />
                            <ul v-if="data.funtion.ai" class="list-disc pl-5 mt-2">
                                <li class="items-center gap-1 list-item" v-for="item in data.funtion.ai" :key="item">
                                    <p class="inline-block">{{ item }}</p>
                                    <div class="text-sm inline-block">
                                        <span @click="() => handleDeleteFuntions(item, 'ai')" class="p-4 cursor-pointer"><fa :icon="['fas', 'xmark']" /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Tecticals</span>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="git-link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            v-model="tTitle"
                            type="url"
                            id="git-link"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <div draggable="true" v-for="(item, index) in data.tectical" :key="index" class="text-sm flex flex-col gap-1 mt-5">
                            <span class="text-[16px] font-medium flex items-center gap-5">
                                <p>{{ item.title }}</p>

                                <div class="flex items-center text-sm">
                                    <span @click="() => handleEditTectnical(item.title)" class="p-4 cursor-pointer"><fa :icon="['fas', 'pen']" /></span>
                                    <span @click="() => handleDeleteTectnical(item.title)" class="p-4 cursor-pointer"><fa :icon="['fas', 'xmark']" /></span>
                                </div>
                            </span>

                            <ul class="pl-5 list-disc">
                                <li v-for="i in item.details" :key="i">{{ i }}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <label for="details" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                        <input
                            v-model="tDetail"
                            @keydown="(e) => handleKeyDown(e, 'tectnicals')"
                            type="url"
                            id="live-demo"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <ul class="pl-5 list-disc">
                            <li v-for="i in tDetails" :key="i">
                                <p class="inline-block">{{ i }}</p>
                                <div class="text-sm inline-block">
                                    <span @click="() => handleDeleteFuntions(i, 'details')" class="p-4 cursor-pointer"><fa :icon="['fas', 'xmark']" /></span>
                                </div>
                            </li>
                        </ul>

                        <div class="flex items-center justify-end mt-5">
                            <button
                                @click="handleSubmitTectnical"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add tectnical
                            </button>
                        </div>
                    </div>
                </div>

                <span for="countries" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Metas</span>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div class="">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <select
                            v-model="data.type"
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Choose a Type</option>
                            <option value="fs">Fullstack</option>
                            <option value="fe">Front-end</option>
                            <option value="be">Back-end</option>
                            <option value="ai">Ai</option>
                        </select>
                    </div>
                    <div>
                        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input
                            v-model="data.image"
                            type="url"
                            id="image"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label for="git-link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Git URL</label>
                        <input
                            v-model="data.git"
                            type="url"
                            id="git-link"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label for="live-demo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live demo URL</label>
                        <input
                            v-model="data.link"
                            type="url"
                            id="live-demo"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div class="mb-6">
                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                    <textarea
                        v-model="data.content"
                        type="text"
                        id="content"
                        rows="6"
                        class="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    ></textarea>
                </div>

                <div class="flex items-center justify-end">
                    <button
                        @click="handleSubmit"
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </div>

            <Loading v-if="!data || loading" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { db } from '@/config/firebase';
import { IProject } from '@/interface';
import { addDoc, collection } from 'firebase/firestore';
import Loading from '@/components/loading/Loading.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const routers = useRouter();

const data = ref<IProject | null>(null);
const client = ref<string>('');
const server = ref<string>('');
const ai = ref<string>('');
const tTitle = ref<string>('');
const tDetail = ref<string>('');
const tDetails = ref<string[]>([]);
const loading = ref(false);

const handleKeyDown = (e: KeyboardEvent, type: 'f-client' | 'f-server' | 'f-ai' | 'tectnicals') => {
    if (e.key !== 'Enter' || !data.value) return;

    switch (type) {
        case 'f-client': {
            if (!client.value.length) return;
            data.value.funtion.client.push(client.value);
            client.value = '';
            break;
        }
        case 'f-server': {
            if (!server.value.length) return;
            data.value.funtion.server.push(server.value);
            server.value = '';
            break;
        }
        case 'f-ai': {
            if (!ai.value.length) return;
            if (!data.value.funtion.ai) {
                data.value.funtion.ai = [ai.value];
                ai.value = '';

                return;
            }
            data.value.funtion.ai.push(ai.value);
            ai.value = '';
            break;
        }
        case 'tectnicals': {
            if (!tDetail.value.length) return;

            tDetails.value.push(tDetail.value);

            tDetail.value = '';
            break;
        }
    }
};

const handleEditTectnical = (title: string) => {
    if (!data.value) return;

    const tItem = data.value.tectical.find((item) => item.title === title);

    if (!tItem) return;
    const newArray = data.value.tectical.filter((item) => item.title !== title);

    data.value.tectical = [...newArray];

    tTitle.value = tItem.title;
    tDetails.value = tItem.details;
};

const handleDeleteTectnical = (title: string) => {
    if (!data.value) return;

    const newArray = data.value.tectical.filter((item) => item.title !== title);

    data.value.tectical = [...newArray];
};

const handleSubmitTectnical = () => {
    if (!tTitle.value.length || !tDetails.value.length || !data.value) return;

    data.value.tectical.push({
        title: tTitle.value,
        details: tDetails.value,
    });

    tTitle.value = '';
    tDetails.value = [];
};

const handleDeleteFuntions = (value: string, key: keyof IProject['funtion'] | 'details') => {
    if (!data.value) return;

    if (key === 'details') {
        const newArray = tDetails.value.filter((item) => item !== value);

        tDetails.value = [...newArray];

        return;
    }

    const newArray = data.value.funtion[key]?.filter((item) => item !== value);

    if (!newArray) return;

    data.value.funtion[key] = [...newArray];
};

const handleSubmit = async () => {
    try {
        loading.value = true;
        const projectsShapshot = await addDoc(collection(db, 'projects'), {
            ...data.value,
        });
        console.log(projectsShapshot);
        routers.push({ name: 'product' });
    } catch (error) {
        console.log('handleSubmit: Error setting handleSubmit info in DB');
    } finally {
        loading.value = false;
    }
};
const initData = async () => {
    data.value = {
        title: '',
        content: '',
        funtion: {
            client: [],
            server: [],
        },
        git: '',
        id: '',
        image: '',
        tectical: [],
        link: '',
    } as IProject;
};

initData();
</script>

<style lang="scss" scoped></style>

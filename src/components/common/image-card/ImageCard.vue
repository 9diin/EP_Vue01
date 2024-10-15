<template>
    <div v-for="image in images" :key="image.id" class="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
        <div class="flex flex-col gap-3">
            <img :src="image.urls.small" alt="" class="h-40 w-full rounded-xl object-cover" />
            <small className="w-full gap-1 text-sm font-medium line-clamp-2"> {{ image.alt_description }} </small>
        </div>
        <div class="space-y-2">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-1 text-sm">
                    <p className="leading-7">게시일:</p>
                    {{ formatDate(image.created_at) }}
                </div>
                <div class="flex items-center gap-1 text-sm">
                    <Heart class="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                    {{ formatNumberWithCommas(image.likes) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { useStore } from "@/store/index";
import { Heart } from "lucide-vue-next";

export default {
    props: ["image"],
    components: { Heart },
    data() {
        return {
            store: useStore(),
        };
    },
    computed: {
        images() {
            return this.store.images;
        },
    },
    methods: {
        formatDate(date: string) {
            return dayjs(date).format("YYYY-MM-DD");
        },
        formatNumberWithCommas(count: number) {
            return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
};
</script>

<style lang="scss" scoped></style>

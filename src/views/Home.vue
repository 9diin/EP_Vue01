<template>
    <div class="layout">
        <!-- 로딩 중일 경우, 보이는 Skeleton UI -->
        <!-- <div v-for="image in images" :key="image.id" class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div> -->
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
                        {{ image.likes }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useStore } from "@/store/index";
import dayjs from "dayjs";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Pin } from "lucide-vue-next";

export default {
    components: {
        Skeleton,
        Heart,
        Pin,
    },
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
            return dayjs(date).format("YYYY-MM-DD"); // 포맷 함수
        },
    },
    mounted() {
        this.store.fetchApi(); // 초기 데이터 로드
    },
};
</script>

<style lang="scss" scoped>
.layout {
    width: calc(100% - 48px);
    max-width: 1400px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);

    flex: 1;
    flex-wrap: wrap; /* 추가: 자식 요소가 여러 줄로 배치될 수 있도록 설정 */
    align-content: flex-start; /* 추가: 자식 요소들이 위에서부터 정렬되도록 설정 */

    padding: 24px;
    gap: 40px 24px; /* 추가: 각 요소 간의 간격 설정 */

    overflow-y: scroll;

    // /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    // /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    &__footer {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 8px 24px;

        border-top: 1px solid $color-neutral-100;
    }
}
</style>

<template>
    <div class="layout">
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <Skeleton class="h-[150px] w-[250px] rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Skeleton } from "@/components/ui/skeleton";

export default {
    components: {
        Skeleton,
    },
    data() {
        return {};
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
    gap: 32px 24px; /* 추가: 각 요소 간의 간격 설정 */

    overflow-y: scroll;

    // /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    // /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>

<template>
    <nav class="nav">
        <div class="nav__container">
            <RouterLink v-for="menu in menuItems" :to="menu.path" :key="menu.id" class="h-full py-2 px-3 rounded-sm text-sm font-medium hover:bg-neutral-50">{{ menu.label }}</RouterLink>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
    name: "CommonNavigation",
    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    path: "/search/edit",
                    label: "보도/편집 전용",
                    searchValue: "edit",
                    isActive: false,
                },
                {
                    id: 2,
                    path: "/search/following",
                    label: "팔로잉",
                    searchValue: "following",
                    isActive: false,
                },
                {
                    id: 3,
                    path: "/search/photoPlus",
                    label: "Unsplash Photo+",
                    searchValue: "photo",
                    isActive: false,
                },
                {
                    id: 4,
                    path: "/search/oneColor",
                    label: "단색",
                    searchValue: "one color",
                    isActive: false,
                },
                {
                    id: 5,
                    path: "/search/3dRender",
                    label: "3D 렌더링",
                    searchValue: "3d rendering",
                    isActive: false,
                },
                {
                    id: 6,
                    path: "/search/nature",
                    label: "자연",
                    searchValue: "nature",
                    isActive: false,
                },
                {
                    id: 7,
                    path: "/search/texture",
                    label: "텍스쳐 및 패턴",
                    searchValue: "texture",
                    isActive: false,
                },
                {
                    id: 8,
                    path: "/search/interior",
                    label: "인테리어",
                    searchValue: "interior",
                    isActive: false,
                },
                {
                    id: 9,
                    path: "/search/film",
                    label: "필름",
                    searchValue: "film",
                    isActive: false,
                },
                {
                    id: 10,
                    path: "/search/experimental",
                    label: "실험적인",
                    searchValue: "experimental",
                    isActive: false,
                },
                {
                    id: 11,
                    path: "/search/travel",
                    label: "여행",
                    searchValue: "travel",
                    isActive: false,
                },
                {
                    id: 12,
                    path: "/search/sports",
                    label: "스포츠",
                    searchValue: "sports",
                    isActive: false,
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid $color-neutral-100;

    &__container {
        width: 100%;
        max-width: 1400px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 6px 24px;
    }
}
</style>

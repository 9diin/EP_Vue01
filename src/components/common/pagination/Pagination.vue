<template>
    <Pagination v-slot="{ page }" :total="total >= 1000 ? 1000 : total" :itemsPerPage="30" :sibling-count="1" show-edges :default-page="1">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="changePage(1)" />
            <PaginationPrev @click="changePage(currenPage - 1)" />

            <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                    <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="changePage(item.value - 1)">
                        {{ item.value }}
                    </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext @click="changePage(currenPage + 1)" />
            <PaginationLast @click="changePage(totalPages)" />
        </PaginationList>
    </Pagination>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/index";

export default defineComponent({
    props: {
        total: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    name: "CommonPagination",
    components: { Button, Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev },
    data() {
        return { store: useStore() };
    },
    computed: {
        currenPage() {
            return this.store.page;
        },
    },
    methods: {
        changePage(page: number) {
            this.store.setPage(page);
        },
    },
});
</script>

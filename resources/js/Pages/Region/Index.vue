<script setup>
    import { Head, Link } from '@inertiajs/vue3';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

    defineProps({ regions: Array });

    const columns= [
        {
            field: 'id',
            label: 'ID',
            width: '40',
            numeric: true
        },
        {
            field: 'name',
            label: 'Name',
        }
    ];

</script>

<template>
    <Head title="Regions" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-xl font-semibold leading-tight text-gray-800" >
                        Regions
                    </h2>
                </div>
                <div>
                    <Link href="regions/create"><SecondaryButton>Add Region</SecondaryButton></Link>
                </div>
            </div>
        </template>

        <div class="p-4">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-6">
                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8"
                >
                    <section>
                        <b-table :data="regions" :columns="columns"></b-table>
                    </section>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import { onMounted } from "vue";
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const form = useForm({
    name: ""
});
const props = defineProps({
                    region: {
                        type: Object,
                        default: null,
                    },
                    isUpdating: {
                        type: Boolean,
                        default: false,
                    },
            });
const submit = () => (props.isUpdating ? updatePost() : addPost());
const addPost = () => form.post("/regions");
const updatePost = () => form.put(`/regions/${props.region.id}`);

onMounted(() => {
    if(props.region)
    form.name = props.region.name;
});
</script>

<template>
    <Head title="Create Region" />
    <AuthenticatedLayout>
        <template #header>
            <div>
                <Link href="/regions"><SecondaryButton>All Regions</SecondaryButton></Link>
            </div>
        </template>
        <div class="p-4">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-6">
                <div
                    class="bg-white p-4 shadow sm:rounded-lg sm:p-8"
                >
                    <section>
                        <header>
                            <h2 class="text-lg font-medium text-gray-900">
                                Create Region
                            </h2>
                            <p class="mt-1 text-sm text-gray-600">
                               Create a region for the app.
                            </p>
                        </header>

                        <form
                            @submit.prevent="submit"
                            class="mt-6 space-y-6"
                        >
                            <div>
                                <InputLabel for="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    class="w-full"
                                    v-model="form.name"
                                    
                                    autofocus
                                    autocomplete="name"
                                />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="flex items-center gap-4">
                                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                                <Transition
                                    enter-active-class="transition ease-in-out"
                                    enter-from-class="opacity-0"
                                    leave-active-class="transition ease-in-out"
                                    leave-to-class="opacity-0"
                                >
                                    <p
                                        v-if="form.recentlySuccessful"
                                        class="text-sm text-gray-600"
                                    >
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
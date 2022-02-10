<template>
  <h2 class="p-4 text-3xl">Create Client</h2>
  <!-- Back to Clients Index -->
  <div class="flex place-content-end mb-4">
    <div
      class="px-4 py-2 text-white bg-indigo-900 hover:bg-indigo-600 cursor-pointer"
    >
      <router-link :to="{ name: 'clients.index' }" class="text-sm font-medium"
        >Back</router-link
      >
    </div>
  </div>

  <!-- erros if exist -->
  <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
    {{ errors }}
  </div>

  <!-- Create Client Form -->
  <div class="w-full max-w-xs mx-auto">
    <form
      @submit.prevent="saveClient"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <!-- Client Name -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          name
        </label>
        <input
          v-model="form.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
        />
      </div>
      <!-- Client address -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
          address
        </label>
        <input
          v-model="form.address"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="address"
        />
      </div>
      <!-- Client telephone -->
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="telephone"
        >
          telephone
        </label>
        <input
          v-model="form.telephone"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="telephone"
          type="text"
          placeholder="telephone"
        />
      </div>
      <!-- Client mobile -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">
          mobile
        </label>
        <input
          v-model="form.mobile"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="text"
          placeholder="mobile"
        />
      </div>
      <!-- Client image -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          image
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="file"
          placeholder="image"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useClients from "../../composables/clients";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      address: "",
      telephone: "",
      mobile: "",
      image: "",
    });

    const { errors, storeClient } = useClients();

    const saveClient = async () => {
      await storeClient({ ...form });
    };

    return {
      form,
      errors,
      saveClient,
    };
  },
};
</script>

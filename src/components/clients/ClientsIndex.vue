<template>
  <div>
    <div>
      <h2 class="p-4 text-3xl">Clients</h2>
    </div>
    <!-- div of create Client -->
    <div class="flex place-content-end mb-4">
      <div
        class="px-4 py-2 text-white bg-green-700 hover:bg-green-400 cursor-pointer"
      >
        <router-link
          :to="{ name: 'clients.create' }"
          class="text-sm font-medium"
          >Create Client</router-link
        >
      </div>
    </div>
    <!-- div of client card -->
    <template v-for="item in clients" :key="item.id">
      <div
        class="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
      >
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
            v-bind:src="'http://localhost:8000/api/img/' + item.image"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            {{ item.name }}
          </h2>
          <p class="mt-2 text-gray-600">
            {{ item.address }}
          </p>
          <p class="mt-2 text-gray-600">
            {{ item.telephone }}
          </p>
          <p class="mt-2 text-gray-600">
            {{ item.mobile }}
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import useClients from "../../composables/clients";
import { onMounted } from "vue";

export default {
  setup() {
    const { clients, getClients } = useClients();

    onMounted(getClients);

    return {
      clients,
    };
  },
};
</script>

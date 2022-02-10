import { createRouter, createWebHistory } from "vue-router";

import ClientsIndex from "../components/clients/ClientsIndex.vue";
import ClientsCreate from "../components/clients/ClientsCreate.vue";
const routes = [
  {
    path: "/",
    name: "clients.index",
    component: ClientsIndex,
  },
  {
    path: "/clients",
    name: "clients.create",
    component: ClientsCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

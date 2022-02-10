import { ref } from "vue";
import axios from "axios";

export default function useClients() {
  const clients = ref([]);
  const api_localhost = "http://localhost:8000/api/clients";

  const getClients = async () => {
    let response = await axios.get(api_localhost);
    clients.value = response.data.data;
  };

  return {
    clients,
    getClients,
  };
}

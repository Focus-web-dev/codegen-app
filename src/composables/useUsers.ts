import { ref } from "vue";
import type { User } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const useUsers = () => {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch users");
      users.value = await response.json();
    } catch (err: any) {
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  };

  const deleteUser = (id: number) => {
    users.value = users.value.filter((user) => user.id !== id);
  };

  return { users, loading, error, fetchUsers, deleteUser };
};

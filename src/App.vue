<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useUsers } from "./composables/useUsers";
import type { User } from "./types";
import UserTable from "./components/UserTable.vue";
import UserModal from "./components/UserModal.vue";

const { users, loading, error, fetchUsers, deleteUser } = useUsers();
const selectedUser = ref<User | null>(null);
const modalVisible = ref(false);

const handleUserClick = (user: User) => {
  selectedUser.value = user;
  modalVisible.value = true;
};

const handleCloseModal = () => {
  modalVisible.value = false;
  selectedUser.value = null;
};

const handleDeleteUser = (id: number) => {
  if (selectedUser.value?.id === id) {
    handleCloseModal();
  }
  deleteUser(id);
};

onMounted(fetchUsers);
</script>

<template>
  <main class="min-h-screen py-10 px-0">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">User Management</h1>
      <p class="text-slate-500">
        Manage users from the external API with a modern UI
      </p>
    </div>
    <div>
      <div v-if="loading" class="text-center text-slate-400 py-12 text-lg">
        Loading users...
      </div>
      <div v-else-if="error" class="text-center text-red-500 py-12 text-lg">
        {{ error }}
      </div>
      <UserTable
        v-else
        :users="users"
        @userClick="handleUserClick"
        @deleteUser="handleDeleteUser"
        class="w-full"
      />
    </div>
    <UserModal
      :user="selectedUser"
      :visible="modalVisible"
      @close="handleCloseModal"
    />
  </main>
</template>

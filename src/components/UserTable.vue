<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { User } from "../types";
import styles from "./UserTable.module.css";

const props = defineProps<{
  users: User[];
}>();

const emit = defineEmits<{
  (e: "userClick", user: User): void;
  (e: "deleteUser", id: number): void;
}>();

const handleRowClick = (user: User) => {
  emit("userClick", user);
};

const handleDelete = (e: Event, id: number) => {
  e.stopPropagation();
  emit("deleteUser", id);
};
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.header">
      <div>Name / Email</div>
      <div>Address</div>
      <div>Phone</div>
      <div>Website</div>
      <div>Company</div>
      <div>Action</div>
    </div>
    <div
      v-for="user in users"
      :key="user.id"
      :class="styles.row"
      tabindex="0"
      role="button"
      aria-label="View user details"
      @click="handleRowClick(user)"
      @keydown.enter="handleRowClick(user)"
      @keydown.space.prevent="handleRowClick(user)"
    >
      <div :class="[styles.cell, styles.name]">
        {{ user.name }}
        <div :class="styles.email">{{ user.email }}</div>
      </div>
      <div :class="styles.cell">
        {{ user.address.city }}, {{ user.address.street }}
      </div>
      <div :class="styles.cell">{{ user.phone }}</div>
      <div :class="styles.cell">
        <a :href="'http://' + user.website" target="_blank" rel="noopener">{{
          user.website
        }}</a>
      </div>
      <div :class="styles.cell">{{ user.company.name }}</div>
      <div :class="styles.cell">
        <button
          :class="styles.deleteBtn"
          aria-label="Delete user"
          @click="(e) => handleDelete(e, user.id)"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

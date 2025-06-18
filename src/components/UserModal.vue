<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import type { User } from "../types";
import styles from "./UserModal.module.css";

const props = defineProps<{
  user: User | null;
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const modalRef = ref<HTMLElement | null>(null);

const handleClose = () => {
  emit("close");
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") handleClose();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

watch(
  () => props.visible,
  (val) => {
    if (val && modalRef.value) {
      setTimeout(() => modalRef.value?.focus(), 0);
    }
  }
);

const getMapUrl = (user: User) => {
  const { lat, lng } = user.address.geo;
  return `https://www.google.com/maps?q=${lat},${lng}`;
};
</script>

<template>
  <div v-if="visible" :class="styles.overlay" @click.self="handleClose">
    <div
      :class="styles.modal"
      ref="modalRef"
      tabindex="0"
      aria-modal="true"
      role="dialog"
      aria-label="User details"
    >
      <button
        :class="styles.closeBtn"
        aria-label="Close modal"
        @click="handleClose"
      >
        ×
      </button>
      <div v-if="user">
        <div :class="styles.title">{{ user.name }}</div>
        <a :href="`mailto:${user.email}`" :class="styles.email">{{
          user.email
        }}</a>
        <div :class="styles.section">
          <div :class="styles.sectionTitle">Address</div>
          <div>{{ user.address.suite }}, {{ user.address.street }}</div>
          <div>{{ user.address.city }}, {{ user.address.zipcode }}</div>
          <a
            :href="getMapUrl(user)"
            target="_blank"
            rel="noopener"
            :class="styles.mapLink"
            >📍 View on map</a
          >
        </div>
        <div :class="styles.section">
          <div :class="styles.sectionTitle">Contact</div>
          <div>
            <span :class="styles.label">Phone:</span
            ><span :class="styles.value">{{ user.phone }}</span>
          </div>
          <div>
            <span :class="styles.label">Website:</span
            ><a
              :href="'http://' + user.website"
              target="_blank"
              rel="noopener"
              :class="styles.value"
              >{{ user.website }}</a
            >
          </div>
        </div>
        <div :class="styles.section">
          <div :class="styles.sectionTitle">Company</div>
          <div>
            <span :class="styles.label">Name:</span
            ><span :class="styles.value">{{ user.company.name }}</span>
          </div>
          <div>
            <span :class="styles.label">Catchphrase:</span
            ><span :class="styles.value">{{ user.company.catchPhrase }}</span>
          </div>
          <div>
            <span :class="styles.label">Business:</span
            ><span :class="styles.value">{{ user.company.bs }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

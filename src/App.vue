<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'

const { notifications, createNotification, removeNotifications } =
  useNotifications()

provide('create-notification', createNotification)
</script>

<template>
  <app-layout>
    <router-view />

    <transition-group
      name="toast-notification"
      tag="div"
      class="toast-notifications"
    >
      <toast-notification
        v-for="item in notifications"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :title="item.title"
        :message="item.message"
        :auto-close="item.autoClose"
        :duration="item.duration"
        @close="
          () => {
            removeNotifications(item.id)
          }
        "
      ></toast-notification>
    </transition-group>
  </app-layout>
</template>

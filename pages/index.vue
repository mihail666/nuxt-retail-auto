<template>
  <MainLayout>
    <v-row>
      <v-col
        v-for="car in appStore.cars"
        :key="car.id"
        cols="3"
      >
        <CardCar :car="car" />
      </v-col>
    </v-row>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()

</script>

<template>
  <v-chip
    class="ma-2"
    label
  >
    <Icon
      start
      name="material-symbols:border-all-rounded"
      class="mr-2"
    ></Icon>
    {{computedQuantitCars}}
  </v-chip>

  <v-chip
    class="ma-2"
    label
  >
    <Icon
      start
      name="ic:baseline-article"
      class="mr-2"
    ></Icon>
    {{computedQuantitCard}}
  </v-chip>

  <v-chip
    class="ma-2"
    label
  >
    <Icon
      start
      name="fa6-solid:chalkboard-user"
      class="mr-2"
    ></Icon>
    {{userVechicles}}
  </v-chip>
</template>

<script setup>
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()

const computedQuantitCars = computed(() =>
  appStore.cars.reduce((sum, car) => sum + +car.quantity, 0)
)
const computedQuantitCard = computed(() => appStore.cars.length)

const userVechicles = 10
</script>

<template>
  <v-card
    :loading="loading"
    class="mx-auto bg-grey-lighten-4"
    rounded="lg"
    max-width="380"
    :id="`CardCar${car.vin}`"
  >
    <NuxtLink
      :to="`/car/${car.vin}`"
      class="text-decoration-none text-black"
      @click="reserve()"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="1"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        contain
        height="240"
        class="img"
        :src="car.placeholder"
      ></v-img>

      <v-card-item>
        <v-card-title>{{ car.title }}</v-card-title>

        <v-card-subtitle>
          <Icon name="fa-solid:caret-right"></Icon>
          <span class="">{{ car.vin }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div class="my-4 text-subtitle-1">$ {{ car.price }}</div>
      </v-card-text>
    </NuxtLink>
  </v-card>
</template>

<script setup>
const props = defineProps(['car'])
const { car } = toRefs(props)
const loading = ref(false)

const reserve = () => {
  loading = true
  setTimeout(() => (loading = false), 2000)
}
</script>

<style lang="scss">
.img {
  mix-blend-mode: multiply;
}
</style>

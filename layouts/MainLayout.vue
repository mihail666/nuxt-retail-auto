<template>
  <v-app id="inspire">
    <!-- sidebar -->

    <v-navigation-drawer
      v-model="drawer"
      class="bg-primary"
    >
      <v-list>
        <v-list-item class="mb-10">
          <div class="d-flex flex-row align-center">
            <Icon
                  name="carbon:ibm-cloud-direct-link-1-exchange"
                  size="50"
                  class="mr-2"
                ></Icon>
            <v-list-item-title class="mr-4 text-h6 font-weight-bold">
              Retail Auto
            </v-list-item-title>
          </div>
        </v-list-item>
        <template
          v-for="p in pages"
          :key="p.id"
        >
          <v-list-item
            v-if="p.displayOnSidebar"
            link
          >
            <NuxtLink
              :to="p.url"
              class="text-decoration-none text-white"
            >
              <v-list-item-title class="d-flex align-center">
                <Icon
                  :name="p.icon"
                  size="20"
                  class="mr-2"
                ></Icon>
                {{ p.title }}
              </v-list-item-title>
            </NuxtLink>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- header bar -->
    <v-app-bar :height="appBarH" class="py-1 py-3">
      <v-toolbar class="pr-6 bg-white">
        <v-btn
          @click="drawer = !drawer"
          class="ms-2"
          size="small"
          min-height="50"
          min-width="50"
        >
          <Icon
            name="tdesign:menu-application"
            size="30"
          ></Icon>
        </v-btn>

        <div class="d-flex align-center">
          <v-toolbar-title class="ms-2 font-weight-bold">
            {{ currentPage.title }}
          </v-toolbar-title>
          <ChipsGroup v-if="currentPage.enableChips" />
        </div>

        <v-spacer></v-spacer>

        <v-btn
          @click="newVechicle"
          variant="outlined"
          size="small"
          min-height="40"
          min-width="40"
        >
          <Icon
            name="tdesign:add"
            size="18"
            class=""
          ></Icon>
        </v-btn>

        <v-avatar
          class="mx-5"
          color="primary"
          size="40"
        ></v-avatar>
        <p class="">Mihail FR</p>

        <template
          v-slot:extension
          v-if="currentPage.enableTabs"
        >
          <TabsGroup
            class="ms-2 mt-n4"
            :currentPageType="currentPage.type"
          />
        </template>
      </v-toolbar>
    </v-app-bar>

    <!-- main -->

    <v-main class="mt-10 ms-5">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { pages } from '~/setting.json'
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()

const drawer = ref(false)
const route = useRoute()

const currentPage = computed(() =>
  pages.find((p) => p.routeName === route.name)
)

const appBarH = computed(() => {
  if (currentPage.value.enableTabs) {
    return 88
  }
  return 50
})
const computedQuantitCars = computed(() =>
  appStore.cars.reduce((sum, car) => sum + +car.quantity, 0)
)
const computedQuantitCard = computed(() => appStore.cars.length)

const newVechicle = () => {
  return navigateTo('/newVechicle')
}
</script>

<template>
  <v-tabs
    v-model="tab"
    color="deep-purple-accent-4"
  >
    <v-tab
      v-for="tab in currentTabs"
      :key="tab"

      @click="$emit('selectedTab', tab)"
    >
      {{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<script setup>
import { tabs } from '~/setting.json'

const props = defineProps(['currentPageType'])
const { currentPageType } = toRefs(props)

const tab = ref(null)

const currentTabs = computed(() => tabs.filter((t) => t.type === currentPageType.value ))

const goToTab = () => {
  navigateTo(tab.value.url)
  return
}
</script>

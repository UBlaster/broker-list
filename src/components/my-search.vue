<template>
  <v-text-field
      color="success"
      v-model="search" @input="updateSearch" placeholder="Поиск..."
  ></v-text-field>
</template>

<script setup>  
import { ref } from 'vue'
import { useStore } from 'vuex'
 
const search = ref('');
const store = useStore();

const updateSearch = () => {
  store.dispatch('brokerList/setSearchTerm', search.value);
};

</script>

<style scoped>

</style>
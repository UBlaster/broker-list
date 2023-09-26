<template>
  <v-card
    class="mx-auto"
    :max-width="mdAndUp ? '500' : '350'"
  >
    <v-list density="compact">
      <mySearch :disabled="loader"/>
      <v-list-subheader class="list__header">Broker list</v-list-subheader>

      <my-loader v-if="loader"/>
      <div v-else>
        <v-list-item
        v-for="(item, i) in brokers"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-img
            class="list__img"
            :src="item.logo"
            aspect-ratio="1/1"
            cover
          />
        </template>

        <v-list-item-title class="list__title" v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.country"></v-list-item-subtitle>
        <v-list-item-subtitle v-text="item.contact"></v-list-item-subtitle>
      </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>

<script setup>  
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import mySearch from './my-search.vue';
import myLoader from './my-loader.vue';
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()


const store = useStore()


onMounted(async () => {
    await store.dispatch('brokerList/fetchItems');
});

const brokers = computed(() => store.getters['brokerList/filteredItems']);
const loader = computed(() => store.getters['brokerList/getLoader'])

</script>
<style scoped lang="scss">
@import '@/styles/settings.scss';
.list {
    display: grid;
    grid-template: repeat(3,10vw) / 0vw;
    justify-content: center;
  
}

.list__header {
  font-size: 2rem;
  line-height: 2.1rem;
  @include rezTablet {
      font-size: 1rem;
      line-height: 1.1rem;
  }
}

.list__img {
    width: 3vw;
}

.list__hover-info {
    height: 1.4vw;
}
.list__group {
    border: 1px solid #666 ;
    display: flex;
    justify-content: center
}

.list__img {
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @include rezDesktopPlus{
      width: 50px;
  } 
  
  
  @include rezDesktop{
      width: 6vw;
  } 
  
  
  @include rezTablet {
      width: 6vw;
  }

  @include rezMobile {
     width: 50px;
  } 
}

.list__title {
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 5px;
}
</style>
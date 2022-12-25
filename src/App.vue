<template>
  <div class="h-screen px-10 py-5" :class="bgColor">
    <div style="height: 10%;">
      <manager-comp />
    </div>
    <div style="height: 90%;">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ManagerComp from './components/manager.vue';
import store from './store';

export default defineComponent({
  name: 'AppCompo',
  components:{
    'manager-comp': ManagerComp
  },
  computed: {
    bgColor() : string
    {
      return store.getters.get_is_article ? 'bg-black' : 'bg-gradient-to-t from-blue-600 to-slate-100';
    }
  }
});

</script>

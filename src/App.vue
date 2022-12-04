<template>
  <div class="bg-gradient-to-t from-blue-600 to-slate-100 h-screen px-10 py-5">
    <manager-comp />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ManagerComp from './components/manager.vue';

export default defineComponent({
  name: 'AppCompo',
  components:{
    'manager-comp': ManagerComp
  }
});

</script>

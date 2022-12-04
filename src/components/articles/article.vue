<template>
    <div>{{article_id}}</div>
</template>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ArticleBlock',
    data() {
        return {
            article_id: Number(this.$route.query.articleid),
        }
    }
  });
  
  </script>
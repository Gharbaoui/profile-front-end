<template>
    <div class="h-full overflow-y-auto w-full py-5">
      <div class="text-center w-full text-lg font-mono border-line border-slate-200 border-b-2">
        {{upperPart.title}}
      </div>
      
    </div>
</template>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ArticleBlock',
    data() {
        return {
            article_id: Number(this.$route.query.articleid),
            upperPart: {
              title: `To accomplish this, I’m starting the book out (after the introduction)
with a section about what Git actually does, rather than how to use
it. I found that I didn’t really understand Git and had many problems
using it until I understood what it was actually doing at a low level,
rather than thinking of it as a different, weird SVN-like system.`,
              idea:  `idea`
            },
        }
    }
  });
  
  </script>

<style scoped>
.remain-height {
  height: 80vh;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
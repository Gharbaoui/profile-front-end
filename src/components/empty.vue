<template>
    <div data-prismjs-copy-timeout="500">
      <pre><code class="language-js" data-prismjs-copy="Copy the JavaScript snippet!">console.log('Hello, world!');</code></pre>

<pre><code class="language-clike" data-prismjs-copy="Copy the C snippet!">int main() {
  return 0;
}</code></pre>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Prism from 'prismjs';
  import "prismjs/themes/prism-tomorrow.css"
  import "prismjs/plugins/toolbar/prism-toolbar.min.css";
  import "prismjs/plugins/toolbar/prism-toolbar.min";
  import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

  export default defineComponent({
    name: 'UserComp',
    mounted() {
      window.Prism = window.Prism || {};
      window.Prism.manual = true;
      Prism.highlightAll(); // highlight your code on mount
    }
  });
  
  </script>
  
<template>
  <div class="flex flex-col py-5 h-[85%]">
    <div class="w-full">
      <div class="flex justify-end">

            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input @keyup.enter="searchForArticle" v-model="searchStr" type="text" placeholder="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <button @click="searchForArticle" type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        
        </div>
    </div>

    <div class="w-full flex flex-wrap justify-around mt-10 h-3/4">

      <div v-for="article in articles" :key="article.id" @click="goToArticle(article.id)" class="cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg inset-0 transform  hover:rotate-[30deg] hover:scale-[1.03] transition duration-300 flex flex-col items-center justify-around py-5 w-1/4">
        <div class="text-white font-bold text-2xl">{{titleTransform(article.title)}}</div>
        <img :src="article.logo" alt="article logo" class="w-1/4">
        <div class="text-lg text-white italic text-center">{{shortenLongText(article.idea)}}</div>
      </div>

    </div>
  </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {BasicArticle} from './dto/index';

  export default defineComponent({
    name: 'ArticlesCompo',
    created() {
      for (let i = 0; i < 3; ++i) {
        this.addArticle();
      }
    },
    data() {
      return {
        ideaMaxLen: 80,
        titleMaxLen: 20,
        searchStr: '',
        max_article_size: 3,
        articles: [] as Array<BasicArticle>,
      }
    },
    methods: {
      searchForArticle() {
        console.log(`searching for ${this.searchStr}`);
      },
      addArticle() {
        this.articles.push({
        id:1,
        title: 'my title uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
        idea: 'Which of the two sovereigns is imbued with the Moral law? (2) Which of the two generals has most ability? (3) With whom lie the advantages derived from Heaven and Earth? (4) On which side is discipline most rigorously enforced? (5) Which army is stronger? (6) On which side are officers and men more highly trained? (7) In which army is there the greater constancy both in reward and punishment?',
        logo: require("@/assets/user/user-img.jpg"),
        time: 34
      });
      },
      shortenLongText(value:string) : string {
        if (value.length > this.ideaMaxLen)
          return value.slice(0, this.ideaMaxLen) + `...`;
        else
          return value;
      },
      titleTransform(value:string) : string {
        const upper = value.charAt(0).toUpperCase() + value.slice(1);
        if (upper.length > this.titleMaxLen)
          return upper.slice(0, this.titleMaxLen) + `...`;
        else
          return upper;
      },
      goToArticle(articleId:number) {
        console.log(`go to article ${articleId}`);
      }
    },
    computed: {
    }
  });
  
  </script>
  
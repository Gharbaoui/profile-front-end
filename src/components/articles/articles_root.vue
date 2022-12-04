<template>
  <div class="flex flex-col justify-around py-5 h-[85%]">
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
      <div v-for="article in articles" :key="article.id" @click="goToArticle(article.id)" class="border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]    cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg inset-0 transform  hover:rotate-[15deg] hover:scale-[1.03] transition duration-300 flex flex-col items-center justify-around py-5 w-1/4">
        <div class="text-white font-bold text-2xl">{{titleTransform(article.title)}}</div>
        <img :src="article.logo" alt="article logo" class="w-1/4">
        <div class="text-lg text-white italic text-center">{{shortenLongText(article.idea)}}</div>
      </div>

    </div>
    <div class="w-full flex justify-center mt-5">
		<ul class="inline-flex -space-x-px">
			<li @click="prevArticleList" class="bg-white border border-gray-300 text-gray-500 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" :class="{'cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': prev_is_valid}">
        Previous
			</li>

			<li @click="nextArticleList" class="bg-white border border-gray-300 text-gray-500 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" :class="{'cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': next_is_valid}">
        Next
      </li>
		</ul>
	</div>
  </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {BasicArticle} from './dto/index';
  import router from '@/router';
  export default defineComponent({
    name: 'ArticlesCompo',
    created() {
      this.total_articles = 8;
      for (let i = 0; i < 3; ++i) {
        this.addArticle();
      }
      this.stillValid();
    },
    data() {
      return {
        next_is_valid: true,
        prev_is_valid: true,
        total_articles: 0,
        current_page: 1,
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
        router.push({name: 'article', query: {articleid: articleId}});
      },
      nextArticleList() {
        if (!this.next_is_valid)
          return;
        ++this.current_page;
        this.getRightArticles();
      },
      prevArticleList() {
        if (!this.prev_is_valid)
          return ;
        --this.current_page;
        this.getRightArticles();
      },
      getArticleIndexs() {
        return {
          start_index: (this.current_page - 1) * this.max_article_size,
          end_index: (this.current_page * this.max_article_size) - 1
        };
      },
      async getRightArticles() {
        console.log(`called with ${this.current_page}`);
        const {start_index, end_index} = this.getArticleIndexs();
      },
      stillValid() {
        this.next_is_valid = (this.current_page * this.max_article_size) < this.total_articles;
        this.prev_is_valid = this.current_page > 1;
      }
    },
    computed: {
    },
    watch: {
      current_page() {
        this.stillValid();
      }
    }
  });
  
  </script>
  
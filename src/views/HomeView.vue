<template>
  <div class="home min-h-screen bg-cover bg-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900">
         <div class="flex flex-col">
          <div class="grid place-items-center mx-2 my-20 sm">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6 mb-20 mt-10">
              <!-- bg container -->
              <div class="bg-cover bg-no-repeat bg-right-top rounded-lg p-3 sm:p-20" 
              style="background-image: url('https://images.unsplash.com/photo-1510872195213-e4d15202df26?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFkaW8lMjB0b3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500')">
              <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600 text-center">Radio Amateurs of Canada practice quizz app</h4>
              <div class="text-center">
            <p>This test provides example questions that may appear on your RAC license test. Please pick your prefered language and difficulty. Good luck testing your knowledge!
            </p>
            <hr>
            <p>Ce test fournit des exemples de questions qui peuvent apparaître sur votre test de licence RAC. Veuillez choisir la langue et la difficulté de votre choix. Bonne chance pour tester vos connaissances !</p>
              </div>
            <!-- toggles -->
            <div class="container mx-auto bg-white rounded-lg px-4 py-4 mb-4 mt-6 grid grid-cols-3">
                <div class="col-span-3 sm:col-span-1">
                <p class="text-left">Language</p>
                </div>
                <div class="flex justify-end col-span-2 sm:col-span-1">
                <label for="toggle" class="text-xs text-gray-700 mr-2">English</label>
                </div>
                <div class="flex justify-start">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input  v-on:click="changeLangState()" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-green-400 appearance-none cursor-pointer"/>
                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                </div>
                <label for="toggle" class="text-xs text-gray-700">French</label>
                </div>
            </div>
            <div class="container mx-auto bg-white rounded-lg px-4 py-4 grid grid-cols-3">
                <div class="col-span-3 sm:col-span-1">
                <p class="text-left">Difficulty</p>
                </div>
                <div class="flex justify-end col-span-2 sm:col-span-1">
                <label for="toggle2" class="text-xs text-gray-700 mr-2">Basic</label>
                </div>
                <div class="flex justify-start">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input v-on:click="changeLangStateDiff" type="checkbox" name="toggle2" id="toggle2" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-green-400 appearance-none cursor-pointer"/>
                    <label for="toggle2" class="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                </div>
                <label for="toggle2" class="w-1/2 text-xs text-gray-700">Advanced</label>
                </div>
            </div>
            <hr class="my-6">
            <div class="container mx-auto bg-white rounded-lg px-4 py-4">
                <p class="text-left">You've chosen test in
                    <span v-if="!stateLanguage" class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">English</span>
                    <span v-if="stateLanguage" class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">French</span>
                    with
                    <span v-if="!stateDifficulty" class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">basic</span>
                    <span v-if="stateDifficulty" class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">advanced</span>               
                    difficulty
                </p>
            </div>
            <div class="flex justify-end mt-6">
              <!-- test page with param Frnch diff advanced -->
            <router-link v-if="stateLanguage && stateDifficulty" :to="{ name: 'about', params: { lang: 1, diff: 1 }, }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            @click="testStartedFrAdv">start test</router-link>
            <!-- test page with param Frnch diff basic -->
            <router-link v-if="stateLanguage && !stateDifficulty" :to="{ name: 'about', params: { lang: 1, diff: 0 }, }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            @click="testStartedFrBas">start test</router-link>
            <!-- test page with param Eng diff adv -->
            <router-link v-if="!stateLanguage && stateDifficulty" :to="{ name: 'about', params: { lang: 0, diff: 1 }, }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            @click="testStartedEngAdv">start test</router-link>
            <!-- test page with param Eng diff bass -->
            <router-link v-if="!stateLanguage && !stateDifficulty" :to="{ name: 'about', params: { lang: 0, diff: 0 }, }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            @click="testStartedEngBas">start test</router-link>
            </div>
              </div>
            </div>
          </div>
         </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      stateLanguage: false,
      stateDifficulty: false,
      someValue: 45,
    };
  },
  methods:{
    testStartedEngBas(){
      this.$gtag.event('TestStartedEngBas', {
        'event_category' : 'initPicks',
        'event_label' : 'User picked and started the test in Eng. with bassic difficulty',
      })
    },
    testStartedEngAdv(){
      this.$gtag.event('TestStartedEngAdv', {
        'event_category' : 'initPicks',
        'event_label' : 'User picked and started the test in Eng. with advanced difficulty',
      })
    },
    testStartedFrBas(){
      this.$gtag.event('TestStartedFrBas', {
        'event_category' : 'initPicks',
        'event_label' : 'User picked and started the test in Fr. with bassic difficulty',
      })
    },
    testStartedFrAdv(){
      this.$gtag.event('TestStartedFrAdv', {
        'event_category' : 'initPicks',
        'event_label' : 'User picked and started the test in Fr. with advanced difficulty',
      })
    },
    changeLangState(){
      if (this.stateLanguage === false) {
        this.stateLanguage = true;
      }
      else if (this.stateLanguage === true){
        this.stateLanguage = false;
      }
    },
    changeLangStateDiff(){
      if (this.stateDifficulty === false) {
        this.stateDifficulty = true;
      }
      else if (this.stateDifficulty === true){
        this.stateDifficulty = false;
      }
    },
  },
  
};
</script>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: green-400;
}
/* p {
   font-family: fangsong;
} */
</style>

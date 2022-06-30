<template>
  <div class="about min-h-screen bg-cover bg-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900">
    <div class="flex flex-col"  v-if="!finishPage && !feedPage">
          <div class="grid place-items-center mx-2 my-20 sm">
              <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6
              bg-white shadow-md lg:shadow-lg mb-10">
                <div class="grid grid-cols-3 gap-0 h-20">
                    <div class="bg-green-300 flex justify-center items-center">
                        <p>Correct: {{ cor }}</p>
                    </div>
                    <div class="bg-red-300 flex justify-center items-center">
                        <p>Incorrect: {{ wrg }}</p>
                    </div>
                    <div class="bg-gray-300 flex justify-center items-center">
                        <p>Total: {{ ttl }}</p>
                    </div>
                </div>
              <div class="bg-white py-6 text-left">
              <p class="text-bold pb-6">Question:</p>
                <p class="h-24 overflow-y-scroll no-scrollbar bg-gray-100 border rounded p-5"> {{questions[randomNR].question}} </p>
              </div>
              <p>Answers:</p>
              <!-- new form -->
              <form class="p-5">
        <div class="grid grid-cols-10 mb-6 border rounded bg-gray-100 p-3"
        :class="{'bg-green-400 transition ease-in-out scale-110 duration-500': toggleCorrect1, 'bg-red-400 transition ease-in-out scale-110 duration-500': wrong1}">
          <div>
          <input
            id="Ans1"
            class="mr-2"
            type="radio"
            value=1
            v-model="isCorrect"
            :disabled="disabled == true"
            :checked="disabled == true"
          />
          </div>
          <div class="col-span-9">
          <label for="Ans1"><p class="max-h-24 overflow-y-scroll no-scrollbar"> {{questions[randomNR].answer_1}} </p></label>
          </div>
        </div>
        <div class="grid grid-cols-10 mb-6 border rounded bg-gray-100 p-3"
        :class="{'bg-green-400 transition ease-in-out scale-110 duration-500': toggleCorrect2, 'bg-red-400 transition ease-in-out scale-110 duration-500': wrong2}">
          <div>
          <input
            id="Ans2"
            class="mr-2"
            type="radio"
            value=2
            v-model="isCorrect"
            :disabled="disabled == true"
            :checked="disabled == true"
          />
          </div>
          <div class="col-span-9">
          <label for="Ans2"><p class="max-h-24 overflow-y-scroll no-scrollbar"> {{questions[randomNR].answer_2}} </p></label>
          </div>
        </div>
        <div class="grid grid-cols-10 mb-6 border rounded bg-gray-100 p-3"
        :class="{'bg-green-400 transition ease-in-out scale-110 duration-500': toggleCorrect3, 'bg-red-400 transition ease-in-out scale-110 duration-500': wrong3}">
          <div>
          <input
            id="Ans3"
            class="mr-2"
            type="radio"
            value=3
            v-model="isCorrect"
            :disabled="disabled == true"
            :checked="disabled == true"
          />
          </div>
          <div class="col-span-9" >
          <label for="Ans3"><p class="max-h-24 overflow-y-scroll no-scrollbar"> {{questions[randomNR].answer_3}} </p></label>
          </div>
        </div>
        <div class="grid grid-cols-10 mb-6 border rounded bg-gray-100 p-3"
        :class="{'bg-green-400 transition ease-in-out scale-110 duration-500': toggleCorrect4, 'bg-red-400 transition ease-in-out scale-110 duration-500': wrong4}">
          <div>
          <input
            id="Ans4"
            class="mr-2"
            type="radio"
            value=4
            v-model="isCorrect"
            :disabled="disabled == true"
            :checked="disabled == true"
          />
          </div>
          <div class="col-span-9">
          <label for="Ans4"><p class="max-h-24 overflow-y-scroll no-scrollbar"> {{questions[randomNR].answer_4}} </p></label>
          </div>
        </div>
      </form>
      <!-- buttons/footer -->
              <div v-if="this.isCorrect == 0" class="py-3 px-5 mb-4 mx-4 bg-blue-500 text-blue-900 text-sm rounded-md border border-blue-200" role="alert">
                        <p class="text-center"><strong>Pick an answer before continuing</strong></p>
                    </div>
              <div class="flex justify-end mt-3">
              <button v-if="!buttonClicked && this.isCorrect != 0" v-on:click="checkAns()" class="bg-transparent mr-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                check answer
              </button>
              <button v-if="buttonClicked" v-on:click="resetForm()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                next question
              </button>
              </div>
              <div class="flex justify-end mt-3">
              <button v-if="buttonClicked" v-on:click="restartTest()" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                restart test
              </button>
              
              </div>
              </div>
          </div>
      </div>
      <!-- final page after all questions answered -->
      <div v-if="finishPage">
        <div class="flex flex-col min-h-screen">
          <div class="grid place-items-center mx-2 my-20 sm">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6
              bg-white shadow-md lg:shadow-lg mb-10">
          <p>You finished the quiz with the score of {{ cor }} out of {{ ttl }} </p>
          <p>Restart the test with your current options or go back to home screen.</p>
          <div class="flex justify-center gap-2 mt-3">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><router-link to="/">home screen</router-link></button>
          <button @click="pageSwitch" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">restart test</button>
          </div>
            </div>
          </div>
        </div>
      </div>
      <!-- feedback page -->
      <div v-if="feedPage">
        <div class="flex flex-col min-h-screen">
          <div class="grid place-items-center mx-2 my-20 sm">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6
              bg-white shadow-md lg:shadow-lg mb-10">
              <h1 class="text-xl mb-4 font-bold text-slate-500">please tell us how the aplication is doing. Leave your feedback in the box bellow.</h1>
            <form ref="form" @submit.prevent="sendEmail" class="bg-gray-100 p-10">
              <div>
              <label>Message</label>
              </div>
              <textarea name="message" style="border-radius: 10px; background: white" required
              class="w-full"></textarea>
              <div class="flex justify-end mt-3">
              <input type="submit" value="Send" 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      <!-- popup -->
      <div v-if="popup == true" class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
    <h1 class="text-xl mb-4 font-bold text-slate-500">Would you like to leave us some feedback?</h1>
    <button @click="this.popup = false" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-8">no</button>
    <button @click="this.feedPage = true; this.popup = false;" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">yes</button>
  </div>
</div>
  </div>
</template>

<script>
import engBas from '../assets/basic-english.json'
import engAdv from '../assets/advanced-english.json'
import frhBas from '../assets/basic-french.json'
import frhAdv from '../assets/advanced-french.json'
import emailjs from '@emailjs/browser';

export default {
  created(){
    if(this.passVarLang == 1 && this.passVarDiff == 0){
    this.questions = frhBas;}
    else if (this.passVarLang == 1 && this.passVarDiff == 1){
      this.questions = frhAdv;
    }
    else if (this.passVarLang == 0 && this.passVarDiff == 0){
      this.questions = engBas;
    }
    else if (this.passVarLang == 0 && this.passVarDiff == 1){
      this.questions = engAdv;
    }
    },
  mounted() {
      if(localStorage.answered){
        this.formAnswered = true;
      }
      for(let i = 0; i < this.questions.length; i++){
          this.nrArr[i] = i;
        }

        let first,
        second,
        temp,
        count = this.nrArr.length;
      for (let i = 0; i < this.nrArr.length; i++) {
        first = Math.floor(Math.random() * count);
        second = Math.floor(Math.random() * count);
        temp = this.nrArr[first];
        this.nrArr[first] = this.nrArr[second];
        this.nrArr[second] = temp;
      }
      this.randomNR = this.nrArr[this.counter];
     },
  data(){
    return {
      popup: false,
      passVarLang: this.$route.params.lang,
      passVarDiff: this.$route.params.diff,
      questions: null,
      isCorrect: 0,
      buttonClicked: false,
      toggleCorrect1: false,
      toggleCorrect2: false,
      toggleCorrect3: false,
      toggleCorrect4: false,
      disabled: false,
      wrong1: false,
      wrong2: false,
      wrong3: false,
      wrong4: false,
      cAns: 0,
      ttl: 0,
      wrg: 0,
      cor: 0,
      counter: 0,
      finishPage: false,
      feedPage: false,
      randomNR: 0,
      nrArr: [],
      formAnswered: false,
    };
  },
  methods:{
    sendEmail() {
      localStorage.answered = true;
      emailjs.sendForm('service_j5xyxw6', 'template_zfgk8go', this.$refs.form, 'XhEw-EcAL9LKmfsKs')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.feedPage = false;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
    checkAns(){
      this.cAns = this.questions[this.randomNR].question_key;
      this.buttonClicked = true;
      this.ttl = this.ttl + 1;
      if (this.isCorrect == this.cAns){
        this.cor = this.cor +1;
        if (this.isCorrect == 1){
          this.toggleCorrect1 = true;
        this.disabled = true;
        console.log('correct answer');
        }
        else if (this.isCorrect == 2){
          this.toggleCorrect2 = true;
        this.disabled = true;
        console.log('correct answer');
        }
        else if (this.isCorrect == 3){
          this.toggleCorrect3 = true;
        this.disabled = true;
        console.log('correct answer');
        }
        else if (this.isCorrect == 4){
          this.toggleCorrect4 = true;
        this.disabled = true;
        console.log('correct answer');
        }
      }
      else{
        this.wrg = this.wrg + 1;
        if (this.isCorrect == 1){
          this.wrong1 = true;
          this.disabled = true;
          if (this.cAns == 2){this.toggleCorrect2=true;}
          else if (this.cAns == 3){this.toggleCorrect3=true;}
          else if (this.cAns == 4){this.toggleCorrect4=true;}
        }
        else if (this.isCorrect == 2){
          this.wrong2 = true;
          this.disabled = true;
          if (this.cAns == 1){this.toggleCorrect1=true;}
          else if (this.cAns == 3){this.toggleCorrect3=true;}
          else if (this.cAns == 4){this.toggleCorrect4=true;}
        }
        else if (this.isCorrect == 3){
          this.wrong3 = true;
          this.disabled = true;
          if (this.cAns == 2){this.toggleCorrect2=true;}
          else if (this.cAns == 1){this.toggleCorrect1=true;}
          else if (this.cAns == 4){this.toggleCorrect4=true;}
        }
        else if (this.isCorrect == 4){
          this.wrong4 = true;
          this.disabled = true;
          if (this.cAns == 2){this.toggleCorrect2=true;}
          else if (this.cAns == 3){this.toggleCorrect3=true;}
          else if (this.cAns == 1){this.toggleCorrect1=true;}
        }
      }
    },
    // all the test check for app reactivity and google analytics
    resetForm(){
      this.counter = this.counter + 1;
      this.randomNR = this.nrArr[this.counter];
      if(this.counter == 8){
        if(this.formAnswered == false){
        this.popup = true;
        }
      }
      // halfway done GA event
      if(this.counter == (this.questions.length/2).toFixed(0)){
        if(this.passVarLang == 0 && this.passVarDiff == 0){
        this.$gtag.event('testHalfEngBas', {
        'event_category' : 'testHalf',
        'event_label' : 'User finished half of the test in English with basic difficulty',
      })}
      else if(this.passVarLang == 0 && this.passVarDiff == 1){
        this.$gtag.event('testHalfEngAdv', {
        'event_category' : 'testHalf',
        'event_label' : 'User finished half of the test in English with advanced difficulty',
      })
      }
      else if(this.passVarLang == 1 && this.passVarDiff == 0){
        this.$gtag.event('testHalfFrBas', {
        'event_category' : 'testHalf',
        'event_label' : 'User finished half of the test in French with basic difficulty',
      })
      }
      else if(this.passVarLang == 1 && this.passVarDiff == 1){
        this.$gtag.event('testHalfFrAdv', {
        'event_category' : 'testHalf',
        'event_label' : 'User finished half of the test in French with advanced difficulty',
      })
      }
      }
      // GA test finished
      if (this.counter == this.questions.length){
        if(this.passVarLang == 0 && this.passVarDiff == 0){
        this.$gtag.event('testFinishedEngBas', {
        'event_category' : 'testFinished',
        'event_label' : 'User finished test in English with basic difficulty',
      })}
      else if(this.passVarLang == 0 && this.passVarDiff == 1){
        this.$gtag.event('testFinishedEngAdv', {
        'event_category' : 'testFinished',
        'event_label' : 'User finished test in English with advanced difficulty',
      })
      }
      else if(this.passVarLang == 1 && this.passVarDiff == 0){
        this.$gtag.event('testFinishedFrBas', {
        'event_category' : 'testFinished',
        'event_label' : 'User finished test in French with basic difficulty',
      })
      }
      else if(this.passVarLang == 1 && this.passVarDiff == 1){
        this.$gtag.event('testFinishedFrAdv', {
        'event_category' : 'testFinished',
        'event_label' : 'User finished test in French with advanced difficulty',
      })
      }
        this.finishPage = true;
      }
      this.buttonClicked = false;
      this.toggleCorrect1 = false;
      this.toggleCorrect2 = false;
      this.toggleCorrect3 = false;
      this.toggleCorrect4 = false;
      this.disabled = false;
      this.wrong1 = false;
      this.wrong2 = false;
      this.wrong3 = false;
      this.wrong4 = false;
      this.isCorrect = 0;
    },
    restartTest(){
      this.resetForm();
      this.counter = 0;
      this.ttl= 0;
      this.wrg= 0;
      this.cor= 0;

      let first,
        second,
        temp,
        count = this.nrArr.length;
      for (let i = 0; i < this.nrArr.length; i++) {
        first = Math.floor(Math.random() * count);
        second = Math.floor(Math.random() * count);
        temp = this.nrArr[first];
        this.nrArr[first] = this.nrArr[second];
        this.nrArr[second] = temp;
      }
      this.randomNR = this.nrArr[this.counter];
    },
    pageSwitch(){
      window.location.reload();
    },
  },
  
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
p {
   font-family: "Merienda", Helvetica, Arial;
}
</style>
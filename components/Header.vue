<template>
    <div class="w-full mx-auto bg-primary text-center flex flex-row px-2">
      <div class="rounded-full w-16 h-16 bg-white text-primary py-4"> Nadjib</div>
      <div class="w-10/12 font-sans md:text-3xl text-xl font-bold py-2 italic"> Trello</div>
      <img class="w-16 h-16 ml-auto mr-5 p-2" :src="image" alt="">
    </div>
</template>
<script>
export default{
    name: 'Header',
    data(){
        return{
            image: '/logo.png',
        }
    }
}
</script>
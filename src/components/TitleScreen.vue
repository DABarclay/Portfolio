<template>
<div id="title-screen" class="block-one">
    <NavBar></NavBar>
    <div class="intro-to-me">
        <div class="title">Hello, I am Daniel</div>
        <div class="paragraph">
            A hardworking and motivated to learn junior web developer.
        </div>
    </div>
</div>  
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'TitleScreen',
  components: {
    NavBar,
  },
}
</script>
<style scoped>
.block-one{
    min-height: 100vh;

}
.intro-to-me{
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    flex-wrap:wrap;
    align-items: center;
}

.title{
    text-align: left;
    width: 60%;
    margin: 20px;
    font-size: 60px;
}
.paragraph{
    text-align: left;
    max-width: 60%;
    font-size: 40px;
    padding-bottom: 8vh;
}

@media screen and (max-width: 604px){
    .paragraph {
        font-size: 32px;
    }
}

@media screen and (max-width: 452px){
    .title{
        width: 80%;
        font-size: 35px;
    }
    .paragraph {
        max-width: 80%;
        font-size: 28px;
    }
}
</style>
<template>
  <div class="app-container">
    <div class="background"></div>
    <TitleScreen></TitleScreen>
    <div class="linear-gradient">
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactBlock></ContactBlock>
      <BackToTop></BackToTop> 
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import TitleScreen from './components/TitleScreen.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/ProjectS.vue'
import ContactBlock from './components/ContactBlock.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTopButton.vue'

export default {
  name: 'App',
  components: {
    TitleScreen,
    AboutMe,
    Projects,
    ContactBlock,
    Footer,
    BackToTop,

  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'League Spartan', sans-serif;
  font-size: 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(223, 217, 231);
  overflow-x: hidden;
  overscroll-behavior: none;
  height: 100%;
  overflow: hidden;
}
body{
  margin: 0px;
}
.app-container{
  width: 100%;
  
}
.nav-about-container{
  min-height: 100vh;
}
.background{
  z-index: -2;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url('assets/background.png');
  background-color:black;
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  transform: translate3d(0,0,0);
  overflow: hidden;
}
.linear-gradient{
  background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 1));
}
</style>

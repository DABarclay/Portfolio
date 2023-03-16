<template>
  <div class="footer-wrapper">
    <footer class="footer">
        <div class="footer-message">
            Built with Vue.js 3 by Daniel Barclay
        </div>
        <div class="nav-links">
            <li><a class="button" @click="aboutme()">About Me</a></li>
            <li><a class="button" @click="projects()">Projects</a></li>
            <li><a class="button" @click="contact()">Contact</a></li>
        </div>
    </footer>
  </div> 
</template>
<script>
export default {
  methods: {
    aboutme(){
      document.getElementById("about-me").scrollIntoView({ top: "0px",behavior: "smooth"});
    },
    projects(){
      document.getElementById("projects").scrollIntoView({ behavior: "smooth"});
    },
    contact(){
      document.getElementById("contact-block").scrollIntoView({ behavior: "smooth"});
    }
  }
}
</script>

<style scoped>
.footer{
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    padding:0 4vw 10px 4vw;
    height: 30px;
}

.nav-links, li{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
}
li{
    list-style-type: none;
    margin: 10px 1vw 10px 4vw;  
    white-space: nowrap;
    align-items: center;
}
.footer-message{
    display: flex;
    align-items: center;
}
.button:hover{
    cursor: pointer;
}

</style>
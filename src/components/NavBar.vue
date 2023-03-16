<template>
<div class="nav">
    <div class="nav-links">
        <li><a class="button" @click="aboutme()">About Me</a></li>
        <li><a class="button" @click="projects()">Projects</a></li>
        <li><a class="button" @click="contact()">Contact</a></li>
    </div>
</div>
</template>
<script>

export default {
  name: 'NavBar',
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
.nav{
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: right;
    text-align: center;
}
.nav-links, li{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
}
li{
    list-style-type: none;
    margin: 10px 4vw 10px 4vw;  
    white-space: nowrap;
    align-items: center;
}


.button{
    display: flex;
    align-items: center;
    list-style-type: none;
    white-space: nowrap;

}

.button:hover{
    cursor: pointer;
    color: white;
    
}

@media screen and (max-width: 400px){
    .nav-links {
        font-size: 6.2vw;
    }
}
</style>
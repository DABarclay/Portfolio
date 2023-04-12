<template>
    <div id="projects" class="projects-wrapper">
        <div class="title">Projects</div>
        <div class="underline"></div>
        <div class="projects">

            <div class="project-left">
                <div class="project-img">
                    <img class="screenshots" src="@/assets/mesp-screenshot.png"/>
                </div>
                <div class="project-info">
                    
                    <div class="project-title">Medusa Easy Staking Protocol</div>
                    <Transition name="fade">
                    <div class="project-description animate">
                        As part of my work with Medusa Protocol I have implemented multiple features for our crypto staking service. A few of these include the multichain feature, APR calculations, pool closed warnings and several bug fixes. More info on some these can be found on the GitHub link.
                    </div> 
                    </Transition>
                    <div class="link-wrapper">
                        <a href="https://medusaprotocol.com/mesp/staking-list/bsc/" @click="medmain()"><button class="button" >Website</button></a>
                        <a href="https://gitfront.io/r/user-2278559/XZDhw9bXtMpt/MESP-PORTFOLIO/" @click="gitmed()"><button class="button">GitHub</button></a>
                    </div>
                </div>

            </div>

            <div class="project-right">
                <div class="project-info">
                    <div class="project-title">React Single Page Application</div>
                    <div class="project-description animate">
                            This is my first website and it was built using React. I was given the design and desired interactive features and then tasked with coding it from scratch. This project acted as my introduction to Web Development and gave me a deeper insight on how to use HTML and CSS as well as a practical introduction to using Javascript,  Node.js and NPM. 
                    </div>
                    <div class="link-wrapper">
                        <a href="https://dabarclay.github.io/stakingservice/" @click="spamain()"><button class="button">Website</button></a>
                        <a href="https://github.com/DABarclay/stakingservice" @click="gitspa()"><button class="button">GitHub</button></a>
                    </div>
                </div>
                <div class="project-img">
                    <img class="screenshots" src="@/assets/MESP-static-website.png"/>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'Projects',

  mounted: function(){

    const animations = document.querySelectorAll('.animate');

    const options = {
        root: null,
        threshold: 0.7,
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting){
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    animations.forEach(animations =>
        observer.observe(animations)
    )
  },



  methods: {
    gitmed(){
      axios.post(`${process.env.VUE_APP_MY_API_URL}/gitmed`
        )
    },
    medmain(){
      axios.post(`${process.env.VUE_APP_MY_API_URL}/medmain`
      )
    },
    gitspa(){
      axios.post(`${process.env.VUE_APP_MY_API_URL}/gitspa`
      )
    },
    spamain(){
      axios.post(`${process.env.VUE_APP_MY_API_URL}/spamain`
      )
    }
  }
}   




</script>
<style scoped>
.projects-wrapper{
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap ;
    align-content: center;
    flex-direction: column;
    align-items: center;
}

.projects{
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.title{
    font-size: 50px;
    margin: 30px;
    font-weight: 600;
}
.underline{
    height: 1px;
    border-top: 3px solid rgb(206, 157, 35);
    max-width: 400px;
    width: 80vw;
    padding-bottom: 20px;
}
.screenshots{
    width: calc(100% - 6px);
    height: auto;
    border: solid 4px white;    
    border-radius: 20px;
}
.project-left, .project-right{
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
}
.project-info, .project-img{
    width: 50%;
    margin: 10px;
}
.project-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-title{
    font-size: 22px;
    margin: 12px;
    font-weight: 500;
}
.project-feature-title{
    margin: 10px;
    font-weight: 400;
    font-size: 22px;
}

.project-description{
    word-spacing: 3px;
    line-height: 1.6;
    font-size: 20px;
    transition: 300ms;
}
.animate{
    opacity: 0;
    transition:opacity 0.9s ease-in;

}

.animate.show{
    opacity: 1;
}
.button{
    font-size: 17px;
    color: white;
    background: black;
    border-radius: 8px;
    border: solid 2px white;
    width: 40%;
    height: 40px;
    margin: 15px;
    cursor: pointer;
}
.button:hover{
    background-color: white;
    color: black;
}

.fade-enter-active{
    opacity: 1;
    transition: opacity 0.5s ease;
}


@media screen and (max-width: 1052px){
    .project-left{
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
    }
    .project-right{
        flex-direction: column-reverse;
        align-content: center;
        flex-wrap: wrap;
    }
    .project-img, .project-info{
        width: 80%;
    }
    .title{
        margin: 30px;
    }

}
@media screen and (max-width: 768px){
    .project-img, .project-info{
        width: 100%;
    }
    .title{
        margin: 20px;
    }
}

</style>
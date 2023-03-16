<template>
    <div id="about-me" class="about-me">
        <div class="title">About Me</div>
        <div class="underline"></div>
        <div class="content">
            <div class="about-me-info">
                <div class="info"> I am a front-end web developer working for Medusa Protocol for which I'm responsible for maintaining and improving our staking service as well as developing any custom webpages for our other services as required.
                <br><br>
                                    I’ve always enjoyed solving problems and building things, which is why I previously worked in the role of Research and Design CAD Engineer. But I have since found I enjoy solving problems more with code.
                </div>
            </div>  
            <div class="skills-container">
                <div class="content-title">My skills and experience</div>
                <div class="skills-wrapper">
                    <div class="skills">HTML</div>
                    <div class="skills">CSS</div>
                    <div class="skills">JavaScript</div>
                    <div class="skills">Vue.js</div>
                    <div class="skills">Nuxt</div>
                    <div class="skills">Git</div>
                    <div class="skills">GitHub</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name: 'AboutMe',
}

</script>
<style scoped>
.about-me{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title{
    font-size: 50px;
    padding: 50px 50px 20px 50px;
}

.underline{
    height: 1px;
    border-top: 3px solid rgb(206, 157, 35);
    max-width: 400px;
    width: 80vw;
    padding-bottom: 20px;
}
.content-title{
    margin-bottom: 20px;
    text-align: center;
}
.about-me-info, .skills-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: left;
    width: 60%;
    margin: 2.5%;
    text-align: left;
}
.info{
    word-spacing: 3px;
    line-height: 1.6;
    font-size: 24px;
}
.skills-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.skills{
    color: rgb(255, 250, 250);
    margin: 10px 10px 10px 0px;
    padding: 10px;
    background-color: rgb(81, 78, 78);
    border-radius: 8px;
    text-align: center;
    font-size: 19px;
}
@media screen and (max-width: 900px){
    .content{
        flex-direction: column;
        width: 90%;
    }
    .about-me-info, .skills-container{
        width: 100%;
    }
}
</style>
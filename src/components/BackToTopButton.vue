<template>
    <div class="top-button-wrapper">
        <img class="back-to-top" src="@/assets/back-to-top.png" @click="toTop()"/>
    </div>
</template>

<script>
export default{
    methods:{
        toTop(){
        document.getElementById("title-screen").scrollIntoView({ behavior: "smooth"});
        }
    }
}
</script>

<style scoped>
.top-button-wrapper{
    position: fixed;
    bottom: 0px;
}
.back-to-top{
    display:block;
    height: 30px;
    width: 30px;
    font-size: 60px;
    margin-left: 5vw;
    margin-bottom: 40px;
    background-color: white;
    border-radius: 20px;
    color: black;
    border: solid black 2px;
}

.back-to-top:hover{
    cursor: pointer;
    background-color: rgb(206, 157, 35);;
    
}

</style>
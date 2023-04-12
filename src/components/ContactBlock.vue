<template>
    <div id="contact-block" class="contact-block">
        <div class="title">Contact</div>
        <div class="underline"></div>
        <div class="contact-form-wrapper">
            <form ref="form" @submit.prevent="validateForm" class="form" name="form">
                <label class="input-title">Name*</label>
                <input type="text" name="from_name" class="form-input">
                <label class="input-title">Email*</label>
                <input type="email" name="email_id" class="form-input">
                <label class="input-title">Message*</label>
                <textarea name="message" class="form-message"></textarea>
                <div class="button-container">
                    <button class="send">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {

  methods: {    
    validateForm(){
        var name = document.forms["form"]["from_name"].value;
        var email = document.forms["form"]["email_id"].value;
        var message = document.forms["form"]["message"].value;
        if (name == null || name == "") {
            this.toastNoNameError();
        } else if(email == null || email == ""){
            this.toastNoEmailError();
        } else if(message == null || message == ""){
            this.toastNoMessageError();
        } else {
            this.sendEmail();
        }
    },
    toastNoNameError(){
        this.$toast('Please fill in your name.',{ styles: {
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#FF0000',
        },});
    },
    toastNoEmailError(){
        this.$toast('Please add an email address.',{ styles: {
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#FF0000',
        },});
    },
    toastNoMessageError(){
        this.$toast('Please add your message.',{ styles: {
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#FF0000',
        },});
    },
    toasterror(){
        this.$toast('Failed. Something went wrong.',{ styles: {
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#FF0000',
        },});
    },
    toastsuccess(){
        this.$toast('Thank you!',{ styles: {
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#18A558',
        },});
    },
    sendEmail() {
      emailjs.sendForm('', '', this.$refs.form, '')
        .then((result) => {
            var form = document.getElementsByName('form')[0];
            this.toastsuccess();
            form.reset();
        }, (error) => {
             this.toasterror();
        });
    },
  }
}

</script>
<style scoped>
.contact-block{
    min-height: calc(100vh - 35px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
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

.contact-form-wrapper{
    max-width: 380px;
    width: 90vw;
    display: flex;
    justify-content: left;
}
.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.input-title{
    margin: 20px 0 10px 20px;
}
.form-input, .form-message{
    width: calc(100% - 7.2px);
    border-radius: 10px;
    border-bottom: solid orange 4px;
    font-size: 16px; 
    background-color: rgb(241, 235, 250);
}

.form-message{
    height: 20vh;
    resize: none;
}

.button-container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.send{
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
.send:hover{
    background-color: white;
    color: black;
}
</style>
<template>
<div class="contact-header">
    <div class="wrapper">
        <div>
            <a href="#"><i class="fa-solid fa-phone"></i>+12345678912</a>
            <div class="line"></div>
            <a href="#"><i class="fa-solid fa-envelope"></i>example@gmail.com</a>
        </div>
        <div>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <div class="line"></div>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <div class="line"></div>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <div class="line"></div>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            <div class="line"></div>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
</div>
</template>

<style scoped>
    .contact-header{
        background-color: #ffc116;
    }
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #e5e5e5;
        color: #ffffff;
    }
    .wrapper div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    a{
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
    .line{
        width: 1px;
        height: 25px;
        background-color: #ffffff;
        margin: 0 10px;
    }
    .fa-phone, .fa-envelope{
        margin-right: 10px;
    }
    a:hover{
        color: #202020;
    }

    @media screen and (max-width: 768px) {
    .wrapper {
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;
        height: auto;
    }
    .wrapper div{
        justify-content: center;
        flex-wrap: wrap; 
    }
    .line{
        background-color: #ffffff00;
    }
}
</style>
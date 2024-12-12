<script>
import surveyImage from '../assets/online-survey.png'

export default {
    data() {
        return {
           src: surveyImage
        }
    }
}
</script>

<template>
    <div class="row text-center">
        <div class="col-12 flex justify-content-center align-items-center">
            <h1>Formulario</h1>
            <img :src="src" alt="Logo" class=""/>
        </div>
    </div>
</template>

<style scoped>
.row {
    margin-top: 2rem;
}

h1 {
    color: #42b883;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

img {
    max-width: 200px;
    margin: 1rem auto;
}

hr {
    border-color: #42b883;
    opacity: 0.5;
    margin: 2rem 0;
}
</style>
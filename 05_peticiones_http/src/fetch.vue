<script>
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/2";

export default {
    data() {
        return {
            respuesta: null
        }
    },
    methods: {
        fetchForma1() {
            fetch(url1)
                .then(Response => Response.json())
                .then(data => this.respuesta = data)
        },
        async fetchForma2() {
            const res = await fetch(url2);
            const data = await res.json();
            this.respuesta = data;
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="title">Fetch API</h1>
        
        <div class="buttons-container">
            <div class="method-section">
                <h2>Método Promise</h2>
                <button class="fetch-button" @click="fetchForma1">
                    Obtener Datos
                </button>
            </div>

            <div class="method-section">
                <h2>Método Async/Await</h2>
                <button class="fetch-button" @click="fetchForma2">
                    Obtener Datos
                </button>
            </div>
        </div>

        <div v-if="respuesta" class="response-container">
            <h2>Respuesta del Servidor</h2>
            <div class="response-card">
                <pre>{{ respuesta }}</pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

.buttons-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 20px;
}

.method-section {
    text-align: center;
    flex: 1;
    min-width: 250px;
}

.method-section h2 {
    color: #34495e;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.fetch-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.fetch-button:hover {
    background-color: #2980b9;
}

.response-container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.response-container h2 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
}

.response-card {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.response-card h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    text-transform: capitalize;
}

.response-card p {
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 15px;
}

.metadata {
    display: flex;
    justify-content: space-between;
    color: #7f8c8d;
    font-size: 0.9rem;
    border-top: 1px solid #eee;
    padding-top: 10px;
}

@media (max-width: 600px) {
    .buttons-container {
        flex-direction: column;
    }
    
    .method-section {
        margin-bottom: 20px;
    }
}
</style>

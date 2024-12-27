<script>
export default {
    data() {
        return {
            cripto: 'BTC',
            moneda: 'USD'
        }
    },
    methods: {
        cotizar(cripto, moneda) {
            console.log(cripto, moneda);
        }
    }
}
</script>

<template>
    <div class="mt-8 max-w-md mx-auto">
        <form action="" class="bg-gray-50 border border-gray-100 rounded-lg p-6" @submit.prevent="cotizar(cripto, moneda)">
            <div class="space-y-6">
                <div>
                    <label class="text-gray-600 text-sm mb-2 block" for="moneda">
                        Divisa
                    </label>
                    <select 
                        name="moneda" 
                        id="moneda" 
                        class="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 transition-colors"
                        v-model="moneda"
                        >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-600 text-sm mb-2 block" for="cripto">
                        Criptomoneda
                    </label>
                    <select 
                        name="cripto" 
                        id="cripto" 
                        class="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 transition-colors"
                        v-model="cripto"
                        >
                        <option value="BTC">Bitcoin</option>
                        <option value="ETH">Ethereum</option>
                        <option value="LTC">Litecoin</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    class="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                    Cotizar
                </button>
            </div>
        </form>
    </div>
</template>
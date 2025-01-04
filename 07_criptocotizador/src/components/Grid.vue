<script>
export default {
    props: {
        cripto: {
            type: String,
            required: true
        },
        moneda: {
            type: String,
            required: true
        },
        cotizacion: {
            type: Object,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        precio: {
            type: String,
            required: true
        },
        simbolo: {
            type: String,
            required: true
        }
    },
}   
</script>

<template>
    <div class="mt-6">
        <div class="bg-white border-gray-200 rounded-lg p-6">
            <!-- info principal -->
             <div class="flex items-center space-x-4 text-center">
                <img :src="`https://www.cryptocompare.com/${img}`" alt="Imagen de la criptomoneda" class="w-16 h-16">
                <div class="flex flex-col">
                    <h3 class="text-gray-600 text-sm mb-2 block">
                        Precio de {{cripto}} en {{moneda}}
                    </h3>
                    <span class="font-bold">
                        {{precio}}
                        {{simbolo}}
                    </span>
                </div>
             </div>
             <!-- info secundaria -->
            <div class="space-y-3">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-sm text-gray-600">Mas alto 24h</p>
                        <span class="font-bold">
                            {{cotizacion.HIGH24HOUR}}
                        </span>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Mas bajo 24h</p>
                        <span class="font-bold">
                            {{cotizacion.LOW24HOUR}}
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <p>Ultima actualizacion</p>
                    <span class="font-bold">
                        {{cotizacion.LASTUPDATE}}
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>
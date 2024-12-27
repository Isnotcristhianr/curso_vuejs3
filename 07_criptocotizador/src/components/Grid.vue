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
        }
    },
    setup(props) {
        console.log(props.cripto);
        console.log(props.moneda);
    }
}   
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <slot>
        </slot>
    </div>
</template>
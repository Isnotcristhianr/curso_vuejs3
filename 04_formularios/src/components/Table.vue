<script>
export default {
  props: {
    registros: {
      type: Array,
      required: true,
      default: () => []
    }
  },
};
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Fecha</th>
        <th>Comentario</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="registro in registros" :key="registro.id">
            <td>{{ registro.nombre }}</td>
            <td>{{ registro.control }}</td>
            <td>{{ registro.fecha }}</td>
            <td>{{ registro.comentario }}</td>
        </tr>
    </tbody>
  </table>
</template>

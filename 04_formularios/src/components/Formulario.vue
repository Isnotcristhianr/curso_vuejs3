<script>
import Table from "./Table.vue";

export default {
  components: {
    Table,
  },
  data: () => ({
    nombre: "",
    control: "",
    fecha: "",
    comentario: "",
    registros: [],
  }),
  methods: {
    enviarFormulario() {
      console.log("Formulario enviado");
      this.registros.push({
        nombre: this.nombre,
        control: this.control,
        fecha: this.fecha,
        comentario: this.comentario,
      });
      console.log(this.registros);
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nombre = "";
      this.control = "";
      this.fecha = "";
      this.comentario = "";
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <hr />
      <h3 class="mb-4">Papeleria</h3>
      <form @submit.prevent="enviarFormulario" class="needs-validation">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre del Producto</label>
          <input
            v-model="nombre"
            type="text"
            name="nombre"
            id="nombre"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="control" class="form-label">Cantidad de productos</label>
          <select
            v-model="control"
            name="control"
            id="control"
            class="form-select"
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="fecha" class="form-label">Fecha de entrega</label>
          <input
            v-model="fecha"
            type="date"
            name="fecha"
            id="fecha"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="comentario" class="form-label">Comentario</label>
          <textarea
            v-model="comentario"
            name="comentario"
            id="comentario"
            class="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100 m-2">Enviar</button>
      </form>
    </div>
    <!-- Tabla -->
    <Table
        :registros="registros"
    />
  </div>
</template>

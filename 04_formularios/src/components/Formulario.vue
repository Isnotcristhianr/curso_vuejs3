<template>
  <div class="row">
    <div class="col-12">
      <hr />
      <h3 class="mb-4">Papeleria</h3>
      <form action="" @submit.prevent="" class="needs-validation">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre del Producto</label>
          <input type="text" name="nombre" id="nombre" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="control" class="form-label">Cantidad de productos</label>
          <select name="control" id="control" class="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="fecha" class="form-label">Fecha de entrega</label>
          <input type="date" name="fecha" id="fecha" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="comentario" class="form-label">Comentario</label>
          <textarea
            name="comentario"
            id="comentario"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  </div>
</template>

import { reactive } from "vue";
import type { Store } from "../interfaces/Store";

const store = reactive<Store>({
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    estado: true,
    crecer: () => {
        store.edad++;
    },
    decrecer: () => {
        store.edad--;
    },
    state: () => {
        store.estado = !store.estado;
    }
});

export default store;
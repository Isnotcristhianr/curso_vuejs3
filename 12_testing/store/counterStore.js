import { reactive } from "vue";

export const counterStore = reactive({
    count: 1,
    multiply() {
        this.count *= 2
    },
    divide() {
        this.count /= 2
    },
    reset() {
        this.count = 0
    }
})
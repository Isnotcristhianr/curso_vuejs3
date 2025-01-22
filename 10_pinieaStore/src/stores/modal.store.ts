import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const modalValue = reactive({
        isOpen: false,
    })

    const openModal = () => {
        modalValue.isOpen = true
    }

    const closeModal = () => {
        modalValue.isOpen = false
    }

    return {
        modalValue,
        openModal,
        closeModal
    }
})
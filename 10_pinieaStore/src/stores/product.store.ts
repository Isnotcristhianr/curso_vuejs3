import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

//1. asiganr el tipado
interface Product {
    id: number;
    img: string;
    name: string;
    price: number;
}

interface SelectedProduct extends Product {
    quantity: number;
}

interface ProductStore {
    available: Product[];
    selected: SelectedProduct[];
    quantity: () => number;
}

export const useProductStore = defineStore('product', () => {
    const products: ProductStore = reactive({
        available: [
            {
                id: 1,
                img: 'https://demo2.plataforma.store/banners/app_promotions_9_resized_promobanner-1.jpg',
                name: 'Jabon',
                price: 10
            },
            {
                id: 2,
                img: 'https://demo2.plataforma.store/media/170_img_handtowels-3.jpg',
                name: 'Toalla',
                price: 12
            },
            {
                id: 3,
                img: 'https://www.inboundcycle.com/hs-fs/hubfs/anuncios%20publicitarios%20informativos.jpg?width=2560&height=1439&name=anuncios%20publicitarios%20informativos.jpg',
                name: 'Colgate',
                price: 12
            },
            {
                id: 4,
                img: 'https://www.arlecoproducciones.com/wp-content/uploads/2023/07/publicidad-de-productos-de-limpieza-e1690474688933.webp',
                name: 'Limpiador',
                price: 15
            },
            {
                id: 5,
                img: 'https://previews.123rf.com/images/dasha122007/dasha1220071712/dasha122007171200028/92043133-dise%C3%B1o-de-plantilla-de-anuncios-de-productos-de-belleza-realista.jpg',
                name: 'Shampoo',
                price: 15
            },
            {
                id: 6,
                img: 'https://www.arlecoproducciones.com/wp-content/uploads/2023/07/publicidad-de-productos-de-limpieza-e1690474688933.webp',
                name: 'Desodorante',
                price: 8
            }
        ],
        selected: [],
        quantity: () => products.selected.length > 0
            ? products.selected.map((products) => products.quantity).reduce((a, b) => a + b, 0)
            : 0
    })

    //agregar un producto
    const addProduct = (product: Product) => {
      const productExist = products.selected.find(
        (selectedProduct) => selectedProduct.name === product.name
      )

      if (productExist) {
        productExist.quantity++
        return
      } else {
        products.selected.push({ ...product, quantity: 1 })
      }
    }

    //eliminar un producto
    const removeProduct = (product: Product) => {
        const productExist = products.selected.find(
            (selectedProduct) => selectedProduct.name === product.name
        )
    }

    return {
        products,
        addProduct,
        removeProduct
    }
})
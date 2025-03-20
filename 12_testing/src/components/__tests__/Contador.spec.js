import { mount } from '@vue/test-utils'
import Contador from '../Contador.vue'
import { describe, it } from 'vitest'
import { expect } from 'vitest'

describe('Contador Pruebas', () => {
    it('Debe renderizar el componente correctamente', () => {
        const wrapper = mount(Contador)
        expect(wrapper.html()).toMatchSnapshot()
    })
    
    it('Debe incrementar el contador', async () => {
        const wrapper = mount(Contador)
        await wrapper.find('button#increment').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: 1')
    })

    it('Debe decrementar el contador', async () => {
        const wrapper = mount(Contador)
        await wrapper.find('button#decrement').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: -1')
    })

    it('Debe reiniciar el contador', async () => {
        const wrapper = mount(Contador)
        await wrapper.find('button#reset').trigger('click')
        await wrapper.find('button#increment').trigger('click')
        await wrapper.find('button#increment').trigger('click')
        await wrapper.find('button#increment').trigger('click')
        await wrapper.find('button#increment').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: 4')
    })
    
    
})
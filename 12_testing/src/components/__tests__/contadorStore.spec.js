import { mount } from '@vue/test-utils'
import ContadorStore from '../contadorStore.vue'
import { describe, it } from 'vitest'
import { expect } from 'vitest'

describe('ContadorStore', () => {
    it('Debe renderizar el componente correctamente', () => {
        const wrapper = mount(ContadorStore)
        expect(wrapper.html()).toContain('Contador: 1')
    })

    it('Debe multiplicar el contador', async () => {
        const wrapper = mount(ContadorStore)
        await wrapper.find('button#multiply').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: 2')
    })

    it('Debe dividir el contador', async () => {
        const wrapper = mount(ContadorStore)
        await wrapper.find('button#divide').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: 1')
    })

    it('Debe reiniciar el contador', async () => {
        const wrapper = mount(ContadorStore)
        await wrapper.find('button#reset').trigger('click')
        await wrapper.find('button#reset').trigger('click')
        expect(wrapper.find('h2').text()).toBe('Contador: 0')
    })  
    
})

    
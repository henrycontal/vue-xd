import Indecision from '@/components/IndecisionPage.vue';
import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

describe('Indecision Component', () => {
    /**  
     * @type {import('@vue/test-utils').VueWrapper>} 
     */
    let wrapper = null;

    /**
     * @type {import('vitest').SpyInstance}
     */
    let consoleSpy = null;

    // eslint-disable-next-line no-undef
    global.fetch = vitest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image:  'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        consoleSpy = vitest.spyOn(console, 'log');
    })

    it('Should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should not trigger the api call', async () => {
        const getAnswerSpy = vitest.spyOn(wrapper.vm, 'getAnswer');
        const $input = wrapper.find('input');
        await $input.setValue('Hello World');

        expect(consoleSpy).toHaveBeenCalled();
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    });

    it('Should trigger the getAnswer', async () => {
        const getAnswerSpy = vitest.spyOn(wrapper.vm, 'getAnswer');
        const $input = wrapper.find('input');
        await $input.setValue('?');

        expect(getAnswerSpy).toHaveBeenCalled();
    });

    it('Should call the getAnswer', async () => {
        await wrapper.vm.getAnswer();
        const $img = wrapper.find('img');

        expect($img.exists()).toBeTruthy();
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('yes');
    });

    it('Should get an error in getAnswer', async () => {

        fetch.mockImplementationOnce(() => Promise.reject(new Error()));

        await wrapper.vm.getAnswer();
        const $img = wrapper.find('img');

        expect($img.exists()).toBeFalsy();
        expect(wrapper.vm.image).toBeNull();
        expect(wrapper.vm.answer).toBe('Ask later');
    });
});
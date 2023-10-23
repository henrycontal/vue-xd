import Counter from '@/components/CounterPage.vue';
import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Counter Component', () => {
    /**
     * @type {import('@vue/test-utils').VueWrapper}
     */
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it('Should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('Should h2 tag have "Counter" as default value', () => {
        const $h2 = wrapper.find('h2');

        expect($h2.exists()).toBeTruthy();
        expect($h2.text()).toBe('Counter');
    });

    it('Should p tag have "1" as default value', () => {
        const $p = wrapper.find('p');

        expect($p.exists()).toBeTruthy();
        expect($p.text()).toContain('1');
    });

    it('Should increase value by 1', async () => {
        // eslint-disable-next-line no-unused-vars
        const [_, $increaseBtn] = wrapper.findAll('button');
        await $increaseBtn.trigger('click');
        const $p = wrapper.find('p');

        expect($p.exists()).toBeTruthy();
        expect($p.text()).toContain('2');
    });

    it('Should decrease value by 2', async () => {
        const $decreaseBtn = wrapper.find('button');
        await $decreaseBtn.trigger('click');
        await $decreaseBtn.trigger('click');
        const $p = wrapper.find('p');

        expect($p.exists()).toBeTruthy();
        expect($p.text()).toContain('-1');
    });

    it('Should get the start default value', () => {
        const status = wrapper.props('start');

        expect(typeof status).toBe('number');
        expect(status).toStrictEqual(1);
    });

    it('Should show the tittle prop', () => {
        const title = 'Entrances';
        const wrapper = shallowMount(Counter, { props: { title } });
        const $h2 = wrapper.find('h2');

        expect($h2.text()).toBe(title);
    });
});

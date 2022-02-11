import Vuex from 'Vuex';
import Vue from 'vue';
import store from '@/store/data';
import Index from '@/pages/index.vue';
import layout from '@/layouts/default.vue';
import { descriptions } from '@/utils/stories';
Vue.use(Vuex);
export default {
  title: 'paginas/Index',
  component: { Index },
  parameters: {
    docs: {
      source: {
        code: '< >',
      },
      description: {
        component: descriptions.index,
      },
    },
  },
};
const layoutDecorator = (story) => ({
  components: { story, layout },
  template: `
    <layout><story /></layout>
  `,
});

const Template: any = (_, { argTypes }) => ({
  components: { Index },
  props: Object.keys(argTypes),
  decorators: [layoutDecorator],
  store: new Vuex.Store({
    modules: { data: store as any },
  }),
  template: '<Index v-bind="$props" />',
});

export const Base = Template.bind({});

import Index from '@/layouts/error.vue';
import { descriptions } from '@/utils/stories';
export default {
  title: 'template/Erro',
  component: { Index },
  parameters: {
    docs: {
      source: {
        code: '< >',
      },
      description: {
        component: descriptions.error,
      },
    },
  },
};

const Template: any = (_, { argTypes }) => ({
  components: { Index },
  props: Object.keys(argTypes),
  template: '<Index v-bind="$props" />',
});

export const Base = Template.bind({});
Base.decorators = [
  () => ({
    template: `<div style="height: 90vh;"><story /></div>`,
  }),
];
Base.args = {
  error: {
    statusCode: 400,
  },
};
export const Eror404 = Template.bind({});
Eror404.decorators = [
  () => ({
    template: `<div style="height: 90vh;"><story /></div>`,
  }),
];
Eror404.args = {
  error: {
    statusCode: 404,
  },
};

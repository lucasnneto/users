import Delete from './delete.vue';

export default {
  title: 'Icon Delete',
  component: Delete,
  decorators: [
    () => ({
      template: `<div style="height: 50px; display: flex; justify-content:center"><story /></div>`,
    }),
  ],
  argTypes: {
    color: {
      description: 'Seleção de cor do icone',
      control: { type: 'color' },
    },
  },
  parameters: {
    docs: {
      // source: {
      //   type: 'dynamic',
      // },
      description: {
        component: `Componente de icone de lixeira feito apartir de **svg**`, // MARKDOWN
      },
    },
  },
};

const Template: any = (_, { argTypes }) => ({
  components: { Delete },
  props: Object.keys(argTypes),
  template: '<Delete v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = { color: '#fff' };
Base.parameters = {
  docs: {
    source: {
      code: `
      <delete color="${Base.args.color}" />
      `,
    },
  },
};

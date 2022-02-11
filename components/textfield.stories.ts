import Textfield from './textfield.vue';
export default {
  title: 'componentes/Textfield',
  component: Textfield,
  parameters: {
    docs: {
      description: {
        component: `Input de texto padrão com edição da label`, // MARKDOWN
      },
    },
  },
  argTypes: {
    input: {
      action: 'input',
      description: 'Evento de retorno de string digitada no input',
    },
    'v-model': { description: 'Este componente permite uso do v-model' },
    value: { description: 'Valor inicial do campo input' },
    label: {
      description:
        'Valor explicativo para input, utilizado tambem como valor vazio',
    },
  },
};

const Template = (_, { argTypes }) => ({
  components: { Textfield },
  props: Object.keys(argTypes),
  template: '<Textfield v-bind="$props" @input="input" />',
});

export const Base = Template.bind({}) as any;
Base.args = { value: '', label: 'label' };
Base.parameters = {
  docs: {
    source: {
      code: `
      <textfield label="text" v-model="var" />
      `,
    },
  },
};

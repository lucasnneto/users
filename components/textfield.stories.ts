import Textfield from './textfield.vue';
export default {
  title: 'Textfield',
  component: Textfield,
  argTypes: { onInput: { action: 'onInput' } },
};

const Template = (_, { argTypes }) => ({
  components: { Textfield },
  props: Object.keys(argTypes),
  template: '<Textfield v-bind="$props" @input="onInput" />',
});
export const Base = Template.bind({}) as any;
Base.args = { value: '', label: 'label' };

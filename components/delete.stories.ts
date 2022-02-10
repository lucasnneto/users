import Delete from './delete.vue';

export default {
  title: 'Delete',
  component: Delete,
  argTypes: {
    color: { control: { type: 'color' } },
  },
};

const Template: any = (_, { argTypes }) => ({
  components: { Delete },
  props: Object.keys(argTypes),
  template: '<Delete v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = { color: '#fff' };

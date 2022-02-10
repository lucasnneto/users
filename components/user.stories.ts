import User from './user.vue';

export default {
  title: 'User',
  component: User,
};

const Template = (_, { argTypes }) => ({
  components: { User },
  props: Object.keys(argTypes),
  template: '<User v-bind="$props" />',
});
const user = {
  id: '1',
  name: 'Nome',
  username: 'user',
  phone: '1111',
};

export const Base = Template.bind({}) as any;
Base.args = { item: user, permanent: false };

export const Permanent = Template.bind({}) as any;
Permanent.args = { ...Base.args, permanent: true };

// export const Tertiary = Template.bind({}) as any;
// Tertiary.args = { color: 'blue' };

import User from './user.vue';

export default {
  title: 'componentes/User',
  component: User,
  parameters: {
    docs: {
      description: {
        component: `Card utilizado na listagem de usuários`, // MARKDOWN
      },
    },
  },
  argTypes: {
    item: {
      description: `Objeto para complementar card
      \`\`\`
      {
        "id":string,
        "name":string,
        "username":string,
        "phone":string
      }
      \`\`\`  `,
    },
    notBeDeleted: {
      description: `Permite que um card seja permanente`,
    },
  },
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
Base.args = { item: user, notBeDeleted: false };
Base.parameters = {
  docs: {
    source: {
      code: `
      <User :item="{'id':'1','name':'Nome','username':'user','phone':'1111'}" />
      `,
    },
  },
};

export const NotBeDeleted = Template.bind({}) as any;
NotBeDeleted.args = { ...Base.args, notBeDeleted: true };
NotBeDeleted.parameters = {
  docs: {
    source: {
      code: `
      <User
      :item="{'id':'1','name':'Nome','username':'user','phone':'1111'}"
      notBeDeleted
    />
      `,
    },
  },
};

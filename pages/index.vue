<template>
  <v-flex>
    <h1 class="mb-4">Usuários</h1>
    <textfield v-model="search" label="Pesquisar"></textfield>
    <v-row>
      <v-col v-for="u in listFilter" :key="u.id" cols="12" md="6">
        <user :item="u" />
      </v-col>
    </v-row>
  </v-flex>
</template>
<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import { GetterBase, User } from '@/store/data';
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('data');
export default Vue.extend({
  data() {
    return {
      search: '',
    };
  },

  computed: {
    // ...(mapState(['users', 'status']) as StadeBase),
    ...(mapState(['users', 'status']) as {
      users: () => User[];
      status: () => string;
    }),

    ...(mapGetters(['loading', 'error']) as GetterBase),
    listFilter(): User[] {
      if (!this.search) return this.users;
      return this.users.filter(
        (el) =>
          el.name.toLowerCase().includes(this.search.toLowerCase()) ||
          el.username.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.GET_USERS();
  },
  methods: {
    ...mapActions(['GET_USERS']),
  },
});
</script>

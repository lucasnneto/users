<template>
  <v-card class="pa-5">
    <div class="d-flex justify-space-between mb-4">
      <div>
        <span class="body-2"> Nome </span>
        <h3>
          {{ item.name }}
        </h3>
      </div>
      <div>
        <span class="body-2"> Usuário </span>
        <h3>
          {{ item.username }}
        </h3>
      </div>
    </div>
    <div class="d-flex justify-space-between align-center">
      <div>
        <span class="body-2"> Telefone </span>
        <h3>
          {{ item.phone }}
        </h3>
      </div>
      <v-btn v-if="!permanent" icon>
        <delete />
      </v-btn>
    </div>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue';
import { User } from '@/store/data';
export default Vue.extend({
  props: {
    item: Object as PropType<User>,
    permanent: Boolean,
  },
});
</script>

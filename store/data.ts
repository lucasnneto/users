import { http } from '@/service/index';

export interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
}
export interface StadeBase {
  users: User[] | (() => User[]);
  status: string | (() => string);
}

const getDefaultState = (): StadeBase => {
  return {
    users: [],
    status: '',
  };
};

const state = getDefaultState();

// export type GetterBase = {
//   loading: ((state: StadeBase) => boolean) | (() => boolean);
//   error: ((state: StadeBase) => boolean) | (() => boolean);
// };
export interface GetterBase<IState = void> {
  loading: (state: IState) => boolean;
  error: (state: IState) => boolean;
}

const getters: GetterBase<StadeBase> = {
  loading: (state: StadeBase) => state.status === 'loading',
  error: (state: StadeBase) => state.status === 'error',
};

const mutations = {
  CHANGE(state: StadeBase, payload: StadeBase) {
    Object.assign(state, payload);
  },
};

const actions = {
  CHANGE({ commit }: any, payload: StadeBase) {
    commit('CHANGE', payload);
  },
  async GET_USERS({ commit }: any) {
    try {
      commit('CHANGE', { status: 'loading' });
      const { data } = await http.get('/users');
      commit('CHANGE', {
        status: '',
        users: data.map((e: any) => ({
          id: e.id,
          name: e.name,
          username: e.username,
          phone: e.phone,
        })),
      });
    } catch (e) {
      commit('CHANGE', { status: 'error' });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

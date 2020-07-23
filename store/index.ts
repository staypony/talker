/* eslint-disable no-shadow */
import { MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex';
import Cookies from 'universal-cookie';
import { Context } from '@nuxt/types';
import { RootState } from '~/types/state';

export const state = (): RootState => ({
  logged: false,
  myId: 0,
  now: 0,
  emojisPanelActive: false,
  attachPanelActive: false,
});

export const getters: GetterTree<RootState, RootState> = {};

export const mutations: MutationTree<RootState> = {
  login: (state) => (state.logged = true),
  logout: (state) => (state.logged = false),
  setMyId: (state, myId: number) => (state.myId = myId),
  setNow: (state, now) => (state.now = now),
  setEmojisPanelActive: (state, status) => (state.emojisPanelActive = status),
  toggleEmojisPanel: (state) => (state.emojisPanelActive = !state.emojisPanelActive),
  setAttachPanelActive: (state, status) => (state.attachPanelActive = status),
  toggleAttachPanel: (state) => (state.attachPanelActive = !state.attachPanelActive),
};

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: Context): void;
  nuxtClientInit(actionContext: ActionContext<S, R>, appContext: Context): void;
}

export const actions: Actions<RootState, RootState> = {
  nuxtServerInit({ commit }, context) {
    const cookies = new Cookies(context.req.headers.cookie);
    const id = cookies.get('id');
    const token = cookies.get('apollo-token');
    if (id) commit('setMyId', parseInt(id, 10));
    if (token) commit('login');
  },

  nuxtClientInit({ dispatch }): void {
    dispatch('setNow');
  },

  setNow({ commit }) {
    commit('setNow', Date.now());
    setInterval(() => {
      commit('setNow', Date.now());
    }, 100);
  },
};

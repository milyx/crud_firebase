import Vue from "vue";
import Vuex from "vuex";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/helpers/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.userData.push({ ...payload.data(), id: payload.id });
    },
    DELETE_USER(state, payload) {
      state.userData = state.userData.filter((item) => item.id !== payload.id);
    },
    ADD_USER(state, payload) {
      state.userData.push(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        commit("SET_DATA", doc);
      });
    },
    async deleteItem({ commit }, payload) {
      await deleteDoc(doc(db, "users", payload.id));
      console.log(payload);
      commit("DELETE_USER", payload);
    },
    async addItem({ commit }, payload) {
      try {
        const docRef = await addDoc(collection(db, "users"), payload);
        commit("ADD_USER", { ...payload, id: docRef.id });
      } catch (error) {
        console.log(error);
      }
    },
    async setItem({ commit }, payload) {
      await setDoc(doc(db, "users", payload.id), {
        age: payload.age,
        name: payload.name,
        email: payload.email,
      });
      commit("DELETE_USER", payload);
      commit("ADD_USER", payload);
    },
  },

  modules: {},
});

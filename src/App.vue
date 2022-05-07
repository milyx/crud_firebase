<template>
  <div id="app">
    <b-container>
      <b-row class="py-5">
        <b-col cols="12" class="content">
          <p class="display-4 text-center">Crear nuevo usuario</p>
          <p>Ingrese Nombre:</p>
          <b-form-input
            type="text"
            placeholder="Nombre"
            required
            label="Usuario:"
            v-model="newUser.name"
          ></b-form-input>
          <div class="row mt-3">
            <div class="col-8">
              <p>Ingrese email:</p>
              <b-form-input
                type="email"
                class="email"
                placeholder="Email"
                required
                label="Correo:"
                v-model="newUser.email"
              ></b-form-input>
            </div>
            <div class="col-4">
              <p>Ingrese edad</p>
              <b-form-input
                type="number"
                placeholder="Ingrese su edad"
                required
                label="Edad:"
                v-model="newUser.age"
              ></b-form-input>
            </div>
          </div>
          <div class="text-end py-3">
            <b-button variant="danger" class="ms-3" @click="resetInput"
              >Limpiar</b-button
            >
            <b-button variant="success" class="ms-3" @click="addUser"
              >Agregar</b-button
            >
          </div>
        </b-col>
        <b-col cols="12" class="py-5">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in userData" :key="i">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <b-button
                      variant="danger"
                      class="ms-3"
                      @click="deleteItem(item)"
                      >Eliminar</b-button
                    >
                    <b-button
                      variant="success"
                      class="ms-3"
                      v-b-modal="'modal'"
                      @click="edit(item)"
                      >Editar</b-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <EditModal :user="currentUSer" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import EditModal from "@/components/EditModal.vue";
export default {
  name: "App",
  components: {
    EditModal,
  },
  data() {
    return {
      newUser: {
        name: "",
        age: "",
        email: "",
      },
      currentUser: {},
    };
  },
  computed: {
    ...mapState(["userData"]),
  },
  methods: {
    ...mapActions(["getData", "deleteItem", "addItem", "setItem"]),
    edit(item) {
      this.currentUser = item;
      console.log(this.currentUser);
    },
    addUser() {
      this.addItem(this.newUser);
      this.newUser = {
        name: "",
        age: "",
        email: "",
      };
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
.content {
  width: 30rem;
  padding: 20px;
  background: rgb(239, 237, 237);
  border-radius: 15px;
}
.email {
  width: 90px;
  color: red;
}
</style>

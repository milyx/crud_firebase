<template>
  <div>
    <b-modal id="modal" title="BootstrapVue">
      <b-col cols="12">
        <p>Ingrese usuario nuevo</p>
        <b-form-input
          type="text"
          placeholder="Ingrese nombre"
          required
          label="Usuario:"
          v-model="name"
        ></b-form-input>
        <div class="row mt-3">
          <div class="col-8">
            <p>Ingrese email</p>
            <b-form-input
              type="email"
              placeholder="Ingrese email"
              required
              label="Correo:"
            ></b-form-input>
          </div>
          <div class="col-4">
            <p>Ingrese edad</p>
            <b-form-input
              type="number"
              placeholder="Ingrese edad"
              required
              label="Edad:"
              :value="user"
            ></b-form-input>
          </div>
        </div>
      </b-col>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    name: {
      get() {
        return this.user.name;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h1>{{ cardTitle }}</h1>
    <v-text-field
      label="Escreva o texto que você deseja no título."
      outlined
      filled
      v-model="textToWrite"
    ></v-text-field>
    <v-btn color="secondary" @click="changeText">Enviar texto</v-btn>
    <qt-table-list listAction="users/search" :fields="fields"></qt-table-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import registerVuexModules from '@/store'

export default {
  computed: {
    ...mapState('exampleModule', ['cardTitle'])
  },
  data() {
    return {
      textToWrite: '',
      fields: {
        name: 'Nome',
        cpf: 'CPF',
        user_profile_id: 'Perfil',
        registered: 'Status',
        action: 'Ações'
      }
    }
  },
  methods: {
    changeText() {
      this.$store.dispatch('exampleModule/changeText', this.textToWrite)
    }
  },
  beforeCreate() {
    registerVuexModules.call(this)
  }
}
</script>

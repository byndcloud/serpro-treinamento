<template>
  <div>
    <h1>Tela de Preenchimento de Dados</h1>
    <v-text-field outlined filled></v-text-field>
    <qt-table-list listAction="users/search" :fields="fields"></qt-table-list>
    <v-btn color="secondary">Enviar formulário</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        name: 'Nome',
        cpf: 'CPF',
        user_profile_id: 'Perfil',
        registered: 'Status',
        action: 'Ações'
      }
    }
  }
}
</script>

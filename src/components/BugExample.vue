<template>
  <v-data-table
    id="permission-table"
    v-model="selected"
    :headers="headers"
    :items="value"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:top>
      <div class="hello">I am a header</div>
    </template>
    <template v-slot:header.admin="{ header }">
      <span> {{header.text}}</span>
    </template>


    <template v-slot:item.admin="{ item }">
      <v-checkbox class="cb-center cb-admin" v-model="item.admin"></v-checkbox>
    </template>
  </v-data-table>
</template>

<script>

export default {
  name: 'PermissionTable',
  components: {},
  props: {
    value: Array
  },
  data: () => ({
    selected: [],
    headers: [
      { text: 'Name', value: 'displayName', sortable: true },
      { text: 'Department', value: 'department', sortable: true },
      { text: 'Admin', 
        value: 'admin', 
        sortable: true, 
        description: '...'
      }
    ],
  }),
  methods: {
  }
};

</script>

<style lang="scss" scoped>
</style>
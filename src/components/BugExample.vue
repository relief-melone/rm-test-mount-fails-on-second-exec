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

    <template v-slot:header.responsible="{ header }">
      <span> {{header.text}}</span>
    </template>

    <template v-slot:header.creator="{ header }">
      <span> {{header.text}}</span>
    </template>


    <template v-slot:item.admin="{ item }">
      <v-checkbox class="cb-center cb-admin" v-model="item.admin" @change="updateUserPermission(item)"></v-checkbox>
    </template>

    <template v-slot:item.responsible="{ item }">
      <v-checkbox class="cb-center cb-responsible" v-model="item.responsible" @change="changeResponsible($event, item)"></v-checkbox>
    </template>
    <template v-slot:item.creator="{ item }">
      <v-checkbox class="cb-center cb-creator" v-model="item.creator" :disabled="item.responsible"  @change="updateUserPermission(item)"></v-checkbox>
    </template>


    <template v-slot:item.delete="{ item }">
      <v-btn small @click="showDeleteConfirmation(item)">Delete</v-btn>              
     
    </template>
  </v-data-table>
</template>

<script>
import updateUserPermission from '../services/service.updateUserPermission';
import deleteUserPermission from '../services/service.deleteUserPermissions';

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
      },
      {
        text: 'Responsible',
        value: 'responsible',
        sortable: true,
        description: '...'
      },
      { text: 'Creator', 
        value: 'creator', 
        sortable: true,
        description: '...'
      },
      { text: 'Delete', value: 'delete' }
    ],
  }),
  methods: {
    showDeleteConfirmation(User) {
      User.dialog = true;
    },
    async deleteUser(User) {
      await deleteUserPermission(User._id);
      let newVal = this.value.filter(
        u => u._id !== User._id
      );
      this.$emit('input', newVal);
    },
    async updateUserPermission(User) {
      let newUser = await updateUserPermission(User);
      Object.assign(User, newUser);
    },
    async changeResponsible(event, user){
      if(event) user.creator = true;
      await updateUserPermission(user);
    }    
  }
};

</script>

<style lang="scss" scoped>
#permission-table {
  width: 100%;
}

.cb-center {
  // display: flex;
  // justify-content: space-around;
  margin-left: auto;
}

.icon-clickable {
  cursor: pointer;
  color: #222;

  :hover {
    color: orange;
    transition: color 200ms ease-out;
  }
}
</style>
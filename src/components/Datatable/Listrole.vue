<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <router-link :to="{ name: 'Createrole' }" class="btn btn-md btn-success">TAMBAH ROLE</router-link>
        <CDataTable
          :items="roleData"
          :fields="fields"
          table-filter
          items-per-page-select
          :items-per-page="5"
          hover
          sorter
          pagination
        >
        <template #Action={item}>
            <td class="py-2">
                <router-link :to="{name: 'Updaterole', params: { id: item.id }}">
                <CButton
                   color="primary"
                   variant="outline"
                   square
                   size="sm"
                   class="mr-2"
                 >
                    Edit
                </CButton>
                </router-link>
                <CButton
                   color="primary"
                   variant="outline"
                   square
                   size="sm"
                   @click="UserDelete(item.id,index)"
                 >
                 Delete
                </CButton>
            </td>
        </template>
        </CDataTable>
    </div>
</template>


<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
const fields = [
  { key: 'id' },
  { key: 'role_name'},
  { key: 'role_desc' },
  { key: 'Action'}

]

    export default {
        data() {
            return {
                roleData: [],
                fields
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/roles`;
            axios.get(uri).then(response => {
                this.roleData = response.data.data;
                console.log(this.roleData);
            });
        },
        methods: {
            UserDelete(id)
            {
                alert(id);
                axios.delete(`http://localhost:8000/api/v1/deleterole/${id}`)
                    .then(() => {
                        window.location.reload();
                    }).catch((error) => {
                    alert(error);
                });
            }
        },
        computed: {
        ...mapGetters({
          user: 'user',
        })
      }
    }
</script>

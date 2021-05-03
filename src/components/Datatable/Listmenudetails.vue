<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <router-link :to="{ name: 'Createmenudetails', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH MENU DETAIL</router-link>
        <CDataTable
          :items="menuData"
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
                <router-link :to="{name: 'Updatemenudetails', params: { id: item.menu_detail_id }}">
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
                   @click="UserDelete(item.menu_detail_id,index)"
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
  { key: 'menu_detail_id' },
  { key: 'menu_detail_name'},
  { key: 'menu_detail_desc' },
  { key: 'active_flag'},
  { key: 'seq' },
  { key: 'created_by'},
  { key: 'last_update_by'},
  { key: 'created_at'},
  { key: 'updated_at'},
  { key: 'Action'}

]

    export default {
        data() {
            return {
                menuData: [],
                fields
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/menudetails`;
            axios.get(uri).then(response => {
                this.menuData = response.data.data;
                console.log(this.menuData);
            });
        },
        methods: {
            UserDelete(id)
            {
                alert(id);
                axios.delete(`http://localhost:8000/api/v1/deletemenudetails/${id}`)
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

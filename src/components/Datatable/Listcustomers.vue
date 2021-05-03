<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <router-link :to="{ name: 'Createcustomers', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH CUSTOMERS</router-link>
        <CDataTable
          :items="customersData"
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
                <router-link :to="{name: 'Updatecustomers', params: { id: item.id }}">
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
  { key: 'customer_number'},
  { key: 'customer_name' },
  { key: 'description'},
  { key: 'email' },
  { key: 'attribute1'},
  { key: 'attribute2' },
  { key: 'attribute3'},
  { key: 'attribute4'},
  { key: 'attribute5'},
  { key: 'active_flag'},
  { key: 'created_by'},
  { key: 'updated_by'},
  { key: 'created_at'},
  { key: 'updated_at'},
  { key: 'Action'}
]

    export default {
        data() {
            return {
                customersData: [],
                fields
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/customers`;
            axios.get(uri).then(response => {
                this.customersData = response.data.data;
                console.log(this.customersData);
            });
        },
        methods: {
            UserDelete(id)
            {
                alert(id);
                axios.delete(`http://localhost:8000/api/v1/deletecustomers/${id}`)
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

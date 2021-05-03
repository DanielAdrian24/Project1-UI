<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <router-link :to="{ name: 'Create', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH USER</router-link>
        <CDataTable
          :items="userData"
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
                <router-link :to="{name: 'Update', params: { id: item.id }}">
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
    <!-- <div class="container mt-3" style="background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                

                        <router-link :to="{ name: 'create' }" class="btn btn-md btn-success">TAMBAH POST</router-link>

                            <table class="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Customer_ID</th>
                                    <th>Email</th>
                                    <th>Email Verified at</th>
                                    <th>Active Flag</th>
                                    <th>Role ID</th>
                                    <th>created_at</th>
                                    <th>updated_at</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(userData, index) in userData" :key="userData.id">
                                    <td>{{ userData.username }}</td>
                                    <td>{{ userData.customer_id }}</td>
                                    <td>{{ userData.email }}</td>
                                    <td>{{ userData.emmail_verified_at }}</td>
                                    <td>{{ userData.active_flag }}</td>
                                    <td>{{ userData.role_id }}</td>
                                    <td>{{ userData.created_at }}</td>
                                    <td>{{ userData.updated_at }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'Update', params: { id: userData.id }}" class="btn btn-sm btn-primary">EDIT</router-link>
                                        <button @click.prevent="UserDelete(userData.id, index)" class="btn btn-sm btn-danger">HAPUS</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                </div>
            </div>
        </div>
    </div> -->
</template>


<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
const fields = [
  { key: 'username' },
  { key: 'customer_id'},
  { key: 'email' },
  { key: 'email_verified_at'},
  { key: 'active_flag'},
  { key: 'role_id'},
  { key: 'created_at'},
  { key: 'updated_at'},
  { key: 'Action'}

]

    export default {
        data() {
            return {
                userData: [],
                fields
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/user`;
            axios.get(uri).then(response => {
                this.userData = response.data.data;
                console.log(this.userData);
            });
        },
        methods: {
            UserDelete(id)
            {
                alert(id);
                axios.delete(`http://localhost:8000/api/v1/getid/${id}`)
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

<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <!-- <router-link :to="{ name: 'Create', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH USER</router-link> -->
    <CButton
        @click="warningModal = true"
        color="success"
    >
        Tambah User
    </CButton>
    <CModal
      title="Tambah User"
      color="success"
      :show.sync="warningModal"
      modal-footer
    >
      <form @submit.prevent="PostStore(user.id)">

                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" v-model="userData2.username"
                                       placeholder="Masukkan Username">
                                <div v-if="validation.username">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.username[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control" type="password" v-model="userData2.password" rows="5"
                                          placeholder="Masukkan Password">
                                <div v-if="validation.password">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Role</label>
                            <select class="form-control" aria-label="Default select example" v-model="userData2.role_id">
                              <option v-for="coba in role_id" v-bind:key="coba.id" v-bind:value="coba.id"> {{ coba.id }} - {{coba.role_name}} </option>
                            </select>
                                <div v-if="validation.role_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Customer</label>
                            <select class="form-control" aria-label="Default select example" v-model="userData2.customer_id">
                              <option v-for="coba2 in cust_id" v-bind:key="coba2.id" v-bind:value="coba2.id"> {{ coba2.id }} - {{coba2.customer_name}} </option>
                            </select>
                                <div v-if="validation.customer_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_id[0] }}
                                    </div>
                                </div>
                            </div>


                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="userData2.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="userData2.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="text" v-model="userData2.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success mr-1">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>
                            </div>
                        </form>
            <template #footer>
                <span></span>
            </template>
    </CModal>
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
                fields,
                userData2: {},
                validation: [],
                role_id:[],
                cust_id:{},
                warningModal: false,
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/user`;
            axios.get(uri).then(response => {
                this.userData = response.data.data;
            });
            let uri3 = `http://localhost:8000/api/v1/roles`;
            axios.get(uri3).then((response) => {
                this.role_id = response.data.data;
            });
            let uri2 = `http://localhost:8000/api/v1/customers`;
            axios.get(uri2).then((response) => {
                this.cust_id = response.data.data;
            });
        },
        methods: {
            UserDelete(id)
            {
                axios.delete(`http://localhost:8000/api/v1/getid/${id}`)
                    .then(() => {
                        window.location.reload();
                    }).catch((error) => {
                    alert(error);
                });
            },
            PostStore(id) {
                let uri = `http://localhost:8000/api/v1/createuser/${id}`;
                axios.post(uri, this.userData2)
                    .then(() => {
                        window.location.reload();
                        this.warningModal= false;
                    }).catch(error => {
                    this.validation = error.response.data.data;
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

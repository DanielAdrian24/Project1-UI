<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH USER</div>

                    <div class="card-body">

                        <form @submit.prevent="PostStore">

                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" v-model="userData.username"
                                       placeholder="Masukkan Username">
                                <div v-if="validation.username">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.username[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control" type="password" v-model="userData.password" rows="5"
                                          placeholder="Masukkan Password">
                                <div v-if="validation.password">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Role ID</label>
                            <select class="form-control" aria-label="Default select example" v-model="userData.role_id">
                              <option v-for="coba in role_id" v-bind:key="coba.id" v-bind:value="coba.id"> {{ coba.id }} </option>
                            </select>
                                <div v-if="validation.role_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Customer ID</label>
                            <select class="form-control" aria-label="Default select example" v-model="userData.customer_id">
                              <option v-for="coba2 in cust_id" v-bind:key="coba2.id" v-bind:value="coba2.id"> {{ coba2.id }} </option>
                            </select>
                                <div v-if="validation.customer_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_id[0] }}
                                    </div>
                                </div>
                            </div>


                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="userData.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="userData.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="text" v-model="userData.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>




                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
    export default {
        data() {
            return {
                userData: {},
                validation: [],
                role_id:[],
                cust_id:{}
            }
        },
        methods: {
            PostStore() {
                let uri = `http://localhost:8000/api/v1/createuser/${this.$route.params.id}`;
                axios.post(uri, this.userData)
                    .then(() => {
                        // console.log(this.userData);
                        this.$router.push({
                            name: 'Listuser'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        },
        created(){
            let uri = `http://localhost:8000/api/v1/roles`;
            axios.get(uri).then((response) => {
                this.role_id = response.data.data;
                console.log(this.role_id);
            });
            let uri2 = `http://localhost:8000/api/v1/customers`;
            axios.get(uri2).then((response) => {
                console.log("masok cust")
                this.cust_id = response.data.data;
                console.log(this.cust_id);
            });
        }
    }
</script>
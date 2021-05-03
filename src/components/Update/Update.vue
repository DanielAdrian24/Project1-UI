<template>
<div>
    <form @submit.prevent="update">
        <div class="form-group">
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.username">
                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.username[0] }}
                    </div>
                </div>
               <CInput
                 label="Username"
                 placeholder="Masukan username"
                 v-model="userUpdate.username"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.customer_id">
                    <div class="alert alert-danger mt-1" role="alert">
                        {{ validation.customer_id[0] }}
                    </div>
                </div>
               <CInput
                 label="Customer ID"
                 placeholder="Masukan Customer Id"
                 v-model="userUpdate.customer_id"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                </div>
               <CInput
                 label="Email"
                 placeholder="Masukan Email"
                 v-model="userUpdate.email"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                 <label>Active Flag</label>
                 <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="userUpdate.active_flag" checked value="Y">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="userUpdate.active_flag" value="N">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    N
                    </label>
                </div>

             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.role_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_id[0] }}
                                    </div>
                                </div>
               <CInput
                 label="Role ID"
                 placeholder="Masukan Role Id"
                 v-model="userUpdate.role_id"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.password">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
               <CInput
                 label="Password"
                 placeholder="Masukan Password"
                 v-model="userUpdate.password"
                 type="password"
               />
             </CCol>
           </CRow>
           <!-- <CRow>
             <CCol sm="4">
               <CSelect
                 label="Month"
                 :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
               />
             </CCol>
             <CCol sm="4">
               <CSelect
                 label="Year"
                 :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
               />
             </CCol>
             <CCol sm="4">
               <CInput
                 label="CVV/CVC"
                 placeholder="123"
               />
             </CCol>
           </CRow> -->
                <button type="submit" class="btn btn-md btn-success">UPDATE</button>
                <button type="reset" class="btn btn-md btn-danger">RESET</button>
        </div>

    </form>
  </div>
    <!-- <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">Update User</div>

                    <div class="card-body">

                        <form @submit.prevent="update">

                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" v-model="userUpdate.username"
                                       placeholder="Masukkan Username">
                                <div v-if="validation.username">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.username[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Customer_ID</label>
                                <input class="form-control" type="text" v-model="userUpdate.customer_id" rows="5"
                                          placeholder="Masukkan Customer ID">
                                <div v-if="validation.customer_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>email</label>
                                <input class="form-control" type="text" v-model="userUpdate.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Active Flag</label>
                                <input class="form-control" type="text" v-model="userUpdate.active_flag" rows="5"
                                          placeholder="Active Flag">
                                <div v-if="validation.active_flag">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.active_flag[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Role ID</label>
                                <input class="form-control" type="text" v-model="userUpdate.role_id" rows="5"
                                          placeholder="Masukkan Role ID">
                                <div v-if="validation.role_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control" type="password" v-model="userUpdate.password" rows="5"
                                          placeholder="Masukkan Password">
                                <div v-if="validation.password">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success">UPDATE</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios'
    export default {

        data() {
            return {
                userUpdate: {},
                validation: []
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/getupdateid/${this.$route.params.id}`;
            axios.get(uri).then((response) => {
                this.userUpdate = response.data.data;
            });
        },
        methods: {
            update() {
                let uri = `http://localhost:8000/api/v1/updateuser/${this.$route.params.id}`;
                console.log(this.userUpdate)
                axios.post(uri, this.userUpdate)
                    .then(() => {
                        this.$router.push({name: 'Listuser'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH Role</div>

                    <div class="card-body">

                        <form @submit.prevent="PostRole">

                            <div class="form-group">
                                <label>Role Name</label>
                                <input type="text" class="form-control" v-model="roleData.role_name"
                                       placeholder="Masukkan Role Name">
                                <div v-if="validation.role_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Role Desc</label>
                                <input class="form-control" type="text" v-model="roleData.role_desc" rows="5"
                                          placeholder="Masukkan Role desc">
                                <div v-if="validation.role_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit mr-1" class="btn btn-md btn-success">SIMPAN</button>
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
                roleData: {},
                validation: []
            }
        },
        methods: {
            PostRole() {
                console.log("masok")
                let uri = `http://localhost:8000/api/v1/createroles`;
                axios.post(uri, this.roleData)
                    .then(() => {
                        console.log(this.roleData);
                        this.$router.push({
                            name: 'Listrole'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
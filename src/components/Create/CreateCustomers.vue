<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH USER</div>

                    <div class="card-body">

                        <form @submit.prevent="PostStore">

                            <div class="form-group">
                                <label>Customer Number</label>
                                <input type="number" class="form-control" v-model="customersData.customer_number"
                                       placeholder="Masukkan Customer Number">
                                <div v-if="validation.customer_number">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_number[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Customer Name</label>
                                <input class="form-control" type="text" v-model="customersData.customer_name" rows="5"
                                          placeholder="Masukkan Customer Name">
                                <div v-if="validation.customer_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <input class="form-control" type="text" v-model="customersData.description" rows="5"
                                          placeholder="Masukkan Description">
                                <div v-if="validation.description">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.description[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="text" v-model="customersData.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>


                            <!-- <div class="form-group">
                                <label>Active Flag</label>
                                <input class="form-control" type="text" v-model="customersData.active_flag" rows="5"
                                          placeholder="Active Flag">
                                <div v-if="validation.active_flag">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.active_flag[0] }}
                                    </div>
                                </div>
                            </div> -->

                            
                            <div class="form-group">
                                <label>Attribute 1</label>
                                <input class="form-control" type="text" v-model="customersData.attribute1" rows="5"
                                          placeholder="Masukkan Attribute 1">
                                <div v-if="validation.attribute1">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute1[0] }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Attribute 2</label>
                                <input class="form-control" type="text" v-model="customersData.attribute2" rows="5"
                                          placeholder="Masukkan Attribute 2">
                                <div v-if="validation.attribute2">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute2[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 3</label>
                                <input class="form-control" type="text" v-model="customersData.attribute3" rows="5"
                                          placeholder="Masukkan Attribute 3">
                                <div v-if="validation.attribute3">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute3[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 4</label>
                                <input class="form-control" type="text" v-model="customersData.attribute4" rows="5"
                                          placeholder="Masukkan Attribute 4">
                                <div v-if="validation.attribute4">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute4[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 5</label>
                                <input class="form-control" type="text" v-model="customersData.attribute5" rows="5"
                                          placeholder="Masukkan Attribute 5">
                                <div v-if="validation.attribute5">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute5[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="customersData.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="customersData.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>

                            </div>

                            <!-- <div class="form-group">
                                <label>Created By</label>
                                <input class="form-control" type="text" v-model="customersData.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Updated By</label>
                                <input class="form-control" type="text" v-model="customersData.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div> -->

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
                customersData: {},
                validation: []
            }
        },
        methods: {
            PostStore() {
                let uri = `http://localhost:8000/api/v1/createcustomers/${this.$route.params.id}`;
                axios.post(uri, this.customersData)
                    .then(() => {
                        console.log(this.customersData);
                        this.$router.push({
                            name: 'Listcustomers'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
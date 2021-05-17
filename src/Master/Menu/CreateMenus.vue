<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH USER</div>

                    <div class="card-body">

                        <form @submit.prevent="PostStore">

                            <div class="form-group">
                                <label>Menu Name</label>
                                <input type="text" class="form-control" v-model="menuData.menu_name"
                                       placeholder="Masukkan Menu Name">
                                <div v-if="validation.menu_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menu Desc</label>
                                <input type="text" class="form-control" v-model="menuData.menu_desc"
                                       placeholder="Masukkan Menu Desc">
                                <div v-if="validation.menu_desc">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_desc[0] }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Customer ID</label>
                            <select class="form-control" aria-label="Default select example" v-model="menuData.role_id">
                              <option v-for="coba2 in cust_id" v-bind:key="coba2.id" v-bind:value="coba2.id"> {{ coba2.id }} </option>
                            </select>
                                <div v-if="validation.customer_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Seq</label>
                                <input class="form-control" type="text" v-model="menuData.seq" rows="5"
                                          placeholder="Masukkan Seq">
                                <div v-if="validation.seq">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.seq[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="menuData.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menuData.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            </div>
                            <div class="form-group">
                            <label>Is Detail</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="menuData.is_detail" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menuData.is_detail" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
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
                menuData: {},
                validation: [],
                cust_id: {}
            }
        },
        methods: {
            PostStore() {
                let uri = `http://localhost:8000/api/v1/createmenus/${this.$route.params.id}`;
                axios.post(uri, this.menuData)
                    .then(() => {
                        console.log(this.menuData);
                        this.$router.push({
                            name: 'Listmenus'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        },
        created(){
            let uri = `http://localhost:8000/api/v1/customers`;
            axios.get(uri).then((response) => {
                // console.log("masok cust")
                this.cust_id = response.data.data;
                console.log(this.cust_id);
            });
        }
    }
</script>
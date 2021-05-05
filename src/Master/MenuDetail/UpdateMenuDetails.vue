<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH USER</div>

                    <div class="card-body">

                        <form @submit.prevent="update">

                            <!-- <div class="form-group">
                                <label>Menu Name</label>
                                <input type="text" class="form-control" v-model="menudtlData.menu_detail_id"
                                       placeholder="Masukkan Customer Number">
                                <div v-if="validation.menu_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_name[0] }}
                                    </div>
                                </div>
                            </div> -->

                            <div class="form-group">
                                <label>Menu Detail Id</label>
                            <select disabled class="form-control" aria-label="Default select example" v-model="menudtldataUpdate.menu_detail_id">
                              <option disabled v-for="coba2 in menudtlId" v-bind:key="coba2.menu_id" v-bind:value="coba2.menu_id"> {{ coba2.menu_id }} - {{coba2.menu_name}} </option>
                            </select>
                                <div v-if="validation.menu_detail_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menu Detail Name</label>
                                <input type="text" class="form-control" v-model="menudtldataUpdate.menu_detail_name"
                                       placeholder="Masukkan Customer Number">
                                <div v-if="validation.menu_detail_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menua Detail Desc</label>
                                <input class="form-control" type="text" v-model="menudtldataUpdate.menu_detail_desc" rows="5"
                                          placeholder="Masukkan Customer Name">
                                <div v-if="validation.menu_detail_desc">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_desc[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="menudtldataUpdate.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menudtldataUpdate.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            </div>

                            <div class="form-group">
                                <label>Seq</label>
                                <input class="form-control" type="number" v-model="menudtldataUpdate.seq" rows="5"
                                          placeholder="Masukkan Description">
                                <div v-if="validation.seq">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.seq[0] }}
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
                menudtldataUpdate: {},
                validation: [],
                menudtlId: {}
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/menus`;
            axios.get(uri).then((response) => {
                this.menudtlId = response.data.data;
                console.log(this.menudtlId);
            });
            let uri2 = `http://localhost:8000/api/v1/getupdateidmenudetails/${this.$route.params.id}`;
            axios.get(uri2).then((response) => {
                this.menudtldataUpdate = response.data.data;
            });
        },
        methods: {
            update() {
                let uri = `http://localhost:8000/api/v1/updatemenudetails/${this.$route.params.id}`;
                console.log(this.menudtldataUpdate)
                axios.post(uri, this.menudtldataUpdate)
                    .then(() => {
                        this.$router.push({name: 'Listmenudetails'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
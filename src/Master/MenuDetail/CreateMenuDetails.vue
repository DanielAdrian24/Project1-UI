<template>
    <div class="container mt-3 background-color:white; padding:20px; border-radius:5px">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH MENU DETAIL</div>

                    <div class="card-body">

                        <form @submit.prevent="PostStore">

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
                            <select class="form-control" aria-label="Default select example" v-model="menudtlData.menu_detail_id">
                              <option v-for="coba2 in menudtlId" v-bind:key="coba2.menu_id" v-bind:value="coba2.menu_id"> {{ coba2.menu_id }} - {{coba2.menu_name}} </option>
                            </select>
                                <div v-if="validation.menu_detail_id">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menu Detail Name</label>
                                <input type="text" class="form-control" v-model="menudtlData.menu_detail_name"
                                       placeholder="Masukkan Menu Detail Name">
                                <div v-if="validation.menu_detail_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menu Detail Desc</label>
                                <input class="form-control" type="text" v-model="menudtlData.menu_detail_desc" rows="5"
                                          placeholder="Masukkan Menu Detail Desc">
                                <div v-if="validation.menu_detail_desc">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_detail_desc[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                            <label>Active Flag</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="menudtlData.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menudtlData.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            </div>

                            <div class="form-group">
                                <label>Seq</label>
                                <input class="form-control" type="number" v-model="menudtlData.seq" rows="5"
                                          placeholder="Masukkan Seq">
                                <div v-if="validation.seq">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.seq[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success mr-1">SIMPAN</button>
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
                menudtlData: {},
                validation: [],
                menudtlId: {}
            }
        },
        methods: {
            PostStore() {
                let uri = `http://localhost:8000/api/v1/createmenudetails/${this.$route.params.id}`;
                axios.post(uri, this.menudtlData)
                    .then(() => {
                        console.log(this.menudtlData);
                        this.$router.push({
                            name: 'Listmenudetails'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        },
        created(){
            let uri = `http://localhost:8000/api/v1/menus`;
            axios.get(uri).then((response) => {
                this.menudtlId = response.data.data;
                console.log(this.menudtlId);
            });
        }
    }
</script>
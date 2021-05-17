<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <!-- <router-link :to="{ name: 'Createmenudetails', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH MENU DETAIL</router-link> -->
                <CButton
            @click="warningModal = true"
            color="success"
        >
        Tambah Menu Detail
    </CButton>
    <CModal
      title="Tambah Menu Detail"
      color="success"
      :show.sync="warningModal"
      modal-footer
    >
      <form @submit.prevent="PostStore(user.id)">

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
            <template #footer>
                <span></span>
            </template>
    </CModal>
        <CDataTable
          :items="menuData"
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
                <router-link :to="{name: 'Updatemenudetails', params: { id: item.menu_detail_id }}">
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
                   @click="UserDelete(item.menu_detail_id,index)"
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
  { key: 'menu_detail_id' },
  { key: 'menu_detail_name'},
  { key: 'menu_detail_desc' },
  { key: 'active_flag'},
  { key: 'seq' },
  { key: 'created_by'},
  { key: 'last_update_by'},
  { key: 'created_at'},
  { key: 'updated_at'},
  { key: 'Action'}

]

    export default {
        data() {
            return {
                menuData: [],
                fields,
                warningModal: false,
                menudtlData: {},
                validation: [],
                menudtlId: {}
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/menudetails`;
            axios.get(uri).then(response => {
                this.menuData = response.data.data;
                console.log(this.menuData);
            });

            let uri2 = `http://localhost:8000/api/v1/menus`;
            axios.get(uri2).then((response) => {
                this.menudtlId = response.data.data;
                console.log(this.menudtlId);
            });
        },
        methods: {
            UserDelete(id)
            {
                // alert(id);
                axios.delete(`http://localhost:8000/api/v1/deletemenudetails/${id}`)
                    .then(() => {
                        window.location.reload();
                    }).catch((error) => {
                    alert(error);
                });
            },
            PostStore(id) {
                console.log(id);
                let uri = `http://localhost:8000/api/v1/createmenudetails/${id}`;
                axios.post(uri, this.menudtlData)
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

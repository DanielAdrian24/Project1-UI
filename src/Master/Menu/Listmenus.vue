<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <!-- <router-link :to="{ name: 'Createmenus', params: { id: user.id } }" class="btn btn-md btn-success">TAMBAH MENU</router-link> -->
        <CButton
            @click="warningModal = true"
            color="success"
        >
        Tambah Menu
    </CButton>
    <CModal
      title="Tambah Menu"
      color="success"
      :show.sync="warningModal"
      modal-footer
    >
      <form @submit.prevent="PostStore(user.id)">

                            <div class="form-group">
                                <label>Menu Name</label>
                                <input type="text" class="form-control" v-model="menuData2.menu_name"
                                       placeholder="Masukkan Menu Name">
                                <div v-if="validation.menu_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Menu Desc</label>
                                <input type="text" class="form-control" v-model="menuData2.menu_desc"
                                       placeholder="Masukkan Menu Desc">
                                <div v-if="validation.menu_desc">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_desc[0] }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Customer ID</label>
                            <select class="form-control" aria-label="Default select example" v-model="menuData2.role_id">
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
                                <input class="form-control" type="text" v-model="menuData2.seq" rows="5"
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
                                <input class="form-check-input" type="radio" v-model="menuData2.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menuData2.active_flag" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            </div>
                            <div class="form-group">
                            <label>Is Detail</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="menuData2.is_detail" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="menuData2.is_detail" value="N">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    N
                                    </label>
                            </div>
                            </div>


                            <div class="form-group">
                                <CButton @click="warningModal = false" color="danger" >Batal</CButton>
                                <CButton color="success" type="submit"> Tambah</CButton>
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
                <router-link :to="{name: 'Updatemenus', params: { id: item.menu_id }}">
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
                   @click="UserDelete(item.menu_id,index)"
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
  { key: 'menu_id' },
  { key: 'menu_name'},
  { key: 'menu_desc' },
  { key: 'role_id'},
  { key: 'seq' },
  { key: 'active_flag'},
  { key: 'is_detail' },
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
                menuData2: {},
                validation: [],
                cust_id: {},
                fields,
                warningModal: false
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/menus`;
            axios.get(uri).then(response => {
                this.menuData = response.data.data;

            });

            let uri2 = `http://localhost:8000/api/v1/customers`;
            axios.get(uri2).then((response) => {
                // console.log("masok cust")
                this.cust_id = response.data.data;
            });
        },
        methods: {
            PostStore(id) {
                let uri = `http://localhost:8000/api/v1/createmenus/${id}`;
                axios.post(uri, this.menuData2)
                    .then(() => {
                        window.location.reload();
                        this.warningModal= false;
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            },
            UserDelete(id)
            {
                alert(id);
                axios.delete(`http://localhost:8000/api/v1/deletemenus/${id}`)
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

<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <CButton
        @click="warningModal = true"
        color="success"
    >
        Tambah Customers
    </CButton>
    <CModal
      title="Tambah Customers"
      color="success"
      :show.sync="warningModal"
      modal-footer
    >
      <form @submit.prevent="PostStore(user.id)">

                             <div class="form-group">
                                <label>Customer Number</label>
                                <input type="number" class="form-control" v-model="customersData2.customer_number"
                                       placeholder="Masukkan Customer Number">
                                <div v-if="validation.customer_number">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_number[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Customer Name</label>
                                <input class="form-control" type="text" v-model="customersData2.customer_name" rows="5"
                                          placeholder="Masukkan Customer Name">
                                <div v-if="validation.customer_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <input class="form-control" type="text" v-model="customersData2.description" rows="5"
                                          placeholder="Masukkan Description">
                                <div v-if="validation.description">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.description[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="text" v-model="customersData2.email" rows="5"
                                          placeholder="Masukkan Email">
                                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Attribute 1</label>
                                <input class="form-control" type="text" v-model="customersData2.attribute1" rows="5"
                                          placeholder="Masukkan Attribute 1">
                                <div v-if="validation.attribute1">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute1[0] }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Attribute 2</label>
                                <input class="form-control" type="text" v-model="customersData2.attribute2" rows="5"
                                          placeholder="Masukkan Attribute 2">
                                <div v-if="validation.attribute2">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute2[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 3</label>
                                <input class="form-control" type="text" v-model="customersData2.attribute3" rows="5"
                                          placeholder="Masukkan Attribute 3">
                                <div v-if="validation.attribute3">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute3[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 4</label>
                                <input class="form-control" type="text" v-model="customersData2.attribute4" rows="5"
                                          placeholder="Masukkan Attribute 4">
                                <div v-if="validation.attribute4">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute4[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Attribute 5</label>
                                <input class="form-control" type="text" v-model="customersData2.attribute5" rows="5"
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
                                <input class="form-check-input" type="radio" v-model="customersData2.active_flag" checked value="Y">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                                    </label>
                            </div>
                            <div class="form-check">
                                 <input class="form-check-input" type="radio" v-model="customersData2.active_flag" value="N">
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
            <template #footer>
                <span></span>
            </template>
    </CModal>
        <CDataTable
          :items="customersData"
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
                <router-link :to="{name: 'Updatecustomers', params: { id: item.id }}">
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
</template>


<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
const fields = [
  { key: 'id' },
  { key: 'customer_number'},
  { key: 'customer_name' },
  { key: 'description'},
  { key: 'email' },
  { key: 'attribute1'},
  { key: 'attribute2' },
  { key: 'attribute3'},
  { key: 'attribute4'},
  { key: 'attribute5'},
  { key: 'active_flag'},
  { key: 'created_by'},
  { key: 'updated_by'},
  { key: 'created_at'},
  { key: 'updated_at'},
  { key: 'Action'}
]

    export default {
        data() {
            return {
                customersData: [],
                fields,
                customersData2: {},
                validation: [],
                warningModal: false
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/customers`;
            axios.get(uri).then(response => {
                this.customersData = response.data.data;
                console.log(this.customersData);
            });
        },
        methods: {
            UserDelete(id)
            {
                axios.delete(`http://localhost:8000/api/v1/deletecustomers/${id}`)
                    .then(() => {
                        window.location.reload();
                    }).catch((error) => {
                    alert(error);
                });
            },
            PostStore(id) {
                console.log(id);
                let uri = `http://localhost:8000/api/v1/createcustomers/${id}`;
                axios.post(uri, this.customersData2)
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

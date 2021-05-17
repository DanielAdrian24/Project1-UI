<template>
    <div style="background-color:white; padding:20px; border-radius:5px">
        <!-- <router-link :to="{ name: 'Createrole' }" class="btn btn-md btn-success">TAMBAH ROLE</router-link> -->
    <CButton
        @click="warningModal = true"
        color="success"
    >
        Tambah Role
    </CButton>
    <CModal
      title="Tambah Role"
      color="success"
      :show.sync="warningModal"
      modal-footer
    >
      <form @submit.prevent="PostRole">

                             <div class="form-group">
                                <label>Role Name</label>
                                <input type="text" class="form-control" v-model="roleData2.role_name"
                                       placeholder="Masukkan Role Name">
                                <div v-if="validation.role_name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Role Desc</label>
                                <input class="form-control" type="text" v-model="roleData2.role_desc" rows="5"
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
            <template #footer>
                <span></span>
            </template>
    </CModal>
        <CDataTable
          :items="roleData"
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
                <router-link :to="{name: 'Updaterole', params: { id: item.id }}">
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
  { key: 'role_name'},
  { key: 'role_desc' },
  { key: 'Action'}

]

    export default {
        data() {
            return {
                roleData: [],
                fields,
                roleData2: {},
                validation: [],
                warningModal: false
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/roles`;
            axios.get(uri).then(response => {
                this.roleData = response.data.data;
            });
        },
        methods: {
            UserDelete(id)
            {
                // alert(id);
                axios.delete(`http://localhost:8000/api/v1/deleterole/${id}`)
                    .then(() => {
                        window.location.reload();
                    }).catch((error) => {
                    alert(error);
                });
            },
            PostRole() {
                let uri = `http://localhost:8000/api/v1/createroles`;
                axios.post(uri, this.roleData2)
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

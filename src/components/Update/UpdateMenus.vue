<template>
<div>
    <form @submit.prevent="update">
        <div class="form-group">
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.menu_name">
                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.menu_name[0] }}
                    </div>
                </div>
               <CInput
                 label="Menu Name"
                 placeholder="Masukan Customer ID"
                 v-model="menusUpdate.menu_name"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.menu_desc">
                    <div class="alert alert-danger mt-1" role="alert">
                        {{ validation.menu_desc[0] }}
                    </div>
                </div>
               <CInput
                 label="Deskripsi Menu"
                 placeholder="Masukan Customer Name"
                 v-model="menusUpdate.menu_desc"
               />
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
                 v-model="menusUpdate.role_id"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.seq">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.seq[0] }}
                                    </div>
                </div>
               <CInput
                 label="Seq"
                 placeholder="Masukan Deskripsi"
                 v-model="menusUpdate.seq"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                 <label>Active Flag</label>
                 <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="menusUpdate.active_flag" checked value="Y">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="menusUpdate.active_flag" value="N">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    N
                    </label>
                </div>

             </CCol>
           </CRow>
            <CRow>
             <CCol sm="12">
                 <label>IS Detail</label>
                 <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="menusUpdate.is_detail" checked value="Y">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="menusUpdate.is_detail" value="N">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    N
                    </label>
                </div>
             </CCol>
           </CRow>
                <button type="submit" class="btn btn-md btn-success">UPDATE</button>
                <button type="reset" class="btn btn-md btn-danger">RESET</button>
        </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
    export default {

        data() {
            return {
                menusUpdate: {},
                validation: []
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/getupdateidmenus/${this.$route.params.id}`;
            axios.get(uri).then((response) => {
                this.menusUpdate = response.data.data;
            });
        },
        methods: {
            update() {
                let uri = `http://localhost:8000/api/v1/updatemenus/${this.$route.params.id}`;
                console.log(this.menusUpdate)
                axios.post(uri, this.menusUpdate)
                    .then(() => {
                        this.$router.push({name: 'Listmenus'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
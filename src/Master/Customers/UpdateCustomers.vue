<template>
<div>
    <form @submit.prevent="update">
        <div class="form-group">
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.customer_number">
                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.customer_number[0] }}
                    </div>
                </div>
               <CInput
                 label="Customer ID"
                 placeholder="Masukan Customer ID"
                 v-model="customersUpdate.customer_number"
                 type="number"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.customer_name">
                    <div class="alert alert-danger mt-1" role="alert">
                        {{ validation.customer_name[0] }}
                    </div>
                </div>
               <CInput
                 label="Customer Name"
                 placeholder="Masukan Customer Name"
                 v-model="customersUpdate.customer_name"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.description">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.description[0] }}
                                    </div>
                </div>
               <CInput
                 label="Deskripsi"
                 placeholder="Masukan Deskripsi"
                 v-model="customersUpdate.description"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.email">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.email[0] }}
                                    </div>
                </div>
               <CInput
                 label="Email"
                 placeholder="Masukan Email"
                 v-model="customersUpdate.email"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.attribute1">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute1[0] }}
                                    </div>
                </div>
               <CInput
                 label="Attribute 1"
                 placeholder="Masukan Attribute1"
                 v-model="customersUpdate.attribute1"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.attribute2">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute2[0] }}
                                    </div>
                </div>
               <CInput
                 label="Attribute 2"
                 placeholder="Masukan Attribute 2"
                 v-model="customersUpdate.attribute2"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.attribute3">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute3[0] }}
                                    </div>
                </div>
               <CInput
                 label="Attribute 3"
                 placeholder="Masukan Attribute 3"
                 v-model="customersUpdate.attribute3"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.attribute4">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute4[0] }}
                                    </div>
                </div>
               <CInput
                 label="Attribute 4"
                 placeholder="Masukan Attribute 4"
                 v-model="customersUpdate.attribute4"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.attribute5">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.attribute5[0] }}
                                    </div>
                </div>
               <CInput
                 label="Attribute 5"
                 placeholder="Masukan Attribute 5"
                 v-model="customersUpdate.attribute5"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                 <label>Active Flag</label>
                 <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="customersUpdate.active_flag" checked value="Y">
                        <label class="form-check-label" for="flexRadioDefault2">
                                    Y
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="customersUpdate.active_flag" value="N">
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
                customersUpdate: {},
                validation: []
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/getupdateidcustomers/${this.$route.params.id}`;
            axios.get(uri).then((response) => {
                this.customersUpdate = response.data.data;
                console.log(this.customersUpdate);
            });
        },
        methods: {
            update() {
                let uri = `http://localhost:8000/api/v1/updatecustomers/${this.$route.params.id}`;
                console.log(this.customersUpdate)
                axios.post(uri, this.customersUpdate)
                    .then(() => {
                        this.$router.push({name: 'Listcustomers'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
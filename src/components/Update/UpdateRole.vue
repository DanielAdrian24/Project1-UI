<template>
<div>
    <form @submit.prevent="update">
        <div class="form-group">
           <CRow>
             <CCol sm="12">
                 <div v-if="validation.role_name">
                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.role_name[0] }}
                    </div>
                </div>
               <CInput
                 label="Role Name"
                 placeholder="Masukan Role Name"
                 v-model="roleUpdate.role_name"
               />
             </CCol>
           </CRow>
           <CRow>
             <CCol sm="12">
                <div v-if="validation.role_desc">
                    <div class="alert alert-danger mt-1" role="alert">
                        {{ validation.role_desc[0] }}
                    </div>
                </div>
               <CInput
                 label="Role Desc"
                 placeholder="Role Desc"
                 v-model="roleUpdate.role_desc"
               />
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
                roleUpdate: {},
                validation: []
            }
        },
        created() {
            let uri = `http://localhost:8000/api/v1/getupdateidrole/${this.$route.params.id}`;
            axios.get(uri).then((response) => {
                this.roleUpdate = response.data.data;
            });
        },
        methods: {
            update() {
                let uri = `http://localhost:8000/api/v1/updaterole/${this.$route.params.id}`;
                console.log(this.roleUpdate)
                axios.post(uri, this.roleUpdate)
                    .then(() => {
                        this.$router.push({name: 'Listrole'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>
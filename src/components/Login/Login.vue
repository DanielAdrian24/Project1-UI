<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
                <CAlert
                 color="danger"
                 :show.sync="currentAlertCounter"
                 v-for="(error, index) in errors"
                :key="index"
                 closeButton
               >
                {{ error[0] }}
                 <CProgress
                   :max="10"
                   :value="currentAlertCounter"
                   height="3px"
                   color="danger"
                   animate
                 />
               </CAlert>
              <CCardBody>
                <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                <form @submit.prevent="userLogin">
                    <CInput
                    placeholder="Username"
                    autocomplete="username email"
                    v-model="form.username"
                    name="username"
                    >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="form.password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  <!-- <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div
            class="alert alert-danger"
            v-for="(error, index) in errors"
            :key="index"
          >
            {{ error[0] }}
          </div>
          <form @submit.prevent="userLogin">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="form.username"
                type="text"
                class="form-control"
                placeholder="Email.."
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Password.."
                name="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: null,
      currentAlertCounter:10
    };
  },
  methods: {
    userLogin() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push({ name: "Listuser" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          // this.currentAlertCounter = 10;
        });
    },
  },
};
</script>

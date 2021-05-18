<template>
  <CHeader fixed with-subheader light v-if="!$route.meta.hideNavigation">
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$navbar.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$navbar.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
    </CHeaderNav>
    <CHeaderNav class="mr-4">
        <CNavItem><CButton
          @click="logout">
            Logout
          </CButton></CNavItem>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
// import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import {mapGetters} from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    // TheHeaderDropdownAccnt
  },
  computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
     methods: {
        logout: function() {
          console.log("MASOk")
              this.$store.dispatch('logout').then(() =>
              this.$router.push("/"))
          }
    }
}
</script>


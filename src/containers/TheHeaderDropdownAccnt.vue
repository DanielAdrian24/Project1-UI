<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="../assets/logo.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>{{user.username}}</strong>
    </CDropdownHeader>
    <CDropdownItem @click="logout">
      <CIcon name="cil-lock-locked"/> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'TheHeaderDropdownAccnt',
    computed: {
        ...mapGetters({
          isLoggedIn: 'isLoggedIn',
          user: 'user',
        })
      },
       methods: {
          logout: function() {
              this.$store.dispatch('logout').then(() =>
              this.$router.push("/"))
          }
      }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
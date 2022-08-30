import {ADMIN_LOGIN} from './mutations-type'

export default {
  adminLogin({commit}, data) {
    console.info(data)
    fetch(data).then(response => {
      if (response.statusCode === 200) {
        commit(ADMIN_LOGIN, response.entity)
        this.$router.push('/home')
      } else {
        alert(response.message)
      }
    }).catch(error => {
      alert(error)
    })
  }
}

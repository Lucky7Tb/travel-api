'use strict'

class ChangePasswordAdmin {
  get rules () {
    return {
      admin_new_password: 'required|min:6|max:30',
      admin_password_confirmation: 'same:admin_new_password'
    }
  }
}

module.exports = ChangePasswordAdmin

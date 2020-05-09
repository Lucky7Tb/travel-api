'use strict'

class UpdateAdmin {
  get rules () {
    return {
      email: 'required|email|unique:users',
      admin_name: 'required|string',
      admin_phone: 'number|integer|min:11|max:15|unique:users',
      admin_address: 'required|string',
      admin_born_place: 'string|max:80',
      admin_born_date: 'date'
    }
  }
}

module.exports = UpdateAdmin

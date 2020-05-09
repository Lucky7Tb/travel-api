'use strict'

class StoreAdmin {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:6|max:30',
      admin_name: 'required|string',
      admin_phone: 'number|integer|min:11|max:15|unique:users',
      admin_address: 'required|string',
      admin_born_place: 'string|max:80',
      admin_born_date: 'date'
    }
  }
}

module.exports = StoreAdmin

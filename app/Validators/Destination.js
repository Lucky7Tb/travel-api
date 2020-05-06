'use strict'

class Destination {
  get rules () {
    return {
      destination_name: 'required|string',
      destination_description: 'string'
    }
  }

  get messages () {
    return {
      'destination_name.required': 'Harap masukan nama destinasi'
    }
  }
}

module.exports = Destination

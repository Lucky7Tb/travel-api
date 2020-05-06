'use strict'

class TourPackage {
  get rules () {
    return {
      tour_package_schedule_meet_point: 'required|string',
      tour_package_schedule_price: 'required|integer',
      tour_package_schedule_slot: 'required|integer',
      tour_package_schedule_depature: 'required|date',
      tour_package_picture: 'file|file_ext:png,jpg,jpeg,PNG,JPG,JPEG|file_size:2mb|file_types:image',
    }
  }
}

module.exports = TourPackage

'use strict'

class TourPackage {
  get rules () {
    return {
      destination_id: 'required|integer',
      tour_package_name: 'required|string',
      tour_package_description: 'required|integer',
      tour_package_category: 'in:UMUM,INSTANSI',
      tour_package_picture: 'file|file_ext:png,jpg,jpeg,PNG,JPG,JPEG|file_size:2mb|file_types:image',
    }
  }
}

module.exports = TourPackage

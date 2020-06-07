'use strict'

const { rule } = require('indicative')

class TourPackageSchedule {
  get rules () {
    return {
      tour_package_id: 'required|integer',
      tour_package_schedule_meet_point: 'required|string',
      tour_package_schedule_meet_lat: 'string',
      tour_package_schedule_meet_lang: 'string',
      tour_package_schedule_price: 'required|integer',
      tour_package_schedule_slot: 'required|integer',
      tour_package_schedule_depature: [
        rule('dateFormat', 'YYYY-MM-DD HH:mm:ss'),
        rule('required')
      ]
    }
  }
}

module.exports = TourPackageSchedule

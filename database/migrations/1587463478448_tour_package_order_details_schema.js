'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TourPackageOrderDetailsSchema extends Schema {
  up () {
    this.create('tour_package_order_details', (table) => {
      table.increments()
      table.integer('tour_order_id').notNullable().unsigned().references('id').inTable('tour_package_orders')
      table.string('tour_order_details_name', 50).notNullable()
      table.string('tour_order_details_number_ktp', 16).notNullable()
      table.string('tour_order_details_ticket', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tour_package_order_details')
  }
}

module.exports = TourPackageOrderDetailsSchema

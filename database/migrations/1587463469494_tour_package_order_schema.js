  'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TourPackageOrderSchema extends Schema {
  up () {
    this.create('tour_package_orders', (table) => {
      table.increments()
      table.integer('member_id').notNullable().unsigned().references('id').inTable('members')
      table.integer('tour_package_schedule_id').notNullable().unsigned().references('id').inTable('tour_package_schedules')
      table.integer('tour_package_order_slot').notNullable().unsigned()
      table.integer('tour_package_order_price_total').notNullable().unsigned()
      table.datetime('tour_package_order_date').notNullable()
      table.enu('tour_order_status', ['AKTIF','SELESAI','REQUEST CANCEL']).notNullable().defaultTo('AKTIF')
      table.enu('tour_order_payment_status', ['LUNAS','BELUM LUNAS','PENDING']).notNullable().defaultTo('BELUM LUNAS')
      table.string('tour_order_payment_evidance', 50).nullable()
      table.string('tour_order_invoice', 50).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tour_package_orders')
  }
}

module.exports = TourPackageOrderSchema

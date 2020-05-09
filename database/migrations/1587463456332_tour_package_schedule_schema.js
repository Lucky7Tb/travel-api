'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TourPackageScheduleSchema extends Schema {
  up () {
    this.create('tour_package_schedules', (table) => {
      table.increments()
      table.integer('tour_package_id').notNullable().unsigned().references('id').inTable('tour_packages').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('tour_package_schedule_meet_point', 50).notNullable()
      table.string('tour_package_schedule_meet_lat').nullable()
      table.string('tour_package_schedule_meet_lang').nullable()
      table.integer('tour_package_schedule_price', 10).notNullable().unsigned()
      table.integer('tour_package_schedule_slot', 10).notNullable().unsigned()
      table.datetime('tour_package_schedule_depature').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tour_package_schedules')
  }
}

module.exports = TourPackageScheduleSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TourPackageSchema extends Schema {
  up () {
    this.create('tour_packages', (table) => {
      table.increments()
      table.integer('destination_id').notNullable().unsigned().references('id').inTable('destinations').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('tour_package_name', 80).notNullable()
      table.text('tour_package_description').notNullable()
      table.enu('tour_package_category', ['UMUM', 'INSTANSI']).defaultTo('UMUM')
      table.string('tour_package_picture', 50).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tour_packages')
  }
}

module.exports = TourPackageSchema

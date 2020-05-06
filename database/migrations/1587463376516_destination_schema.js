'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DestinationSchema extends Schema {
  up () {
    this.create('destinations', (table) => {
      table.increments()
      table.string('destination_name', 80).notNullable()
      table.text('destination_description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('destinations')
  }
}

module.exports = DestinationSchema

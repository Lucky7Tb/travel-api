'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.string('admin_name', 80).notNullable()
      table.string('admin_phone', 15).nullable().unique()
      table.text('admin_address').notNullable()
      table.string('admin_born_place', 80).nullable()
      table.date('admin_born_date').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminSchema

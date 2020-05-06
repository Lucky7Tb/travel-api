'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.integer('role_id').notNullable().unsigned().references('id').inTable('roles')
      table.string('email', 254).notNullable().unique()
      table.datetime('email_verified_at').nullable()
      table.boolean('email_verified').defaultTo(true)
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema

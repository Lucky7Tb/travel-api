'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('member_name', 80).notNullable()
      table.string('member_phone', 15).nullable().unique()
      table.date('member_born_date').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema

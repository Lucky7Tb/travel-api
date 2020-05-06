'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Member extends Model {
    tourPackageOrderHistories(){
        return this.belongsToMany('App/Models/TourPackageOrderHistories')
    }

    user(){
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Member

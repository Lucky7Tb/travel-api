'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Destination extends Model {
    tourPackage(){ 
        return this.hasMany('App/Models/TourPackage')
    }
}

module.exports = Destination

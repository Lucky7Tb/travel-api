'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TourPackageSchedule extends Model {
    TourPackageOrder(){
        return this.hasMany('App/Models/TourPackageOrder')
    }

    tourPackage(){
        return this.belongsTo('App/Models/TourPackage')
    }
}

module.exports = TourPackageSchedule
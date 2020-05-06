'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TourPackageOrder extends Model {
    tourPackageOrderDetails(){
        return this.hasMany('App/Models/TourPackageOrderDetails')
    }

    tourPackageSchedule(){
        return this.belongsTo('App/Models/TourPackageSchedule')
    }
}

module.exports = TourPackageOrder

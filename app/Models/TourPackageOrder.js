'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TourPackageOrder extends Model {
    tourPackageOrderDetails(){
        return this.hasMany('App/Model/TourPackageOrderDetails')
    }

    tourPackageSchedule(){
        return this.belongsTo('App/Model/TourPackageSchedule')
    }
}

module.exports = TourPackageOrder

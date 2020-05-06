'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TourPackageOrderDetail extends Model {
    tourPackageOrder(){
        return this.belongsTo('App/Models/TourPackageOrder')
    }
}

module.exports = TourPackageOrderDetail

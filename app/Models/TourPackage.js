'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TourPackage extends Model {
    tourPackageSchedule(){
        return this.hasMany('App/Models/TourPackageSchedule')
    }

    destination(){ 
        return this.belongsTo('App/Models/Destination')
    }
}

module.exports = TourPackage

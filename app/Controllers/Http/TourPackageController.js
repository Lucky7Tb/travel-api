'use strict'

const Helpers = use('Helpers')
const TourPackage = use('App/Models/TourPackage')
const Random = use('App/Helpers/RandomString')
const Fs = require('fs')

class TourPackageController {

    async getTourPackage({ response }){
        try {
            const dataTourPackage = await TourPackage.query().with('destination').fetch();
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataTourPackage
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }

    }

    async retriveTourPackage({ request, response}){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataTourPackage
            })
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async storeTourPackage({ request, response}){
        try {
            const dataTourPackage = new TourPackage();

            const  tourPackagePicture = request.file('tour_package_picture');

            const picture_name = Random.randomString();

            dataTourPackage.destination_id = request.post().destination_id;
            dataTourPackage.tour_package_name = request.post().tour_package_name;
            dataTourPackage.tour_package_description = request.post().tour_package_description;
            dataTourPackage.tour_package_category = request.post().tour_package_category;
            dataTourPackage.tour_package_picture = `${picture_name}.${tourPackagePicture.extname}`;
            await dataTourPackage.save();
            
            await tourPackagePicture.move(Helpers.publicPath('tour_package_picture'), {
                name: `${picture_name}.${tourPackagePicture.extname}`
            })

            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async updateTourPackage({ request, response}){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);

            dataTourPackage.destination_id = request.post().destination_id;
            dataTourPackage.tour_package_name = request.post().tour_package_name;
            dataTourPackage.tour_package_description = request.post().tour_package_description;
            dataTourPackage.tour_package_category = request.post().tour_package_category;
            await dataTourPackage.save();
           
            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async deleteTourPackage({ request, response }){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);
    
            const picturePath = Helpers.publicPath('tour_package_picture') +  `\\${dataTourPackage.tour_package_picture}`;

            if(dataTourPackage.tour_package_picture !== 'default.png'){
                if(Fs.existsSync(picturePath)){
                    Fs.unlinkSync(picturePath);
                }
            }

            await dataTourPackage.delete();

            return response.json({
                'status': 200,
                'message': 'Success'
            })
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }
}

module.exports = TourPackageController

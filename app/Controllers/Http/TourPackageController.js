'use strict'

const Helpers = use('Helpers')
const TourPackage = use('App/Models/TourPackage')
const Random = use('App/Helpers/RandomString')
const Fs = require('fs')

class TourPackageController {

    async getTourPackage({ response }){
        try {
            const dataTourPackage = await TourPackage.query().select('id', 'destination_id', 'tour_package_name', 'tour_package_category').orderBy('created_at', 'desc').with('destination').fetch();
            return response.status(200).json({
                'message': 'Success',
                'dataTourPackage': dataTourPackage
            });
        } catch (error) {
            return response.status(200).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }

    }

    async retriveTourPackage({ request, response}){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);
            return response.status(200).json({
                'message': 'Success',
                'dataTourPackage': dataTourPackage
            })
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async storeTourPackage({ request, response}){
        try {
            const dataTourPackage = new TourPackage();

            let picture_name;

            const tourPackagePicture = request.file('tour_package_picture');
            
            if(tourPackagePicture) {
                picture_name = `${Random.randomString()}.${tourPackagePicture.extname}`;
            }else{
                picture_name = "no_picture.svg"
            }

            dataTourPackage.destination_id = request.post().destination_id;
            dataTourPackage.tour_package_name = request.post().tour_package_name;
            dataTourPackage.tour_package_description = request.post().tour_package_description;
            dataTourPackage.tour_package_category = request.post().tour_package_category;
            dataTourPackage.tour_package_picture = picture_name;
            await dataTourPackage.save();
            
            if(tourPackagePicture){
                await tourPackagePicture.move(Helpers.publicPath('tour_package_picture'), {
                    name: picture_name
                })
            }

            return response.status(200).json({
                'message': 'Insert paket tour sukses'
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async updateTourPackage({ request, response}){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);

            let picture_name,
                picturePath;
            
            const tourPackagePicture = request.file('tour_package_picture');

            if(tourPackagePicture){
                picture_name = `${Random.randomString()}.${tourPackagePicture.extname}`;
                if(dataTourPackage.tour_package_picture !== 'no_picture.svg'){
                    picturePath = Helpers.publicPath('tour_package_picture') +  `\\${dataTourPackage.tour_package_picture}`; 
                    if(Fs.existsSync(picturePath)){
                        Fs.unlinkSync(picturePath);
                    }
                }
                dataTourPackage.tour_package_picture = picture_name;
            }

            dataTourPackage.destination_id = request.post().destination_id;
            dataTourPackage.tour_package_name = request.post().tour_package_name;
            dataTourPackage.tour_package_description = request.post().tour_package_description;
            dataTourPackage.tour_package_category = request.post().tour_package_category;
            await dataTourPackage.save();

            if(tourPackagePicture){
                await tourPackagePicture.move(Helpers.publicPath('tour_package_picture'), {
                    name: picture_name
                })
            }

            return response.status(200).json({
                'message': 'Update paket tour sukses'
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async deleteTourPackage({ request, response }){
        try {
            const dataTourPackage = await TourPackage.find(request.post().tour_package_id);
    
            const picturePath = Helpers.publicPath('tour_package_picture') +  `\\${dataTourPackage.tour_package_picture}`;

            if(dataTourPackage.tour_package_picture !== 'no_picture.svg'){
                if(Fs.existsSync(picturePath)){
                    Fs.unlinkSync(picturePath);
                }
            }

            await dataTourPackage.delete();

            return response.status(200).json({
                'message': 'Delete paket tour sukses'
            })
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }
}

module.exports = TourPackageController

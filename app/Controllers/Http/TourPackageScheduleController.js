'use strict'

const TourPackageSchedule = use('App/Models/TourPackageSchedule')

class TourPackageScheduleController {

    async getTourPackageSchedule({ response }){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.query().with('tourPackage').fetch();
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataTourPackageSchedule
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }

    }

    async retriveTourPackageSchedule({ request, response}){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.find(request.post().tour_package_schedule_id);
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataTourPackageSchedule
            })
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async storeTourPackageSchedule({ request, response}){
        try {
            const dataTourPackageSchedule = new TourPackageSchedule();

            dataTourPackageSchedule.tour_package_id = request.post().tour_package_id;
            dataTourPackageSchedule.tour_package_schedule_meet_point = request.post().tour_package_schedule_meet_point;
            dataTourPackageSchedule.tour_package_schedule_meet_lat = request.post().tour_package_schedule_meet_lat;
            dataTourPackageSchedule.tour_package_schedule_meet_lang = request.post().tour_package_schedule_meet_lang;
            dataTourPackageSchedule.tour_package_schedule_price = request.post().tour_package_schedule_price;
            dataTourPackageSchedule.tour_package_schedule_slot = request.post().tour_package_schedule_slot;
            dataTourPackageSchedule.tour_package_schedule_depature = request.post().tour_package_schedule_depature;
            await dataTourPackageSchedule.save();
        
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

    async updateTourPackageSchedule({ request, response}){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.find(request.post().tour_package_schedule_id);

            dataTourPackageSchedule.tour_package_id = request.post().tour_package_id;
            dataTourPackageSchedule.tour_package_schedule_meet_point = request.post().tour_package_schedule_meet_point;
            dataTourPackageSchedule.tour_package_schedule_meet_lat = request.post().tour_package_schedule_meet_lat;
            dataTourPackageSchedule.tour_package_schedule_meet_lang = request.post().tour_package_schedule_meet_lang;
            dataTourPackageSchedule.tour_package_schedule_price = request.post().tour_package_schedule_price;
            dataTourPackageSchedule.tour_package_schedule_slot = request.post().tour_package_schedule_slot;
            dataTourPackageSchedule.tour_package_schedule_depature = request.post().tour_package_schedule_depature;
            await dataTourPackageSchedule.save();
           
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

    async deleteTourPackageSchedule({ request, response }){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.find(request.post().tour_package_schedule_id);
            await dataTourPackageSchedule.delete();

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

module.exports = TourPackageScheduleController

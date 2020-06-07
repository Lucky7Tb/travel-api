'use strict'

const TourPackageSchedule = use('App/Models/TourPackageSchedule')

class TourPackageScheduleController {

    async getTourPackageSchedule({ response }){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.query().orderBy('created_at', 'desc').with('tourPackage', query => {
                query.select("id", "tour_package_name")
            }).fetch();
            return response.status(200).json({
                'message': 'Success',
                'dataTourPackageSchedule': dataTourPackageSchedule
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async retriveTourPackageSchedule({ request, response}){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.find(request.post().tour_package_schedule_id);
            return response.status(200).json({
                'message': 'Success',
                'dataTourPackageSchedule': dataTourPackageSchedule
            })
        } catch (error) {
            return response.status(250).json({
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
        
            return response.status(200).json({
                'message': 'Insert jadwal tour sukses'
            });
        } catch (error) {
            return response.status(500).json({
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
           
            return response.status(200).json({
                'message': 'Update jadwal tour sukses'
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }

    async deleteTourPackageSchedule({ request, response }){
        try {
            const dataTourPackageSchedule = await TourPackageSchedule.find(request.post().tour_package_schedule_id);
            await dataTourPackageSchedule.delete();

            return response.status(200).json({
                'message': 'Hapus jadwal tour sukses'
            })
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server'
            });
        }
    }
    
}

module.exports = TourPackageScheduleController

'use strict'

const Destination = use('App/Models/Destination')

class DestinationController {
    async getDestination({request, response}){
        try {
            const dataDestination = await Destination.all();
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataDestination
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async retriveDestination({request, response}){
        try {
            const dataDestination = await Destination.find(request.post().destination_id);
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataDestination
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async storeDestination({request, response}){
        try {
            const dataDestination = new Destination();
            dataDestination.destination_name = request.post().destination_name;
            dataDestination.destination_description = request.post().destination_description;
            await dataDestination.save();
            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async updateDestination({request, response}){
        try {
            const dataDestination = await Destination.find(request.post().destination_id);
            dataDestination.destination_name = request.post().destination_name;
            dataDestination.destination_description = request.post().destination_description;
            await dataDestination.save();
            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async deleteDestination({request, response}){
        try {
            const dataDestination = await Destination.find(request.post().destination_id);
            await dataDestination.delete();
            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }
}

module.exports = DestinationController

'use strict'

const Destination = use('App/Models/Destination')

class DestinationController {
    async getDestination({response}){
        try {
            const dataDestination = await Destination.query().select('id', 'destination_name', 'destination_description').orderBy('created_at', 'desc').fetch();
            return response.status(200).json({
                'message': 'Success',
                'dataDestination': dataDestination
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async retriveDestination({request, response}){
        try {
            const dataDestination = await Destination.find(request.post().destination_id);
            return response.status(200).json({
                'message': 'Success',
                'dataDestination': dataDestination
            });
        } catch (error) {
            return response.status(500).json({
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
            return response.status(200).json({
                'message': 'Insert destinasi sukses'
            });
        } catch (error) {
            return response.status(500).json({
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
            return response.status(200).json({
                'message': 'Update destinasi sukses'
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async deleteDestination({request, response}){
        try {
            const dataDestination = await Destination.find(request.post().destination_id);
            await dataDestination.delete();
            return response.status(200).json({
                'message': 'Delete destinasi sukses'
            });
        } catch (error) {
            return response.status(500).json({
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }
}

module.exports = DestinationController

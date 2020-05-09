'use strict'

const Admin = use('App/Models/Admin')
const User = use('App/Models/User')

class AdminController {

    async getAdmin({ response }){
        try {
            const dataAdmin = await Admin.query().with('user').fetch();
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataAdmin
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server'
            });
        }

    }

    async retriveAdmin({ request, response}){
        try {
            const dataAdmin = await Admin.find(request.post().admin_id);
            return response.json({
                'status': 200,
                'message': 'Success',
                'data': dataAdmin
            })
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
                'error': error
            });
        }
    }

    async storeAdmin({ request, response}){
        try {
            const dataAdmin = new Admin();
            const dataUser = new User();
            const date = new Date();

            dataUser.role_id = User.ADMIN;
            dataUser.email = request.post().email;
            dataUser.email_verified_at = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            dataUser.password = request.post().password;
            await dataUser.save();

            dataAdmin.user_id = dataUser.id;
            dataAdmin.admin_name = request.post().admin_name;
            dataAdmin.admin_phone = request.post().admin_phone;
            dataAdmin.admin_address = request.post().admin_address;
            dataAdmin.admin_born_place = request.post().admin_born_place;
            dataAdmin.admin_born_date = request.post().admin_born_date;
        
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

    async updateAdmin({ request, response}){
        try {
            const dataAdmin = await Admin.find(request.post().admin_id);
            const dataUser = await User.find(dataAdmin.user_id);

            dataUser.email = request.post().email;
            await dataUser.save();

            dataAdmin.admin_name = request.post().admin_name;
            dataAdmin.admin_phone = request.post().admin_phone;
            dataAdmin.admin_address = request.post().admin_address;
            dataAdmin.admin_born_place = request.post().admin_born_place;
            dataAdmin.admin_born_date = request.post().admin_born_date;
            await dataAdmin.save();
           
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

    async deleteAdmin({ request, response }){
        try {
            const dataAdmin = await Admin.find(request.post().admin_id);
            const dataUser = await User.find(dataAdmin.user_id);
            
            await dataUser.delete();

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

    async changePasswordAdmin({ request, response }){
        try {
            const dataAdmin = await Admin.find(request.post().admin_id);
            const dataUser = await User.find(dataAdmin.user_id);
            
            dataUser.password = request.post().new_admin_password;
            await dataUser.save();

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

module.exports = AdminController

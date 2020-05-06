'use strict'

const User = use('App/Models/User')
const Member = use('App/Models/Member')

class AuthController {
    async login({request, auth, response}){
        try {
            const token = await auth.attempt(request.post().email, request.post().password);
            if(token){
                return response.json({
                    'status': 200,
                    'message': 'Success',
                    'token': token
                });
            }
        } catch (error) {
            return response.json({
                'status': 401,
                'message': 'Email atau password salah'
            });
        }
    }

    async register({request, response}){
        try {
            const dataUser = new User();
            const dataMember = new Member();

            dataUser.role_id = User.MEMBER;
            dataUser.email = request.post().email;
            dataUser.email_verified = false;
            dataUser.password = request.post().password;
            await dataUser.save();
            
            dataMember.user_id = dataUser.id;
            dataMember.member_name = request.post().member_name;
            await dataMember.save();
            return response.json({
                'status': 200,
                'message': 'Success'
            });
        } catch (error) {
            return response.json({
                'status': 500,
                'message': 'Terjadi kesalahan pada server',
            });
        }
    }
    
    async logout({ auth, response }){
        try {
            const dataUser = await auth.getUser();
            const user = await User.find(dataUser.id)
            await auth
                .revokeTokensForUser(user)
            return response.json({
                'status': 200,
                'message': 'Berhasil logout'
            })
         } catch (error) {
             return response.json({
                 'status': 500,
                 'message': 'Error saat logout'
             });
         }
    }
}

module.exports = AuthController

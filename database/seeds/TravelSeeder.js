'use strict'

/*
|--------------------------------------------------------------------------
| TravelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database')
const Hash = use('Hash')

class TravelSeeder {
  async run () {
    const role = await Database.from('Roles')
        .insert([
          {
            'role_name': 'Admin',
            'created_at': Database.fn.now(),
            'updated_at': Database.fn.now()
          },
          {
            'role_name': 'Member',
            'created_at': Database.fn.now(),
            'updated_at': Database.fn.now()
          }
        ]);
  
    const user = await Database.from('users')
          .insert([
            {
              'role_id': 1,
              'email': 'admin@mail.com',
              'email_verified_at': Database.fn.now(),
              'password': await Hash.make('12345678'),
              'created_at': Database.fn.now(),
              'updated_at': Database.fn.now()
            },
            {
              'role_id': 2,
              'email': 'member@mail.com',
              'email_verified_at': Database.fn.now(),
              'password': await Hash.make('12345678'),
              'created_at': Database.fn.now(),
              'updated_at': Database.fn.now()
            }
          ]);

    const Admin = await Database.table('admins')
          .insert({
            'user_id': 1,
            'admin_name': 'Admin',
            'admin_phone': '08993970968',
            'admin_address': 'Bandung',
            'admin_born_place': 'Bandung',
            'admin_born_date': '2001-04-28',
            'created_at': Database.fn.now(),
            'updated_at': Database.fn.now()
          });

    const Member = await Database.table('members')
          .insert({
            'user_id': 2,
            'member_name': 'Member',
            'member_phone': '08993970968',
            'member_born_date': '2001-04-28',
            'created_at': Database.fn.now(),
            'updated_at': Database.fn.now()
          });

    const Destination = await Database.from('destinations')
          .insert([
            {
              'destination_name': 'Bali',
              'destination_description': '<p>Lorem ipsum dolor sit amet</p>',
              'created_at': Database.fn.now(),
              'updated_at': Database.fn.now()
            },
            {
              'destination_name': 'Lombok',
              'destination_description': '<p>Lorem ipsum dolor sit amet</p>',
              'created_at': Database.fn.now(),
              'updated_at': Database.fn.now()
            },
            {
              'destination_name': 'Malang',
              'destination_description': '<p>Lorem ipsum dolor sit amet</p>',
              'created_at': Database.fn.now(),
              'updated_at': Database.fn.now()
            }
          ]);
  }
}

module.exports = TravelSeeder

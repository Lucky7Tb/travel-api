'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
   Route.post('login', 'AuthController.login');
   Route.post('register', 'AuthController.register');
   Route.post('logout', 'AuthController.logout').middleware(['auth:api']);
}).prefix('api/auth');

Route.group(() => {
  // Admin route
  Route.get('admin', 'AdminController.getAdmin');
  Route.post('admin/retrive', 'AdminController.retriveAdmin');
  Route.post('admin', 'AdminController.storeAdmin').validator('StoreAdmin');
  Route.put('admin', 'AdminController.updateAdmin').validator('UpdateAdmin');
  Route.put('admin/changepassword', 'AdminController.changePasswordAdmin').validator('ChangePasswordAdmin');
  Route.delete('admin', 'AdminController.deleteAdmin');

  // Destination route
  Route.get('destination', 'DestinationController.getDestination');
  Route.post('destination/retrive', 'DestinationController.retriveDestination');
  Route.post('destination', 'DestinationController.storeDestination').validator('Destination');
  Route.put('destination', 'DestinationController.updateDestination').validator('Destination');
  Route.delete('destination', 'DestinationController.deleteDestination');

  //Tour Package route
  Route.get('tourpackage', 'TourPackageController.getTourPackage');
  Route.post('tourpackage/retrive', 'TourPackageController.retriveTourPackage');
  Route.post('tourpackage', 'TourPackageController.storeTourPackage').validator('TourPackage');
  Route.put('tourpackage', 'TourPackageController.updateTourPackage').validator('TourPackage');
  Route.delete('tourpackage', 'TourPackageController.deleteTourPackage');

  //Tour Package Schedule route
  Route.get('tourpackageschedule', 'TourPackageScheduleController.getTourPackageSchedule');
  Route.post('tourpackageschedule/retrive', 'TourPackageScheduleController.retriveTourPackageSchedule');
  Route.post('tourpackageschedule', 'TourPackageScheduleController.storeTourPackageSchedule').validator('TourPackageSchedule');
  Route.put('tourpackageschedule', 'TourPackageScheduleController.updateTourPackageSchedule').validator('TourPackageSchedule');
  Route.delete('tourpackageschedule', 'TourPackageScheduleController.deleteTourPackageSchedule');

}).prefix('api')

Route.get('tes', 'TourPackageController.tes')
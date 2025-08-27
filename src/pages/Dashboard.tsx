import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, CreditCard, User, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const upcomingBookings = [
    {
      id: 1,
      turfName: 'Champions Football Ground',
      location: 'Visnagar Sports Complex',
      date: '2024-12-28',
      time: '18:00 - 19:00',
      duration: 1,
      price: 800,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
    },
    {
      id: 2,
      turfName: 'Elite Basketball Arena',
      location: 'Central Visnagar',
      date: '2024-12-30',
      time: '16:00 - 18:00',
      duration: 2,
      price: 1200,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
    }
  ];

  const pastBookings = [
    {
      id: 3,
      turfName: 'Green Valley Cricket Ground',
      location: 'NH Highway, Visnagar',
      date: '2024-12-20',
      time: '09:00 - 12:00',
      duration: 3,
      price: 3600,
      status: 'completed',
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg'
    }
  ];

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    joinDate: 'January 2024',
    totalBookings: 15,
    favoritesSport: 'Football'
  };

  const renderBookingsTab = () => (
    <div className="space-y-6">
      {/* Upcoming Bookings */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Bookings</h3>
        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={booking.image}
                      alt={booking.turfName}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{booking.turfName}</h4>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {booking.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {booking.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {booking.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">₹{booking.price}</div>
                    <div className="text-sm text-gray-600">{booking.duration} hour(s)</div>
                    <div className="mt-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-xl">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No upcoming bookings</p>
          </div>
        )}
      </div>

      {/* Past Bookings */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Past Bookings</h3>
        {pastBookings.length > 0 ? (
          <div className="space-y-4">
            {pastBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={booking.image}
                      alt={booking.turfName}
                      className="w-16 h-16 rounded-lg object-cover opacity-75"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{booking.turfName}</h4>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {booking.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {booking.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {booking.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-600">₹{booking.price}</div>
                    <div className="text-sm text-gray-600">{booking.duration} hour(s)</div>
                    <div className="mt-2">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View Receipt
                  </button>
                  <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    Book Again
                  </button>
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Rate & Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-xl">
            <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No past bookings</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={userProfile.name}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            readOnly
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={userProfile.email}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            readOnly
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={userProfile.phone}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Sport</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="badminton">Badminton</option>
          </select>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userProfile.totalBookings}</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">₹12,400</div>
            <div className="text-sm text-gray-600">Total Spent</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Update Profile
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your bookings and profile</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Bookings</p>
                <p className="text-2xl font-semibold text-gray-900">{upcomingBookings.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-semibold text-gray-900">{userProfile.totalBookings}</p>
              </div>
              <Star className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-semibold text-gray-900">₹12,400</p>
              </div>
              <CreditCard className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Member Since</p>
                <p className="text-2xl font-semibold text-gray-900">{userProfile.joinDate}</p>
              </div>
              <User className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'bookings'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Profile Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && renderBookingsTab()}
            {activeTab === 'profile' && renderProfileTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
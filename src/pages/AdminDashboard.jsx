import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye,
  BarChart3,
  TrendingUp,
  Calendar,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      ownerName: 'Rajesh Patel',
      ownerEmail: 'rajesh@example.com',
      ownerPhone: '+91 98765 43210',
      turfName: 'Victory Sports Arena',
      location: 'Near Railway Station, Visnagar',
      sports: ['Football', 'Cricket'],
      price: 900,
      description: 'Modern sports facility with professional equipment and excellent maintenance.',
      images: [
        'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
        'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg'
      ],
      amenities: ['Parking', 'Restrooms', 'Floodlights', 'Changing Rooms'],
      submittedDate: '2024-12-25',
      status: 'pending'
    },
    {
      id: 2,
      ownerName: 'Priya Shah',
      ownerEmail: 'priya@example.com',
      ownerPhone: '+91 87654 32109',
      turfName: 'Elite Basketball Court',
      location: 'College Road, Visnagar',
      sports: ['Basketball'],
      price: 700,
      description: 'Indoor basketball court with air conditioning and professional flooring.',
      images: [
        'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
      ],
      amenities: ['AC Indoor', 'Scoreboard', 'Locker Rooms'],
      submittedDate: '2024-12-24',
      status: 'pending'
    }
  ]);

  const [approvedTurfs, setApprovedTurfs] = useState([
    {
      id: 3,
      ownerName: 'Amit Kumar',
      turfName: 'Champions Football Ground',
      location: 'Visnagar Sports Complex',
      sports: ['Football', 'Cricket'],
      price: 800,
      approvedDate: '2024-12-20',
      status: 'active',
      totalBookings: 45,
      revenue: 36000
    }
  ]);

  const handleApproveRequest = (requestId) => {
    const request = pendingRequests.find(req => req.id === requestId);
    if (request) {
      const approvedTurf = {
        ...request,
        id: Date.now(),
        approvedDate: new Date().toISOString().split('T')[0],
        status: 'active',
        totalBookings: 0,
        revenue: 0
      };
      
      setApprovedTurfs(prev => [...prev, approvedTurf]);
      setPendingRequests(prev => prev.filter(req => req.id !== requestId));
    }
  };

  const handleRejectRequest = (requestId) => {
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const stats = {
    totalTurfs: approvedTurfs.length,
    pendingRequests: pendingRequests.length,
    totalBookings: approvedTurfs.reduce((sum, turf) => sum + turf.totalBookings, 0),
    totalRevenue: approvedTurfs.reduce((sum, turf) => sum + turf.revenue, 0)
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Turfs</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalTurfs}</p>
            </div>
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Requests</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.pendingRequests}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalBookings}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">New turf "Victory Sports Arena" submitted for approval</span>
            <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Champions Football Ground received 5 new bookings</span>
            <span className="text-sm text-gray-500 ml-auto">4 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-gray-700">Elite Basketball Court pending approval for 2 days</span>
            <span className="text-sm text-gray-500 ml-auto">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPendingRequests = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Pending Turf Requests</h3>
      
      {pendingRequests.length > 0 ? (
        <div className="space-y-6">
          {pendingRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Request Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{request.turfName}</h4>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {request.location}
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{request.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Owner:</span>
                      <p className="font-medium">{request.ownerName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Price per hour:</span>
                      <p className="font-medium text-green-600">₹{request.price}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Email:</span>
                      <p className="font-medium">{request.ownerEmail}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Phone:</span>
                      <p className="font-medium">{request.ownerPhone}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Sports:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {request.sports.map((sport, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Amenities:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {request.amenities.map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div>
                  <span className="text-sm text-gray-600 block mb-2">Images:</span>
                  <div className="space-y-2">
                    {request.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${request.turfName} ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleApproveRequest(request.id)}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleRejectRequest(request.id)}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Reject</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye className="w-5 h-5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl">
          <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No pending requests</p>
        </div>
      )}
    </div>
  );

  const renderApprovedTurfs = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Approved Turfs</h3>
      
      {approvedTurfs.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Turf Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {approvedTurfs.map((turf) => (
                  <tr key={turf.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{turf.turfName}</div>
                        <div className="text-sm text-gray-500">{turf.location}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {turf.sports.map((sport, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {sport}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {turf.ownerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                      ₹{turf.price}/hr
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {turf.totalBookings}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ₹{turf.revenue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No approved turfs yet</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage turf requests and platform operations</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors relative ${
                  activeTab === 'pending'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending Requests
                {pendingRequests.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {pendingRequests.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'approved'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Approved Turfs
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'pending' && renderPendingRequests()}
            {activeTab === 'approved' && renderApprovedTurfs()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
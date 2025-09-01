import React, { useState } from 'react';
import { 
  Plus, 
  MapPin, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  Edit,
  Calendar,
  DollarSign,
  Users,
  Star
} from 'lucide-react';

const TurfOwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddTurfForm, setShowAddTurfForm] = useState(false);
  const [formData, setFormData] = useState({
    turfName: '',
    location: '',
    description: '',
    price: '',
    sports: [],
    amenities: [],
    images: []
  });

  const [myTurfs, setMyTurfs] = useState([
    {
      id: 1,
      name: 'Champions Football Ground',
      location: 'Visnagar Sports Complex',
      price: 800,
      status: 'approved',
      submittedDate: '2024-12-20',
      approvedDate: '2024-12-21',
      totalBookings: 45,
      revenue: 36000,
      rating: 4.8,
      sports: ['Football', 'Cricket']
    }
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 2,
      name: 'New Basketball Arena',
      location: 'Central Visnagar',
      price: 700,
      status: 'pending',
      submittedDate: '2024-12-25',
      sports: ['Basketball']
    }
  ]);

  const sportsOptions = ['Football', 'Cricket', 'Basketball', 'Tennis', 'Badminton', 'Volleyball'];
  const amenitiesOptions = [
    'Parking', 'Restrooms', 'Floodlights', 'Changing Rooms', 
    'AC Indoor', 'Scoreboard', 'Locker Rooms', 'Cafeteria', 
    'First Aid', 'Security', 'WiFi'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSportToggle = (sport) => {
    setFormData(prev => ({
      ...prev,
      sports: prev.sports.includes(sport)
        ? prev.sports.filter(s => s !== sport)
        : [...prev.sports, sport]
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      name: formData.turfName,
      location: formData.location,
      price: parseInt(formData.price),
      status: 'pending',
      submittedDate: new Date().toISOString().split('T')[0],
      sports: formData.sports,
      description: formData.description,
      amenities: formData.amenities
    };

    setPendingRequests(prev => [...prev, newRequest]);
    setFormData({
      turfName: '',
      location: '',
      description: '',
      price: '',
      sports: [],
      amenities: [],
      images: []
    });
    setShowAddTurfForm(false);
  };

  const stats = {
    totalTurfs: myTurfs.length,
    pendingRequests: pendingRequests.length,
    totalBookings: myTurfs.reduce((sum, turf) => sum + turf.totalBookings, 0),
    totalRevenue: myTurfs.reduce((sum, turf) => sum + turf.revenue, 0)
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">My Turfs</p>
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

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setShowAddTurfForm(true)}
            className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-green-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
          >
            <Plus className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-medium">Add New Turf</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium">View Analytics</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 font-medium">Manage Bookings</span>
          </button>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Champions Football Ground</p>
              <p className="text-sm text-gray-600">Today, 18:00 - 19:00 • Rahul Patel</p>
            </div>
            <span className="text-green-600 font-semibold">₹800</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Champions Football Ground</p>
              <p className="text-sm text-gray-600">Tomorrow, 16:00 - 18:00 • Priya Shah</p>
            </div>
            <span className="text-blue-600 font-semibold">₹1600</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyTurfs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">My Turfs</h3>
        <button
          onClick={() => setShowAddTurfForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Turf</span>
        </button>
      </div>

      {/* Approved Turfs */}
      {myTurfs.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Active Turfs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myTurfs.map((turf) => (
              <div key={turf.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">{turf.name}</h5>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {turf.location}
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">Price:</span>
                    <p className="font-semibold text-green-600">₹{turf.price}/hr</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{turf.rating}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Bookings:</span>
                    <p className="font-semibold">{turf.totalBookings}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Revenue:</span>
                    <p className="font-semibold">₹{turf.revenue.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {turf.sports.map((sport, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {sport}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pending Requests */}
      {pendingRequests.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Pending Approval</h4>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">{request.name}</h5>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {request.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {request.sports.map((sport, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                    <p className="text-sm text-gray-600 mt-2">Submitted: {request.submittedDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {myTurfs.length === 0 && pendingRequests.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No turfs added yet</p>
          <button
            onClick={() => setShowAddTurfForm(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Add Your First Turf
          </button>
        </div>
      )}
    </div>
  );

  const renderAddTurfForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Add New Turf</h3>
            <button
              onClick={() => setShowAddTurfForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmitRequest} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Turf Name *
              </label>
              <input
                type="text"
                value={formData.turfName}
                onChange={(e) => handleInputChange('turfName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter turf name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter complete address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Describe your turf facilities and features"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Hour (₹) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter hourly rate"
                min="100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sports Available *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sportsOptions.map((sport) => (
                  <label key={sport} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sports.includes(sport)}
                      onChange={() => handleSportToggle(sport)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">{sport}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenitiesOptions.map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Submission Guidelines</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Ensure all information is accurate and complete</li>
                <li>• Upload high-quality images of your turf</li>
                <li>• Admin approval typically takes 24-48 hours</li>
                <li>• You'll be notified via email once approved</li>
              </ul>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setShowAddTurfForm(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Turf Owner Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your turfs and track performance</p>
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
                onClick={() => setActiveTab('turfs')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'turfs'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Turfs
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'bookings'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'turfs' && renderMyTurfs()}
            {activeTab === 'bookings' && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Bookings management coming soon</p>
              </div>
            )}
            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Analytics dashboard coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Turf Modal */}
      {showAddTurfForm && renderAddTurfForm()}
    </div>
  );
};

export default TurfOwnerDashboard;
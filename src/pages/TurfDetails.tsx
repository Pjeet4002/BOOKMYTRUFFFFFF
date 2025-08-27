import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Wifi, Car, Camera, Shield } from 'lucide-react';

const TurfDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in real app, fetch from API
  const turf = {
    id: 1,
    name: 'Champions Football Ground',
    location: 'Visnagar Sports Complex, Near College Road, Visnagar',
    price: 800,
    rating: 4.8,
    reviews: 124,
    description: 'Premier football ground with professional-grade artificial turf. Perfect for matches, training sessions, and tournaments. Located in the heart of Visnagar with excellent facilities.',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg',
      'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    sports: ['Football', 'Cricket'],
    amenities: [
      { icon: <Wifi className="w-5 h-5" />, name: 'Free WiFi' },
      { icon: <Car className="w-5 h-5" />, name: 'Parking Available' },
      { icon: <Camera className="w-5 h-5" />, name: 'Floodlights' },
      { icon: <Shield className="w-5 h-5" />, name: 'Security' },
      { icon: <Users className="w-5 h-5" />, name: 'Changing Rooms' },
      { icon: <Clock className="w-5 h-5" />, name: '24/7 Open' }
    ],
    specifications: {
      size: '100m x 60m',
      capacity: '22 players',
      surface: 'Artificial Grass',
      lighting: 'LED Floodlights'
    },
    timeSlots: [
      { time: '06:00 - 07:00', available: true },
      { time: '07:00 - 08:00', available: true },
      { time: '08:00 - 09:00', available: false },
      { time: '09:00 - 10:00', available: true },
      { time: '10:00 - 11:00', available: true },
      { time: '18:00 - 19:00', available: true },
      { time: '19:00 - 20:00', available: false },
      { time: '20:00 - 21:00', available: true },
    ]
  };

  const reviews = [
    {
      id: 1,
      user: 'Rahul Patel',
      rating: 5,
      comment: 'Excellent turf with great facilities. The artificial grass quality is top-notch!',
      date: '2 days ago'
    },
    {
      id: 2,
      user: 'Priya Shah',
      rating: 4,
      comment: 'Good location and well-maintained. Parking is convenient.',
      date: '1 week ago'
    },
    {
      id: 3,
      user: 'Amit Kumar',
      rating: 5,
      comment: 'Best football ground in Visnagar. Highly recommended for tournaments.',
      date: '2 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-500 hover:text-green-600">Home</Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <Link to="/turfs" className="text-gray-500 hover:text-green-600">Turfs</Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li className="text-green-600">{turf.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="aspect-video">
                <img 
                  src={turf.images[selectedImage]} 
                  alt={turf.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {turf.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-green-600' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Turf Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{turf.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{turf.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{turf.rating} ({turf.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">₹{turf.price}</div>
                  <div className="text-gray-600">per hour</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {turf.sports.map((sport, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {sport}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{turf.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {turf.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-green-600">{amenity.icon}</div>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-semibold">{turf.specifications.size}</span>
                </div>
                <div>
                  <span className="text-gray-600">Capacity:</span>
                  <span className="ml-2 font-semibold">{turf.specifications.capacity}</span>
                </div>
                <div>
                  <span className="text-gray-600">Surface:</span>
                  <span className="ml-2 font-semibold">{turf.specifications.surface}</span>
                </div>
                <div>
                  <span className="text-gray-600">Lighting:</span>
                  <span className="ml-2 font-semibold">{turf.specifications.lighting}</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews ({reviews.length})</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">{review.user}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Turf</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
                <div className="grid grid-cols-1 gap-2">
                  {turf.timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      disabled={!slot.available}
                      className={`p-3 text-left rounded-lg border transition-colors ${
                        slot.available
                          ? 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                          : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{slot.time}</span>
                        <span className={`text-sm ${slot.available ? 'text-green-600' : 'text-gray-400'}`}>
                          {slot.available ? 'Available' : 'Booked'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-green-600">₹{turf.price}</span>
                </div>
              </div>

              <Link
                to={`/booking/${turf.id}`}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-center block"
              >
                Book Now
              </Link>

              <p className="text-sm text-gray-600 text-center mt-3">
                Free cancellation up to 24 hours before booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star, Users, Zap, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredTurfs = [
    {
      id: 1,
      name: 'Champions Football Ground',
      location: 'Visnagar Sports Complex',
      price: '₹800/hour',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      sports: ['Football', 'Cricket'],
      features: ['Floodlights', 'Parking', 'Restrooms']
    },
    {
      id: 2,
      name: 'Elite Basketball Arena',
      location: 'Central Visnagar',
      price: '₹600/hour',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
      sports: ['Basketball'],
      features: ['AC Indoor', 'Scoreboard', 'Locker Rooms']
    },
    {
      id: 3,
      name: 'Green Valley Cricket Ground',
      location: 'NH Highway, Visnagar',
      price: '₹1200/hour',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg',
      sports: ['Cricket'],
      features: ['Professional Pitch', 'Pavilion', 'Catering']
    }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Easy Search',
      description: 'Find the perfect turf for your sport in Visnagar with our advanced search filters.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Instant Booking',
      description: 'Book your slot in seconds with our streamlined booking process.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: 'Safe and secure payment gateway for all your transactions.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Updates',
      description: 'Get instant notifications about your bookings and availability.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Book Your <span className="text-yellow-400">Dream Turf</span> in Visnagar
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Discover premium sports facilities and book instantly. Play your favorite sport at the best venues in town.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-2xl">
                <div className="flex items-center">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for football, cricket, basketball..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 text-gray-900 bg-transparent focus:outline-none text-lg"
                  />
                  <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-semibold">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BookMyTurf?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make sports booking simple, fast, and reliable for everyone in Visnagar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Turfs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Turfs in Visnagar</h2>
            <p className="text-xl text-gray-600">Premium sports facilities waiting for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTurfs.map((turf) => (
              <div key={turf.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">{turf.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{turf.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{turf.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{turf.rating} ({turf.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {turf.sports.map((sport, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {sport}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {turf.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/turf/${turf.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-center hover:bg-gray-200 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/booking/${turf.id}`}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition-colors duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/turfs"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              View All Turfs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Turfs Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-green-100">Sports Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, CreditCard, Check } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    timeSlot: '',
    duration: 1,
    playerCount: 10,
    playerName: '',
    phoneNumber: '',
    email: '',
    paymentMethod: 'upi'
  });

  const turf = {
    id: 1,
    name: 'Champions Football Ground',
    location: 'Visnagar Sports Complex',
    price: 800,
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  };

  const timeSlots = [
    '06:00 - 07:00', '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00',
    '10:00 - 11:00', '11:00 - 12:00', '18:00 - 19:00', '19:00 - 20:00',
    '20:00 - 21:00', '21:00 - 22:00'
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      alert('Booking confirmed! Redirecting to dashboard...');
      navigate('/dashboard');
    }
  };

  const calculateTotal = () => {
    return turf.price * bookingData.duration;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Select Date & Time</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline mr-2" />
          Select Date
        </label>
        <input
          type="date"
          value={bookingData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="w-4 h-4 inline mr-2" />
          Select Time Slot
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => handleInputChange('timeSlot', slot)}
              className={`p-3 text-center rounded-lg border transition-colors ${
                bookingData.timeSlot === slot
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-300 hover:border-green-300 hover:bg-green-50'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (hours)
          </label>
          <select
            value={bookingData.duration}
            onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value={1}>1 Hour</option>
            <option value={2}>2 Hours</option>
            <option value={3}>3 Hours</option>
            <option value={4}>4 Hours</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            Number of Players
          </label>
          <input
            type="number"
            value={bookingData.playerCount}
            onChange={(e) => handleInputChange('playerCount', parseInt(e.target.value))}
            min="1"
            max="22"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={bookingData.playerName}
          onChange={(e) => handleInputChange('playerName', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={bookingData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={bookingData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="your.email@example.com"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{bookingData.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{bookingData.timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{bookingData.duration} hour(s)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Players:</span>
            <span className="font-medium">{bookingData.playerCount}</span>
          </div>
          <div className="border-t border-gray-300 pt-2 mt-3">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount:</span>
              <span className="text-green-600">₹{calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <CreditCard className="w-4 h-4 inline mr-2" />
          Payment Method
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              value="upi"
              checked={bookingData.paymentMethod === 'upi'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <span>UPI Payment</span>
          </label>
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              value="card"
              checked={bookingData.paymentMethod === 'card'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <span>Credit/Debit Card</span>
          </label>
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              value="wallet"
              checked={bookingData.paymentMethod === 'wallet'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <span>Digital Wallet</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= stepNumber 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-20 h-0.5 ${
                      step > stepNumber ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-16 mt-2">
              <span className={`text-sm ${step >= 1 ? 'text-green-600' : 'text-gray-500'}`}>
                Date & Time
              </span>
              <span className={`text-sm ${step >= 2 ? 'text-green-600' : 'text-gray-500'}`}>
                Details
              </span>
              <span className={`text-sm ${step >= 3 ? 'text-green-600' : 'text-gray-500'}`}>
                Payment
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <form onSubmit={handleSubmit}>
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}

                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Previous
                      </button>
                    )}
                    <button
                      type="submit"
                      className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      {step === 3 ? 'Confirm Booking' : 'Continue'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Turf Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Details</h3>
                
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-gray-900">{turf.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{turf.location}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per hour:</span>
                    <span className="font-medium">₹{turf.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{bookingData.duration} hour(s)</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-green-600">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    ✓ Free cancellation up to 24 hours before booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
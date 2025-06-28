import React from 'react';
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-blue-600/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Leading Business Solutions in Dubai
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Your
              <span className="block text-blue-400">Business Growth</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              AMEG Dubai provides comprehensive business solutions, consulting services, and innovative strategies to help your company thrive in the competitive market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:scale-105">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-3 mx-auto">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-3 mx-auto">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-3 mx-auto">
                  <Shield className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business team working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
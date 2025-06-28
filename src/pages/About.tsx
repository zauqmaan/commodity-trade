import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Globe,
  CheckCircle,
  Calendar,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2000', event: 'Company Founded', description: 'AMEGT established in Dubai' },
    { year: '2005', event: 'Regional Expansion', description: 'Extended operations across Middle East' },
    { year: '2010', event: 'African Markets', description: 'Entered African commodity markets' },
    { year: '2015', event: 'ISO Certification', description: 'Achieved international quality standards' },
    { year: '2020', event: '20+ Countries', description: 'Expanded to over 20 countries' },
    { year: '2024', event: 'Digital Transformation', description: 'Modernized operations with technology' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'HACCP', description: 'Food Safety Management' },
    { name: 'Dubai Chamber', description: 'Member of Dubai Chamber of Commerce' },
    { name: 'UAE Trade License', description: 'Licensed for international trade' }
  ];

  const values = [
    {
      icon: <Target className="text-green-600" size={32} />,
      title: "Mission",
      description: "To connect global markets by providing premium agro-commodities while maintaining the highest standards of quality and service excellence."
    },
    {
      icon: <Eye className="text-green-600" size={32} />,
      title: "Vision",
      description: "To be the leading agro-commodity trading company in the region, recognized for reliability, quality, and innovation in global trade."
    },
    {
      icon: <Heart className="text-green-600" size={32} />,
      title: "Values",
      description: "Integrity, quality, customer satisfaction, and sustainable trading practices guide every aspect of our business operations."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">About AMEGT</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Africa & Middle East General Trading
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2000, AMEGT Dubai has grown to become a trusted name in agro-commodity trading, 
              connecting markets across Africa and the Middle East with premium quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Two Decades of Trading Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AMEGT Dubai was founded with a vision to bridge the gap between agricultural producers and global markets. 
                Over the past 20+ years, we have built strong relationships with suppliers and customers worldwide, 
                establishing ourselves as a reliable partner in the agro-commodity trade.
              </p>
              <p className="text-gray-600 mb-8">
                Our expertise spans across various agricultural products including rice, sugar, cooking oil, and wheat. 
                We pride ourselves on maintaining the highest quality standards while ensuring competitive pricing and 
                timely delivery to our customers across 20+ countries.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Successful Shipments</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AMEGT Dubai office"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">Since 2000</div>
                <div className="text-sm">Trusted Trading Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and guided by clear objectives, AMEGT continues to lead in the agro-commodity trading sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped AMEGT into the leading agro-commodity trading company it is today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certifications & Memberships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is demonstrated through various international certifications and memberships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-green-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Quality Commitment</h3>
              <p className="text-green-100 max-w-2xl mx-auto">
                All our products undergo rigorous quality control processes and meet international standards. 
                We maintain complete traceability from source to destination, ensuring our customers receive 
                only the finest agro-commodities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
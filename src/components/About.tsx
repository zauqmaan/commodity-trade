import React from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Mission",
      description: "To provide innovative business solutions that drive growth and success for our clients in Dubai and beyond."
    },
    {
      icon: <Eye className="text-blue-600" size={24} />,
      title: "Vision",
      description: "To be the leading business consultancy in the region, known for excellence and transformative results."
    },
    {
      icon: <Heart className="text-blue-600" size={24} />,
      title: "Values",
      description: "Integrity, innovation, and client success are at the core of everything we do."
    },
    {
      icon: <Zap className="text-blue-600" size={24} />,
      title: "Excellence",
      description: "We deliver exceptional results through cutting-edge strategies and dedicated service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About AMEG</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Building Success Stories Since 2008
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AMEG Dubai has been at the forefront of business transformation, helping companies navigate challenges and capitalize on opportunities in the dynamic Middle Eastern market.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced professionals combines local market knowledge with international best practices to deliver solutions that drive real, measurable results for our clients.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team meeting"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
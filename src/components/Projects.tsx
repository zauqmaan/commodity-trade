import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Launch",
      category: "Digital Transformation",
      description: "Complete digital transformation for a major retail client, resulting in 300% increase in online sales.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024",
      tags: ["E-commerce", "Strategy", "Implementation"]
    },
    {
      title: "Financial Services Optimization",
      category: "Financial Advisory",
      description: "Streamlined operations and improved compliance for a leading financial services company.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024",
      tags: ["Finance", "Compliance", "Optimization"]
    },
    {
      title: "Healthcare System Integration",
      category: "Technology Integration",
      description: "Integrated multiple healthcare systems to improve patient care and operational efficiency.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023",
      tags: ["Healthcare", "Integration", "Efficiency"]
    },
    {
      title: "Manufacturing Process Automation",
      category: "Process Optimization",
      description: "Automated manufacturing processes resulting in 40% cost reduction and improved quality.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023",
      tags: ["Manufacturing", "Automation", "Cost Reduction"]
    },
    {
      title: "Hospitality Chain Expansion",
      category: "Market Expansion",
      description: "Successful expansion strategy for a hospitality chain across 5 new markets in the region.",
      image: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023",
      tags: ["Hospitality", "Expansion", "Strategy"]
    },
    {
      title: "Startup Incubation Program",
      category: "Business Development",
      description: "Mentored and supported 20+ startups through our comprehensive business development program.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023",
      tags: ["Startups", "Mentoring", "Innovation"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Success Stories & Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                  View Case Study
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
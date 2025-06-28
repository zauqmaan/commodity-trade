import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gulfood 2024 Exhibition',
      category: 'Events',
      description: 'AMEGT team at the largest food and beverage trade show in the Middle East'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Client Meeting Dubai',
      category: 'Events',
      description: 'Strategic partnership discussion with international clients'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Container Loading',
      category: 'Shipments',
      description: 'Premium rice shipment being loaded for export to East Africa'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Control Lab',
      category: 'Team',
      description: 'Our quality assurance team ensuring product standards'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Rice Varieties',
      category: 'Shipments',
      description: 'Different grades of basmati rice ready for export'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/4110221/pexels-photo-4110221.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sugar Processing',
      category: 'Shipments',
      description: 'High-quality refined sugar in our warehouse facility'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Training Session',
      category: 'Team',
      description: 'Regular training programs for our trading team'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wheat Inspection',
      category: 'Shipments',
      description: 'Quality inspection of wheat grains before shipment'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Company Event',
      category: 'Events',
      description: 'AMEGT annual celebration with team and partners'
    }
  ];

  const filters = ['All', 'Events', 'Shipments', 'Team'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Events & Exhibitions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our journey through trade exhibitions, client meetings, quality processes, 
              and team activities that showcase our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-gray-200">
                {filteredItems[selectedImage].description}
              </p>
            </div>
            
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us at Our Next Event
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest exhibitions and events. Connect with us to explore 
            business opportunities and learn about our premium agro-commodities.
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors">
            Contact Us for Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
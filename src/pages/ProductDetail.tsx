import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle, Package, Truck, Award } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();

  const productData: { [key: string]: any } = {
    rice: {
      name: 'Premium Rice',
      hero: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Our premium rice collection features the finest varieties sourced from trusted farms across Asia. Each grain is carefully selected and processed to maintain its natural flavor, aroma, and nutritional value.',
      specifications: [
        { label: 'Moisture Content', value: 'Max 14%' },
        { label: 'Broken Grains', value: 'Max 5%' },
        { label: 'Foreign Matter', value: 'Max 0.1%' },
        { label: 'Grain Length', value: '6-7mm (Basmati)' },
        { label: 'Protein Content', value: '6-8%' },
        { label: 'Shelf Life', value: '24 months' }
      ],
      packaging: [
        '1kg Consumer Packs',
        '5kg Family Packs',
        '10kg Bulk Packs',
        '25kg Commercial Bags',
        '50kg Industrial Bags',
        'Custom Packaging Available'
      ],
      varieties: [
        { name: 'Basmati Rice', description: 'Premium long-grain aromatic rice' },
        { name: 'Jasmine Rice', description: 'Fragrant Thai rice variety' },
        { name: 'Long Grain Rice', description: 'Versatile cooking rice' },
        { name: 'Parboiled Rice', description: 'Nutritionally enhanced rice' }
      ]
    },
    sugar: {
      name: 'Sugar',
      hero: 'https://images.pexels.com/photos/4110221/pexels-photo-4110221.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'High-quality sugar products refined to meet international food grade standards. Our sugar is sourced from premium sugar cane and processed using advanced refining techniques.',
      specifications: [
        { label: 'Polarization', value: 'Min 99.8°' },
        { label: 'Moisture', value: 'Max 0.04%' },
        { label: 'Ash Content', value: 'Max 0.04%' },
        { label: 'Color (ICUMSA)', value: 'Max 45 IU' },
        { label: 'Granulation', value: 'Fine/Medium/Coarse' },
        { label: 'Shelf Life', value: '36 months' }
      ],
      packaging: [
        '1kg Retail Packs',
        '2kg Family Packs',
        '5kg Bulk Packs',
        '25kg Commercial Bags',
        '50kg Industrial Bags',
        'Bulk Container Loading'
      ],
      varieties: [
        { name: 'Refined White Sugar', description: 'Premium grade white sugar' },
        { name: 'Raw Sugar', description: 'Unrefined natural sugar' },
        { name: 'Brown Sugar', description: 'Natural brown sugar' },
        { name: 'Caster Sugar', description: 'Fine grain baking sugar' }
      ]
    },
    oil: {
      name: 'Cooking Oil',
      hero: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Premium edible oils processed using modern techniques to retain natural nutrients and flavor. Our oils are suitable for various culinary applications and meet international food safety standards.',
      specifications: [
        { label: 'Free Fatty Acid', value: 'Max 0.1%' },
        { label: 'Peroxide Value', value: 'Max 2.0 meq O2/kg' },
        { label: 'Moisture', value: 'Max 0.1%' },
        { label: 'Iodine Value', value: '120-145' },
        { label: 'Smoke Point', value: '230°C+' },
        { label: 'Shelf Life', value: '18 months' }
      ],
      packaging: [
        '500ml Bottles',
        '1L Consumer Bottles',
        '2L Family Bottles',
        '5L Jerry Cans',
        '20L Commercial Containers',
        'Bulk Tanker Supply'
      ],
      varieties: [
        { name: 'Sunflower Oil', description: 'Light, versatile cooking oil' },
        { name: 'Palm Oil', description: 'Tropical cooking oil' },
        { name: 'Soybean Oil', description: 'Neutral flavor cooking oil' },
        { name: 'Canola Oil', description: 'Heart-healthy cooking oil' }
      ]
    },
    wheat: {
      name: 'Wheat',
      hero: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'High-quality wheat grains sourced from premium farming regions. Our wheat is carefully selected and tested to ensure optimal protein content and milling characteristics.',
      specifications: [
        { label: 'Protein Content', value: '11-14%' },
        { label: 'Moisture', value: 'Max 12.5%' },
        { label: 'Test Weight', value: 'Min 78 kg/hl' },
        { label: 'Foreign Matter', value: 'Max 2%' },
        { label: 'Damaged Kernels', value: 'Max 3%' },
        { label: 'Falling Number', value: 'Min 250 seconds' }
      ],
      packaging: [
        '25kg Bags',
        '50kg Bags',
        '1MT Bulk Bags',
        'Bulk Container Loading',
        'Custom Packaging',
        'Private Labeling'
      ],
      varieties: [
        { name: 'Hard Wheat', description: 'High protein bread wheat' },
        { name: 'Soft Wheat', description: 'Low protein pastry wheat' },
        { name: 'Durum Wheat', description: 'Pasta making wheat' },
        { name: 'Feed Wheat', description: 'Animal feed grade wheat' }
      ]
    },
    'private-label': {
      name: 'Private Label Products',
      hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Custom packaging and branding solutions for all our agro-commodity products. We offer comprehensive private labeling services to help you establish your brand in the market with professional packaging and design.',
      specifications: [
        { label: 'Design Services', value: 'Professional Design Team' },
        { label: 'Print Quality', value: 'High-Resolution Printing' },
        { label: 'Material Options', value: 'Multiple Packaging Materials' },
        { label: 'Minimum Order', value: 'Flexible MOQ' },
        { label: 'Lead Time', value: '4-6 weeks' },
        { label: 'Certification', value: 'Food Grade Compliant' }
      ],
      packaging: [
        'Custom Branded Bags',
        'Retail Packaging',
        'Bulk Packaging',
        'Premium Gift Boxes',
        'Export Packaging',
        'Multi-Language Labels'
      ],
      varieties: [
        { name: 'Custom Branding', description: 'Your logo and brand identity' },
        { name: 'Market-Specific Design', description: 'Tailored for target markets' },
        { name: 'Multi-Product Branding', description: 'Consistent brand across products' },
        { name: 'Seasonal Packaging', description: 'Special edition packaging' }
      ]
    }
  };

  const product = productData[productId || ''];

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-50 to-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Link
                to="/products"
                className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 group transition-colors duration-300"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Products
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center hover:scale-105 hover:shadow-lg"
                >
                  Request Quote
                </Link>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 group">
                  <Download size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Download Specs</span>
                </button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={product.hero}
                alt={product.name}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Specifications */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="flex items-center mb-6">
                <CheckCircle className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Specifications</h3>
              </div>
              <div className="space-y-4">
                {product.specifications.map((spec: any, index: number) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300 px-2 rounded">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="flex items-center mb-6">
                <Package className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Packaging Options</h3>
              </div>
              <ul className="space-y-3">
                {product.packaging.map((pack: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 p-2 rounded hover:bg-gray-50">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {pack}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="flex items-center mb-6">
                <Award className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 group">
                  <CheckCircle className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-sm font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 group">
                  <CheckCircle className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-sm font-medium">HACCP Certified</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 group">
                  <CheckCircle className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-sm font-medium">Food Grade</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 group">
                  <CheckCircle className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-sm font-medium">Export Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Available Varieties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.varieties.map((variety: any, index: number) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg hover:border-green-200 transition-all duration-500 group bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">{variety.name}</h3>
                <p className="text-gray-600">{variety.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Interested in {product.name}?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Contact our team to discuss your requirements, get detailed specifications, or request a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Quote Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Product Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
'use client';

import { motion } from 'framer-motion';
import { Building, Clock, MapPin, School, ShoppingBag, Trees } from 'lucide-react';

export default function Location() {
  const nearbyPlaces = [
    { icon: Building, name: 'Mall Grand Indonesia', distance: '10 menit' },
    { icon: School, name: 'Sekolah Internasional', distance: '5 menit' },
    { icon: ShoppingBag, name: 'Pasar Modern', distance: '3 menit' },
    { icon: Trees, name: 'Taman Kota', distance: '7 menit' },
  ];

  return (
    <section id="location" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full" />
            <span className="text-primary-700 text-sm font-medium">Lokasi Strategis</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Lokasi Premium</span> di Jantung Kota
          </h2>
          <p className="section-subtitle">
            Terletak di kawasan elite Jakarta Selatan dengan akses mudah ke berbagai
            fasilitas publik dan pusat bisnis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29234490042!2d106.7588345!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1706000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Location Pin Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[260px]"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Emerald Residences</h4>
                  <p className="text-gray-600 text-sm">
                    Jl. Emerald Boulevard No. 1, Jakarta Selatan
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Nearby Places */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Fasilitas Terdekat
            </h3>

            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <place.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900">{place.name}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-primary-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{place.distance}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Access Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-5">
                <div className="text-2xl font-bold text-primary-600 mb-1">5 menit</div>
                <p className="text-gray-600 text-sm">Akses ke Tol Jorr</p>
              </div>
              <div className="bg-gold-50 rounded-xl p-5">
                <div className="text-2xl font-bold text-gold-600 mb-1">15 menit</div>
                <p className="text-gray-600 text-sm">Ke Bandara Halim</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary w-full mt-8">
              Dapatkan Petunjuk Arah
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

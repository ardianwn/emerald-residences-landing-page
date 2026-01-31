'use client';

import { properties } from '@/constants';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Bath, Bed, Sparkles, Square, TrendingUp } from 'lucide-react';

export default function Properties() {
  return (
    <section id="properties" className="py-20 lg:py-28 bg-white">
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
            <span className="text-primary-700 text-sm font-medium">Pilihan Properti</span>
          </div>
          <h2 className="section-title">
            Pilih Hunian <span className="gradient-text">Terbaik</span> untuk Anda
          </h2>
          <p className="section-subtitle">
            Berbagai pilihan tipe rumah dengan desain modern dan spesifikasi premium
            yang dapat disesuaikan dengan kebutuhan keluarga Anda.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {property.isNew && (
                    <span className="inline-flex items-center space-x-1 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span>Baru</span>
                    </span>
                  )}
                  {property.isBestSeller && (
                    <span className="inline-flex items-center space-x-1 bg-gold-500 text-primary-900 text-xs font-semibold px-3 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      <span>Best Seller</span>
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-sm">Mulai dari</span>
                  <div className="text-white text-xl font-bold">
                    {formatPrice(property.price)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary-600 text-sm font-medium">{property.type}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-4">
                  {property.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} Kamar</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} KM</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.area} m²</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-primary-600 hover:text-white transition-colors group/btn"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compare CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bingung Memilih Tipe yang Tepat?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan rekomendasi
            tipe hunian yang paling sesuai dengan gaya hidup dan budget Anda.
          </p>
          <a href="#contact" className="btn-gold">
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}

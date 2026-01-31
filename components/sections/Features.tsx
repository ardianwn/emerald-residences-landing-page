'use client';

import { features } from '@/constants';
import { motion } from 'framer-motion';
import { Building2, Car, Heart, Home, Shield, TreePine } from 'lucide-react';

const iconMap: Record<string, any> = {
  shield: Shield,
  trees: TreePine,
  building: Building2,
  car: Car,
  home: Home,
  heart: Heart,
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
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
            <span className="text-primary-700 text-sm font-medium">Fasilitas Premium</span>
          </div>
          <h2 className="section-title">
            Fasilitas <span className="gradient-text">Lengkap</span> untuk Kenyamanan Anda
          </h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai fasilitas premium untuk memastikan kenyamanan dan
            keamanan keluarga Anda setiap hari.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ingin melihat langsung fasilitas yang tersedia?
          </p>
          <a href="#contact" className="btn-primary">
            Jadwalkan Kunjungan Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}

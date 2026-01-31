'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const reasons = [
    'Developer terpercaya dengan 15+ tahun pengalaman',
    'Kualitas bangunan berstandar internasional',
    'Lokasi premium di pusat kota',
    'Investasi properti dengan nilai apresiasi tinggi',
    'Tim after sales profesional dan responsif',
    'Kemudahan pembayaran dengan berbagai pilihan KPR',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Modern Home Interior"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
                  </div>
                </div>
              </motion.div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full" />
              <span className="text-primary-700 text-sm font-medium">Tentang Kami</span>
            </div>

            <h2 className="section-title">
              Membangun <span className="gradient-text">Hunian Berkualitas</span> untuk Masa Depan
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Emerald Residences adalah proyek pengembangan properti premium yang menghadirkan
              konsep hunian modern dengan kualitas terbaik. Kami berkomitmen untuk memberikan
              pengalaman tinggal yang luar biasa dengan desain arsitektur kontemporer dan
              fasilitas kelas dunia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{reason}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2.5K+</div>
                <div className="text-gray-500 text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mx-auto mb-3">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-gray-500 text-sm">Penghargaan</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">35%</div>
                <div className="text-gray-500 text-sm">ROI per Tahun</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-3xl font-playfair font-bold tracking-wide">
                LUXÉ
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover extraordinary luxury fashion that transcends time. 
              Where sophistication meets contemporary elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/men" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/women" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/children" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Children's Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">info@luxefashion.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300">
            © 2024 LUXÉ Fashion House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

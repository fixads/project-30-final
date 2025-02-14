import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-24 md:pb-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Logo className="h-10 w-auto" />
            </div>
            <div className="space-y-4">
              <a 
                href="tel:+16232537937" 
                className="flex items-center text-gray-700 hover:text-[#E8A95C] transition duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                (623) 253-7937
              </a>
              <div className="flex items-start text-gray-700">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>15615 N 35th Ave, Phoenix, AZ 85053</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-700 hover:text-[#E8A95C] transition duration-200">
                  Air Duct Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-[#E8A95C] transition duration-200">
                  Dryer Vent Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-[#E8A95C] transition duration-200">
                  Chimney Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
            <p className="text-gray-700 mb-2">Monday - Friday</p>
            <p className="text-gray-700">8:00 AM - 6:30 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <div className="space-x-4 mb-4">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-[#E8A95C] transition duration-200">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/terms-and-conditions" className="text-gray-600 hover:text-[#E8A95C] transition duration-200">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-600">&copy; {new Date().getFullYear()} airflow-experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
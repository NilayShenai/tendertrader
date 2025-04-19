
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-business-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TenderTrader</h3>
            <p className="text-business-100 text-sm">
              The leading B2B marketplace for raw material tenders and procurement.
              Connect with verified suppliers and buyers across industries.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/buyer" className="text-business-200 hover:text-white">Buyer Portal</Link></li>
              <li><Link to="/post-tender" className="text-business-200 hover:text-white">Post a Tender</Link></li>
              <li><Link to="/buyer/dashboard" className="text-business-200 hover:text-white">Buyer Dashboard</Link></li>
              <li><Link to="/supplier-verification" className="text-business-200 hover:text-white">Supplier Verification</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/seller" className="text-business-200 hover:text-white">Seller Portal</Link></li>
              <li><Link to="/tenders" className="text-business-200 hover:text-white">Browse Tenders</Link></li>
              <li><Link to="/seller/dashboard" className="text-business-200 hover:text-white">Seller Dashboard</Link></li>
              <li><Link to="/get-verified" className="text-business-200 hover:text-white">Get Verified</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-business-200 hover:text-white">Contact Us</Link></li>
              <li><Link to="/support" className="text-business-200 hover:text-white">Support Center</Link></li>
              <li><Link to="/privacy" className="text-business-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-business-200 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-business-700 text-center text-sm text-business-300">
          <p>© 2023 TenderTrader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Covfefe</h5>
            <p>Tremendously delicious, simply "The Best"</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Email: info@company.com</a></li>
              <li><a href="#" className="text-white">Phone: +1 234 567 890</a></li>
              <li><a href="#" className="text-white">Address: 123 Street, City</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 Covfefe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-dark text-white pt-4">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-3">
                <h5>Company Name</h5>
                <p>Some information about the company.</p>
            </div>
            <div class="col-md-4 mb-3">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white">Home</a></li>
                    <li><a href="#" class="text-white">About</a></li>
                    <li><a href="#" class="text-white">Services</a></li>
                    <li><a href="#" class="text-white">Contact</a></li>
                </ul>
            </div>
            <div class="col-md-4 mb-3">
                <h5>Contact Us</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white">Email: info@company.com</a></li>
                    <li><a href="#" class="text-white">Phone: +1 234 567 890</a></li>
                    <li><a href="#" class="text-white">Address: 123 Street, City</a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <p class="mb-0">&copy; 2024 Company Name. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
  )
}

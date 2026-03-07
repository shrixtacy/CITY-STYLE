// Contributor: Use this component to migrate the 'legacy_source/pages/Store_location.html' page.
import React from 'react';
import '../styles/index.css'; // Ensure global styles are available
import '../styles/StoreLocation.css';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StoreLocation = () => {
    return (
        <>
        <Navbar />
        <Breadcrumb />
        <section className="section__container store-location__container">
            <h2 className="section__header">Find Our Store</h2>
            <div className="store-location__content">
                <div className="store-location__details">
                    <div className="store-info-card">
                        <h3><i className="ri-map-pin-line"></i> Address</h3>
                        <p><strong>City Style Flagship Store</strong></p>
                        <p>123 Fashion Street, Soho</p>
                        <p>New York, NY 10012, USA</p>
                    </div>
                    
                    <div className="store-info-card">
                        <h3><i className="ri-phone-line"></i> Contact</h3>
                        <p><strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                        <p><strong>Email:</strong> <a href="mailto:support@citystyle.com">support@citystyle.com</a></p>
                    </div>
                    
                    <div className="store-info-card">
                        <h3><i className="ri-time-line"></i> Opening Hours</h3>
                        <p><strong>Mon - Fri:</strong> 10:00 AM - 09:00 PM</p>
                        <p><strong>Sat:</strong> 10:00 AM - 10:00 PM</p>
                        <p><strong>Sun:</strong> 11:00 AM - 07:00 PM</p>
                    </div>
                </div>
                
                <div className="store-location__map">
                    <iframe 
                        title="City Style Store Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2354784650395!2d-74.00293092408332!3d40.72382907139151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1709664654321!5m2!1sen!2sus" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default StoreLocation;

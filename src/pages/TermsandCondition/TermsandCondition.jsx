import React from 'react'
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import Logo from "/assets/black-logo.svg";
const TermsandCondition = () => {
  return (
    <div><Navbar
    textcolor={"black"}
    font={"bold"}
    justify={"center"}
    scrollbg={"[#024959]"}
    logo={Logo}
  />
   <div className="min-h-screen bg-gray-100 px-10 py-28">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Gulf Estates. By accessing our services, you agree to abide by the following terms and conditions.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mt-2">
          By using our website, you agree to comply with these terms and conditions. If you do not agree, please refrain from using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Services Provided</h2>
        <p className="text-gray-600 mt-2">
          We offer real estate listings, property management, and related services. We reserve the right to modify or discontinue any service at any time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. User Responsibilities</h2>
        <p className="text-gray-600 mt-2">
          Users must provide accurate information and refrain from unlawful activities when using our platform.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Intellectual Property</h2>
        <p className="text-gray-600 mt-2">
          All content on this website, including text, images, and logos, is the property of Gulf Estates and may not be reproduced without permission.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Limitation of Liability</h2>
        <p className="text-gray-600 mt-2">
          We are not responsible for any losses incurred due to the use of our services. Use our website at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">6. Termination</h2>
        <p className="text-gray-600 mt-2">
          We reserve the right to suspend or terminate user accounts if any violations of these terms occur.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">7. Contact Us</h2>
        <p className="text-gray-600 mt-2">
          If you have any questions about our terms and conditions, contact us at:
          <br /> Email: hello@gulfestates.ae
          <br /> Phone: +971 4 873 5835
        </p>

      
      </div>
      </div>
  <Footer/>
  </div>
  )
}

export default TermsandCondition
import React from "react";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import Logo from "/assets/black-logo.svg";
const PrivacyPolicy = () => {
  return (
    <>
      <div>
        {" "}
        <Navbar
          textcolor={"black"}
          font={"bold"}
          justify={"center"}
          scrollbg={"[#024959]"}
          logo={Logo}
        />
        <div className="min-h-screen bg-gray-100 px-10 py-28">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Gulf Estates, your trusted Gulf real estate partner.
          Your privacy is important to us, and this policy outlines how we collect, use,
          and protect your personal data.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Information We Collect</h2>
        <p className="text-gray-600 mt-2">
          - Personal Information (Name, Email, Phone Number, Address)
          <br />- Property Preferences & Search History
          <br />- Communication Data (Emails, Chats, Calls)
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. How We Use Your Information</h2>
        <p className="text-gray-600 mt-2">
          - To provide personalized real estate services
          <br />- To improve user experience and customer support
          <br />- To comply with legal obligations
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Data Protection</h2>
        <p className="text-gray-600 mt-2">
          We implement strict security measures to protect your data from unauthorized
          access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Third-Party Sharing</h2>
        <p className="text-gray-600 mt-2">
          We do not sell or share your personal information with third parties,
          except for essential service providers or when required by law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Your Rights</h2>
        <p className="text-gray-600 mt-2">
          - You can request access to your data
          <br />- You can update or delete your personal information
          <br />- You can opt out of marketing communications
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">6. Contact Us</h2>
        <p className="text-gray-600 mt-2">
          If you have any questions about our privacy policy, contact us at:
          <br /> Email: hello@gulfestates.ae
          <br /> Phone: +971 4 873 5835
        </p>

       
      </div>
    </div>
        <Footer/>
      </div>
    </>
  );
};

export default PrivacyPolicy;

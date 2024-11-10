import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="help-container max-w-5xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-3 text-center font-Nunito">
          Privacy Policy
        </h1>
        <p className='mb-8'>
        At <span className='font-Cormorant text-md font-semibold'>PENTA</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information about you when you visit our website and purchase from us.
        </p>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc leading-7">
            <li>
            Personal Information: Your name, email address, phone number, shipping and billing addresses, and payment details when you make a purchase or create an account.
            </li>
            <li>
            Automatically Collected Information: Information about your device, IP address, browsing actions, and shopping behavior on our website.
            </li>
            <li>
            Cookies: Small data files placed on your device to enhance your experience. You may choose to disable cookies in your browser, though this may affect certain functionalities on our site.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc leading-7">
            <li>
            Process Orders: Fulfill and deliver your orders, communicate order status, and handle payments and refunds.
            </li>
            <li>
            Improve Our Services: Analyze browsing and purchase behavior to improve website performance, product offerings, and user experience.
            </li>
            <li>
            Marketing: Send promotional emails about new products, offers, and updates with your consent. You may opt-out at any time by following the unsubscribe link in our emails.
            </li>
            <li>
            Customer Support: Address your inquiries, complaints, or requests and provide customer service.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <ul className="list-disc leading-7">
            <li>
            Service Providers: Such as payment processors, shipping partners, and marketing providers, who help us run our business.
            </li>
            <li>
            Legal Requirements: We may disclose information if required by law or in response to legal processes, including to protect our rights and the rights of others.
            </li>
            <li>
            Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred to the new entity.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
          <ul className="list-disc leading-7">
            <li>
            We take reasonable steps to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no online transmission or storage system is completely secure. You share information with us at your own risk.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc leading-7">
            <li>
            Access and Update: Access and correct your personal information by logging into your account or contacting us.
            </li>
            <li>
            Delete Information: Request the deletion of your personal data, subject to certain legal or contractual obligations.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <ul className="list-disc leading-7">
            <li>
            Our website uses cookies and similar tracking technologies to enhance your experience and provide relevant information. You may control cookies through your browser settings, though disabling cookies may limit certain features of our site.
            </li>
          </ul>
        </section>
        
        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
          <ul className="list-disc leading-7">
            <li>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <ul className="list-disc leading-7">
            <li>
            We may update this Privacy Policy to reflect changes to our practices or legal requirements. We encourage you to review this policy periodically.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="list-disc leading-7">
            <li>
            If you have any questions about this Privacy Policy or our data practices, please contact us at: jved004@gmail.com
            </li>   
          </ul>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

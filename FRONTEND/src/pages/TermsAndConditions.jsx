import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="help-container max-w-5xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-3 text-center font-Nunito">
          Terms & Conditions
        </h1>
        <p className='mb-8'>
        Welcome to <span className='font-Cormorant text-md font-semibold'> PENTA. </span> By accessing or using our website, you agree to be bound by the terms and conditions listed below. Please read them carefully. If you do not agree with any part of these terms, please do not use our site.
        </p>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">General</h2>
          <ul className="list-disc leading-7">
            <li>
              These Terms and Conditions apply to all users of this website, including customers, vendors, and any other contributors.
            </li>
            <li>
                By accessing our site and/or purchasing from us, you agree to be bound by these terms.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <ul className="list-disc leading-7">
            <li>
            You may need to register for an account to make purchases. You are responsible for maintaining the confidentiality of your account information.
            </li>
            <li>
             You must be at least 18 years of age to create an account.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
          <ul className="list-disc leading-7">
            <li>
            We aim to ensure that all descriptions, prices, and other product information on our site are accurate. However, we do not guarantee that all product information will always be up-to-date or error-free.
            </li>
            <li>
            Colors and images of products on the website may appear slightly different in person due to screen settings and photography.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Pricing and Payment</h2>
          <ul className="list-disc leading-7">
            <li>
            All prices are in Indian Rupees and are subject to change without notice.
            </li>
            <li>
            Payment must be made in full at the time of purchase. Accepted payment methods include Credit Card, Debit Card, UPI, Net banking and Pay on Delivery.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
          <ul className="list-disc leading-7">
            <li>
            We aim to ship orders as quickly as possible. Delivery times vary based on location, availability, and shipping method selected at checkout.
            </li>
            <li>
            Delivery delays may occur during peak seasons, holidays, or due to unforeseen events. We are not liable for delays beyond our control.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Returns and Exchanges</h2>
          <ul className="list-disc leading-7">
            <li>
            Please refer to our <Link to={'/returnpolicy'} className='underline'> Return Policy </Link> for information on returning or exchanging items.
            </li>
            <li>
            We reserve the right to deny any returns or exchanges if they do not meet the conditions outlined in our policy.
            </li>
          </ul>
        </section>
        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <ul className="list-disc leading-7">
            <li>
            All content on this site, including text, graphics, logos, images, and software, is the property of PENTA and protected by intellectual property laws.
            </li>
            <li>
            You may not reproduce, duplicate, or exploit any portion of the site or its content without express permission from us.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <ul className="list-disc leading-7">
            <li>
            Our <Link to={'/privacypolicy'} className='underline'> Privacy Policy </Link> explains how we collect, use, and protect your personal information. By using our website, you agree to this policy.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
          <ul className="list-disc leading-7">
            <li>
            You agree to use our site only for lawful purposes and not to engage in any behavior that could damage or disrupt our services.
            </li>
            <li>
            We reserve the right to terminate your access to the website if we determine you have violated these terms.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"> Limitation of Liability</h2>
          <ul className="list-disc leading-7">
            <li>
            PENTA is not liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use our website or products.
            </li>
            <li>Our liability is limited to the maximum extent permitted by law.</li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <ul className="list-disc leading-7">
            <li>
            You agree to indemnify and hold [Your Store Name] harmless from any claims, liabilities, damages, or expenses arising from your use of our website or violation of these terms.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms and Conditions</h2>
          <ul className="list-disc leading-7">
            <li>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after changes constitutes acceptance of the new terms.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default TermsAndConditions

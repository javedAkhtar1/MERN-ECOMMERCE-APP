import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      </div>
      <Footer />
    </>
  )
}

export default TermsAndConditions

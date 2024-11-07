import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReturnPolicy() {
  return (
    <>
      <Navbar />
      <div className="help-container max-w-5xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Return Policy
        </h1>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Return Eligibility</h2>
          <ul className="list-disc leading-7">
            <li>
              Items must be returned within 10 days from the date of purchase.
            </li>
            <li>
              Products must be unworn, unwashed, and with all original tags
              attached.
            </li>
            <li>Sale items are eligible for exchange or store credit only.</li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
          <ul className="list-disc leading-7">
            <li>
              <span className="font-semibold"> Initiate a Return: </span> Email our customer support team at
              <span className="font-semibold"> jved004@gmail.com </span> with your order number and reason for return.
            </li>
            <li>
              <span className="font-semibold"> Pack the Items: </span> Place your items in the original packaging if
              possible, ensuring all tags are intact.
            </li>
            <li>
              <span className="font-semibold"> Ship Your Return: </span> You’ll receive a return label once your request
              is approved. Please note that return shipping fees may apply.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <ul className="list-disc leading-7">
            <li>
            Refunds are processed within 7 business days after we receive and inspect the returned items.
            </li>
            <li>
              Original shipping charges are non-refundable.
            </li>
            <li>Refunds will be issued to the original payment method. For cash-on-delivery orders, store credit will be provided.</li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
          <ul className="list-disc leading-7">
            <li>
            If you need a different size or color, we’re happy to exchange the item, subject to availability.
            </li>
            <li>
            Exchanges must be requested within 7 days of receiving your order.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
          <ul className="list-disc leading-7">
            <li>
              If you receive a damaged or incorrect item, please contact us within 48 hours of delivery with a photo of the issue. We’ll prioritize sending a replacement at no extra charge.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ReturnPolicy;

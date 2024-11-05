import React from 'react';
import Accordion from './Accoridon.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useInView } from 'react-intersection-observer';

function Help() {
    const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
    <Navbar />
    <div
    ref={ref} 
    className={`help-container max-w-5xl mx-auto p-6 font-Nunito ${ inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">Help Center</h1>

      <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ordering</h2>
        <Accordion 
          question="How can I modify or cancel my order?" 
          answer="To modify or cancel your order, please contact our customer service team within an hour of placing your order." 
        />
        <Accordion 
          question="How do I apply a discount code?" 
          answer="Enter your discount code at checkout in the promo code field and click 'Apply' to see the updated total." 
        />
        <Accordion 
          question="Can I place an order over the phone?" 
          answer="No, we do not offer the functionality of ordering by phone." 
        />
      </section>
      
      <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
        <Accordion 
          question="What are the shipping options and costs?" 
          answer="We offer standard and express shipping options. Costs vary depending on location and service chosen." 
        />
        <Accordion 
          question="How do I track my order?" 
          answer="Once your order ships, you’ll receive an email with a tracking number and link to track your package." 
        />
        <Accordion 
          question="Can I change my shipping address after placing an order?" 
          answer="To change your shipping address, contact us as soon as possible. Address changes may not be possible after processing." 
        />
      </section>

      <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Returns & Exchanges</h2>
        <Accordion 
          question="What is the return policy?" 
          answer="Items can be returned within 10 days of purchase in their original condition. Read our return policy for details." 
        />
        <Accordion 
          question="How long does it take to process a return?" 
          answer="Returns are typically processed within 5-7 business days of receiving the item at our warehouse." 
        />
        <Accordion 
          question="Can I exchange an item for a different size?" 
          answer="Yes, exchanges for a different size are possible on selected items depending on the stock." 
        />
      </section>

      <section className="mb-4 bg-gray-100 px-8 py-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
        <Accordion 
          question="How do I contact customer support?" 
          answer="You can reach us by phone, email, or WhatsApp. Our team is available Monday to Friday, 9 AM to 6 PM." 
        />
        <Accordion 
          question="What are your customer service hours?" 
          answer="Our customer service team is available Monday to Friday, 9 AM to 6 PM." 
        />
        <Accordion 
          question="Where can I give feedback about my experience?" 
          answer="We welcome your feedback! You can leave feedback on our website through the feedback page." 
        />
      </section>
    </div>
    <Footer />
    </>
  );
}

export default Help;

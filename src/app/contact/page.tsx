import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#A21CAF] text-[#FFFFFF] min-h-screen">
        <div className="container mx-auto p-6">
          {/* Contact Information Section */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch with vivi ninja</h1>
            <p className="text-lg mb-6">We&apos;re here to guide you on your journey to mastering the arts of stealth and agility. Contact us through the following:</p>
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold">Phone:</h2>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <h2 className="font-semibold">Email:</h2>
                <p>contact@vivininja.com</p>
              </div>
            </div>
          </section>

          {/* Location and Hours Section */}
          <section className="bg-[#C084FC] text-[#FFFFFF] p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Visit Our Dojo</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Address:</h3>
              <p>123 Ninja Way, Shadow City, ZX 12345</p>
            </div>
            <div>
              <h3 className="font-semibold">Hours of Operation:</h3>
              <ul>
                <li>Monday - Friday: 10:00 AM - 7:00 PM</li>
                <li>Saturday: 12:00 PM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </section>

          {/* Contact Image Section */}
          <section className="rounded-lg overflow-hidden shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
            <Image
              src="/image-contact-contact-image.jpg"
              alt="Illustrative map of vivi ninja location"
              width={800}
              height={600}
              className="w-full"
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
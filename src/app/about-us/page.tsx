import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">
        {/* Mission & Vision Section */}
        <section className="w-full py-20 px-6 bg-primary" style={{ backgroundColor: '#A21CAF' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text_primary mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-text_secondary">
              At vivi ninja, our mission is to unlock the hidden potentials of aspiring ninjas through a curriculum rich in tradition and innovation. 
              Our vision is to become a beacon of excellence, lighting the path to mastery in the mystical arts of ninjutsu.
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
          <div className="relative w-full h-[70vh]">
            <Image
              src="/image-home-hero-section.jpg"
              alt="Hero"
              layout="fill"
              objectFit="cover"
              className="mb-8"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text_primary">Welcome to vivi ninja</h1>
              <p className="mt-4 text-lg text-text_secondary">
                Join our community and embrace the way of the ninja. Experience the mystery and mastery at the heart of vivi ninja.
              </p>
              <Link href="/book">
                <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent">
                  Explore Our Classes
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Image Section */}
        <section className="w-full py-20 px-6 bg-secondary" style={{ backgroundColor: '#C084FC' }}>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/image-about-us-about-us-image.jpg"
              alt="About Us"
              width={1280}
              height={720}
              className="rounded-lg"
            />
            <div className="mt-6 text-center text-text_secondary">
              <h3 className="text-2xl font-semibold">The Heart of vivi ninja</h3>
              <p className="mt-2 text-lg">
                Delve into the serene yet spirited environment where each student&apos;s journey is valued and guided by seasoned mentors.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-[#A21CAF] text-[#FFFFFF] flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to vivi ninja</h1>
            <p className="mt-4 text-lg">Discover the secrets of agility and stealth at our premier ninja school.</p>
            <Link href="/book">
              <button className="bg-[#C084FC] text-[#FFFFFF] px-4 py-2 rounded font-semibold hover:bg-[#E879F9]">
                Join Our Ranks
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-[#A21CAF] text-[#FFFFFF] flex flex-col justify-center items-center py-16 px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enter the World of vivi ninja</h2>
          <p className="text-lg">
            At vivi ninja, we specialize in teaching the ancient art of ninjutsu with a modern twist. Our experienced instructors will guide you through every step, from basic techniques to advanced strategies. Align with the shadows, hone your skills, and become a part of our extraordinary legacy.
          </p>
          <Link href="/book">
            <button className="mt-6 bg-[#C084FC] text-[#FFFFFF] px-6 py-3 rounded font-semibold hover:bg-[#E879F9]">
              Enroll Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
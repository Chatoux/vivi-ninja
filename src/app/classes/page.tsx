import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

const ClassesPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#1F1F1F] text-white px-4 md:px-8">
        <section id="hero" className="text-center py-12 bg-[#A21CAF]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to vivi ninja</h1>
          <p className="text-lg md:text-xl">
            Discover the shadowy art of ninjutsu at vivi ninja. Hone your skills in our expertly crafted classes for all ages and proficiency levels.
          </p>
        </section>
        
        <section id="class-offerings" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Class Offerings</h2>
          <div className="space-y-8">
            <div className="bg-[#C084FC] text-[#FFFFFF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Beginner Classes</h3>
              <p className="mt-2">
                Perfect for ages 5 and up, our beginner classes introduce the basics of stealth, agility, and mental acuity. Start your journey today.
              </p>
            </div>
            <div className="bg-[#C084FC] text-[#FFFFFF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Intermediate Classes</h3>
              <p className="mt-2">
                Designed for ages 10 and up. Build upon your foundational skills with more advanced techniques and strategies.
              </p>
            </div>
            <div className="bg-[#C084FC] text-[#FFFFFF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Advanced Classes</h3>
              <p className="mt-2">
                Recommended for ages 15 and up. Master complex maneuvers and enhance your prowess with our advanced curriculum.
              </p>
            </div>
          </div>
        </section>

        <section id="schedule" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Schedule</h2>
          <div className="bg-[#E879F9] text-[#FFFFFF] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-center">
              Check our weekly timetable to find a class that fits your schedule and start your training at vivi ninja.
            </p>
            <table className="table-auto w-full mt-4">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Class Type</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monday</td>
                  <td className="border px-4 py-2">Beginner</td>
                  <td className="border px-4 py-2">5:00 PM</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Wednesday</td>
                  <td className="border px-4 py-2">Intermediate</td>
                  <td className="border px-4 py-2">6:00 PM</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Friday</td>
                  <td className="border px-4 py-2">Advanced</td>
                  <td className="border px-4 py-2">7:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="class-image" className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Classes</h2>
          <div className="flex justify-center">
            <Image
              src="/image-classes-class-image.jpg"
              alt="Diverse and dynamic classes at vivi ninja"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClassesPage;
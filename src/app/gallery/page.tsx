// Import necessary components and libraries
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#111] min-h-screen">
                {/* Training Highlights Section */}
                <section className="py-12 bg-[#A21CAF] text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8">Training Highlights</h2>
                        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                            <Image
                                src="/images/training-1.jpg"
                                width={400}
                                height={300}
                                alt="Vivi Ninja Training Session"
                                className="rounded-lg"
                            />
                            <Image
                                src="/images/training-2.jpg"
                                width={400}
                                height={300}
                                alt="Ninja Technique Practice"
                                className="rounded-lg"
                            />
                            <Image
                                src="/images/training-3.jpg"
                                width={400}
                                height={300}
                                alt="Advanced Ninja Skills"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Events and Competitions Section */}
                <section className="py-12 bg-[#C084FC] text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8">Events and Competitions</h2>
                        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                            <Image
                                src="/images/event-1.jpg"
                                width={400}
                                height={300}
                                alt="Ninja Battle at Vivi Ninja"
                                className="rounded-lg"
                            />
                            <Image
                                src="/images/event-2.jpg"
                                width={400}
                                height={300}
                                alt="Vivi Ninja Competition"
                                className="rounded-lg"
                            />
                            <Image
                                src="/images/event-3.jpg"
                                width={400}
                                height={300}
                                alt="Training Camp Highlights"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Gallery Image Section */}
                <section className="py-12 bg-[#E879F9] text-center text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Gallery Image</h2>
                        <Image
                            src="/image-gallery-gallery-image.jpg"
                            width={800}
                            height={500}
                            alt="Captivating Event Image"
                            className="rounded-lg"
                        />
                        <p className="mt-4">Experience the thrill and mastery at Vivi Ninja through our captivating moments captured in events and training.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
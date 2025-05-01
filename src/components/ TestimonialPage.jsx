// import React, { useState } from 'react';

// const testimonials = [
//   {
//     name: 'Alice Johnson',
//     title: 'CEO, BrightTech',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     quote:
//       'SAM Creative transformed our brand with stunning visuals and smooth UX. Truly top-tier work.',
//   },
//   {
//     name: 'Mark Lee',
//     title: 'CTO, CodeWave',
//     image: 'https://randomuser.me/api/portraits/men/36.jpg',
//     quote:
//       'We loved working with their team—clean code, great design, and excellent communication.',
//   },
//   {
//     name: 'Sara Kim',
//     title: 'Founder, Bloom Studio',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     quote:
//       'Our website traffic doubled thanks to their redesign. Absolutely recommend them!',
//   },
// ];

// const TestimonialPage = () => {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-10">What Clients Say</h2>

//         <div className="relative bg-[#111111] p-8 rounded-2xl shadow-xl transition-all duration-500">
//           <img
//             src={testimonials[index].image}
//             alt={testimonials[index].name}
//             className="w-16 h-16 rounded-full mx-auto border-2 border-yellow-500 mb-4"
//           />
//           <p className="text-lg italic text-white/90 mb-4">“{testimonials[index].quote}”</p>
//           <h4 className="text-xl font-semibold">{testimonials[index].name}</h4>
//           <p className="text-sm text-yellow-400">{testimonials[index].title}</p>
//         </div>

//         <div className="mt-6 flex justify-center space-x-4">
//           <button
//             onClick={handlePrev}
//             aria-label="Previous testimonial"
//             className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full text-xl"
//           >
//             ‹
//           </button>
//           <button
//             onClick={handleNext}
//             aria-label="Next testimonial"
//             className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full text-xl"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialPage;

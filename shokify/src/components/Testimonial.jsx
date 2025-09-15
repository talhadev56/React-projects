import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Fatima",
    role: "Verified Buyer",
    feedback:
      "The quality of the products is outstanding. Delivery was quick, and packaging was very secure.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Hassan Raza",
    role: "Frequent Customer",
    feedback:
      "I love shopping here! The discounts are real, and the return process is super easy.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Fatima Khan",
    role: "First-time Buyer",
    feedback:
      "Amazing experience! The maroon casual shirt I bought fits perfectly and feels premium.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ahmed Sheikh",
    role: "Entrepreneur",
    feedback:
      "This store has become my go-to for office wear. Stylish, durable, and worth every penny.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Maria Zafar",
    role: "Online Shopper",
    feedback:
      "Customer service was so helpful. They guided me through payment process and made it smooth.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Maria Bibi",
    role: "Online Client",
    feedback:
      "I regularly buy things from here.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },



];


const Testimonial = () => {
  return (
    <section className=" text-white mb-15 p-5">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-amber-300 text-3xl font-medium mb-3">Testimonials</h2>
        <h3 className="text-md font-bold text-gray-500">What Our Clients Say About Us</h3>
        <h2 className="">Shokify is the name of trust</h2>
      </div>

      <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <FaQuoteLeft className=" text-2xl mb-3" />
            <p className="text-sm text-gray-600 italic mb-4">{item.feedback}</p>
            <div class="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-orange-400"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

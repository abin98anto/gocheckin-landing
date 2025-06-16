import React from "react";

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      designation: "Product Manager, Acme Inc.",
      rating: 5,
      comment:
        "This tool has streamlined our workflow like never before. The AI automations are a game changer!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Lee",
      designation: "CTO, BrightTech",
      rating: 4,
      comment:
        "We've seen a 40% productivity boost after integrating this platform. Totally worth it!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Khan",
      designation: "Team Lead, InnovateX",
      rating: 5,
      comment:
        "The collaboration features are outstanding. It's like having an extra teammate on board.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Michael Chen",
      designation: "Developer, CodeCraft",
      rating: 5,
      comment:
        "The integration was seamless and the results exceeded our expectations. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Emma Rodriguez",
      designation: "Director, FlowTech",
      rating: 4,
      comment:
        "Our team efficiency has improved dramatically. The automation features are incredible.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-[#120c21] to-[#241842]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Customer Feedbacks
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Join thousands of businesses using Go CheckIn to streamline their
            operations
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="flex animate-marquee space-x-8">
          {duplicatedTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="min-w-[320px] flex-shrink-0 bg-[#1b152c] border border-white/10 rounded-xl p-6 shadow-md text-white flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">"{testimonial.comment}"</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.028 3.165a1 1 0 00.95.69h3.327c.969 0 1.371 1.24.588 1.81l-2.693 1.957a1 1 0 00-.364 1.118l1.028 3.165c.3.921-.755 1.688-1.538 1.118l-2.693-1.957a1 1 0 00-1.175 0l-2.693 1.957c-.783.57-1.838-.197-1.538-1.118l1.028-3.165a1 1 0 00-.364-1.118L2.507 8.592c-.783-.57-.38-1.81.588-1.81h3.327a1 1 0 00.95-.69l1.028-3.165z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;

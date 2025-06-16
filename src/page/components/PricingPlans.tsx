// import React from "react";

// const PricingPlans: React.FC = () => {
//   const data = [
//     {
//       title: "Starter",
//       price: "$9/mo",
//       features: ["Basic automations", "Up to 3 projects", "Email support"],
//     },
//     {
//       title: "Pro",
//       price: "$29/mo",
//       features: [
//         "Advanced automations",
//         "Unlimited projects",
//         "Priority support",
//       ],
//     },
//     {
//       title: "Enterprise",
//       price: "Custom",
//       features: [
//         "Dedicated AI workflows",
//         "Unlimited collaboration",
//         "24/7 support",
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-[#0a0613] to-[#120c21]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Pricing & Plans
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto">
//             Affordable options to scale your project management with AI—whether
//             you're just getting started or need advanced features for growing
//             teams
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {data.map((plan, index) => (
//             <div
//               key={index}
//               className="bg-[#12101a] rounded-2xl p-8 border border-white/10 shadow hover:shadow-xl transition duration-300"
//             >
//               <h3 className="text-2xl font-semibold text-white mb-2">
//                 {plan.title}
//               </h3>
//               <p className="text-4xl font-bold text-white mb-4">{plan.price}</p>
//               <ul className="text-gray-300 space-y-2 mb-6">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-2">
//                     <span className="w-2 h-2 rounded-full bg-violet-500" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full py-2.5 rounded-lg text-white font-medium bg-violet-600 hover:bg-violet-700 transition">
//                 Choose Plan
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

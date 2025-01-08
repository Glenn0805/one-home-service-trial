import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ReferalCard from "@/components/referralCard";
import ClientLogoCarousel from "@/components/slider";
import { motion } from "framer-motion";
export default function IndexPage() {
  const clientsLogo = [
    "/one-home-service-trial/logo.svg",
    "/one-home-service-trial/logo.svg",
    "/one-home-service-trial/logo.svg",
    "/one-home-service-trial/logo.svg",
  ];

  const testimonials = [
    {
      name: "Andrea Gomez",
      role: "Niceview Window Cleaning",
      image: "https://via.placeholder.com/80",
      testimonial:
        "This service is going to help so many property owners manage and maintain their properties effectively. As a window cleaning business, I see this as an excellent opportunity for businesses like ours that are growing and eager to provide excellent service to our community. Thank you for giving us the opportunity to be part of this project!",
      rating: 5, // Rating out of 5
      testimonialTitle: "Grow Businesses!",
    },
    {
      name: "Matt Jorgensen",
      role: "Foundation Flooring",
      image: "https://via.placeholder.com/80",
      testimonial:
        "Being part of this exclusive network has helped us connect with other top-notch service providers and grow our business exponentially.",
      rating: 4,
      testimonialTitle: "Big Project!",
    },
    {
      name: "Welly Corgelas",
      role: "Top Shine Pressure Clean",
      image: "https://via.placeholder.com/80",
      testimonial:
        "The support and referrals from this community are invaluable. It’s amazing to be among the best in Broward County!",
      rating: 5,
      testimonialTitle: "Referrals!",
    },
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`text-yellow-400 text-lg `}>
        ★
      </span>
    ));
  };

  const data = [
    {
      title: "Northeast Broward (NEB)",
      locations: [
        { name: "Lighthouse Point" },
        { name: "Hillsboro Beach" },
        { name: "Wilton Manors" },
      ],
      stats: { households: 30283, income: 118477 },
    },
    {
      title: "Northwest Broward (NWB)",
      locations: [{ name: "Parkland" }],
      stats: { households: 41625, income: 205796 },
    },
    {
      title: "Southeast Broward (SEB)",
      locations: [
        { name: "Fort Lauderdale" },
        { name: "Lauderdale-By-The-Sea" },
      ],
      stats: { households: 190409, income: 105477 },
    },
    {
      title: "Southwest Broward (SWB)",
      locations: [
        { name: "Cooper City" },
        { name: "Southwest Ranches" },
        { name: "Weston" },
      ],
      stats: { households: 113068, income: 155152 },
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-4 bg-gradient-to-r from-[#3A82F6] to-[#324154] h-screen flex items-center flex-col md:flex-row gap-6 md:gap-12 justify-center text-white">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join the exclusive community of Broward County’s best home service
            companies
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our “referral” based sales and marketing system that will
            increase your revenue while lowering your marketing costs.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="ml-4 px-6 py-3 bg-white text-[#3A82F6] border border-[#3A82F6] rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="flex-1 flex justify-center">
          <motion.div
            className="rounded-lg border h-full w-full bg-white shadow-md flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://fakeimg.pl/800x500" // Replace with actual image URL
              alt="Gallery Image 8"
              className="w-full h-full rounded-lg object-cover transform transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      <section className="p-6 py-36 bg-white">
        <div className="w-full flex flex-col">
          <motion.span
            className="text-2xl text-center w-full font-bold text-[#324154]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            BECOME A ONE HOME VENDOR
          </motion.span>
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <ClientLogoCarousel logos={clientsLogo} />
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            className="text-2xl font-semibold text-[#3A82F6] mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            TARGETING THESE CITIES IN BROWARD COUNTY
          </motion.span>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/one-home-service-trial/map.jpg"
              alt="Map of Broward County"
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Aggressively Marketing to These Cities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.map((region, index) => (
              <motion.div
                key={index}
                className="relative bg-white shadow-lg rounded-xl p-6 transform hover:-translate-y-2 transition duration-300 border-t-4 border-blue-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="absolute -top-4 left-4 bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                  {region.title}
                </div>
                {/* Title */}
                <motion.h3
                  className="text-xl font-semibold text-gray-800 mb-4 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {region.title}
                </motion.h3>
                {/* Location List */}
                <ul className="mb-4 space-y-2">
                  {region.locations.map((loc, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-700 font-medium flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      {loc.name}
                    </motion.li>
                  ))}
                </ul>
                {/* Stats */}
                <div className="flex justify-between text-gray-600 text-sm mt-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <strong>Total Households:</strong>{" "}
                    <span className="text-gray-800">
                      {region.stats.households}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <strong>Avg. Income:</strong>{" "}
                    <span className="text-gray-800">{region.stats.income}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-center text-[#3A82F6] mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR REFERRAL-BASED SYSTEM INCLUDES
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              "WEBSITE LEADS",
              "EXCLUSIVE NETWORKING",
              "YOUR OWN SALESPERSON",
              "PODCAST",
              "LANDING PAGES",
              "PRESS RELEASE",
            ].map((title, index) => (
              <motion.div
                key={index}
                className="transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ReferalCard title={title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#324154] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-white mb-12">
            See why Broward County’s best home service companies trust our
            referral-based community.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.role}</p>

                {/* Title for Each Testimonial */}
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  "{item.testimonialTitle}"
                  {/* This would be your title for each testimonial */}
                </h4>

                <p className="mt-4 text-gray-600">{item.testimonial}</p>

                {/* Rating */}
                <div className="mt-4">{renderStars()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* CEO Image */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/one-home-service-trial/ceo.png" // Replace with the CEO's image URL
                alt="CEO Image"
                className="w-80 h-80 rounded-full object-cover shadow-xl mx-auto lg:mx-0"
              />
            </motion.div>

            {/* CEO Information */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-4xl font-semibold text-[#3A82F6] mb-4">
                Meet Our CEO, TODD PATON
              </h2>
              <p className="text-xl font-medium text-gray-700 mb-6">
                CEO & Founder
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Todd Paton, founder of OneHomeService.ai, brings over two
                decades of entrepreneurial expertise to the table, leveraging
                the skills and insights gained from building and scaling three
                successful companies. Starting with Mortgage Approval Group,
                Todd honed his ability to navigate complex markets and deliver
                tailored solutions. With Florida New Construction Realty, he
                developed a deep understanding of real estate and customer
                relationship management. Most recently, as the founder of Paton
                Marketing, he spent 15 years mastering the art of digital
                marketing, lead generation, and brand building for businesses
                across industries. Now, Todd is channeling his extensive
                experience into creating OneHomeService.ai—a cutting-edge
                platform designed to revolutionize the home services industry.
                His mission is to build a trusted community of top-tier service
                providers while simplifying home management for homeowners,
                ensuring exceptional value for both vendors and their clients.
              </p>

              {/* Call-to-action button */}
              <motion.a
                href="#"
                className="inline-block bg-[#3A82F6] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#3469c2] transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Learn More About TODD
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#2A64D9] text-white text-center">
        {/* Updated background color */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            Book a Free Call Today!
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have questions or need assistance? We're here to help. Schedule a
            free call with one of our experts to get personalized advice and
            insights.
          </motion.p>
          <motion.a
            href="#book-a-call" // Link to your booking page or modal
            className="inline-block bg-[#FFD700] text-[#3A82F6] font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#ffcc00] hover:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Book Your Free Call
          </motion.a>
        </div>
      </section>
      <Footer />
    </>
  );
}

// components/Team.js
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default function Team() {
  const teamMembers = [
    {
      name: "Seyed Siyamak Mehrnia",
      role: "Full Stack Developer",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s816ba227ea1ead06/image/i0eb5375a5eb48ac1/version/1510327088/image.jpg",
      email: "siyamak@example.com",
    },
    {
      name: "Sara Mehrnia",
      role: "Designer",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s816ba227ea1ead06/image/icf2fac2531e0b9ac/version/1510327088/image.jpg",
      email: "sara@example.com",
    },
    {
      name: "Sara Mehrnia",
      role: "Designer",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s816ba227ea1ead06/image/icf2fac2531e0b9ac/version/1510327088/image.jpg",
      email: "sara@example.com",
    },
    {
      name: "Sara Mehrnia",
      role: "Designer",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s816ba227ea1ead06/image/icf2fac2531e0b9ac/version/1510327088/image.jpg",
      email: "sara@example.com",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 scroll-mt-32">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-down">
        Meet Our Team
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white p-6 rounded-lg shadow-lg z-10"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-gray-400">{member.role}</p>
            <p className="text-center mt-4">
              <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-600">
                Contact {member.name}
              </a>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
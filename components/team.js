import { useEffect, useState } from 'react';
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
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
        ;
        const data = await res.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Failed to fetch team:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return <p className="text-center py-12">Loading team members...</p>;
  }

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
            key={member._id || index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white p-6 rounded-lg shadow-lg z-10"
          >
            <div className="w-32 h-32 mb-4 mx-auto">
              <img
                src={member.image || "/default.jpg"}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = 'black';
                  e.target.parentNode.style.borderRadius = '9999px';
                }}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-gray-400">{member.role}</p>
            {member.email && (
              <p className="text-center mt-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-400 hover:text-blue-600"
                >
                  Contact {member.name}
                </a>
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
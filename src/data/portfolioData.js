import aesDashboard from '../assets/projects/aes-dashboard.png'
import pshsSis from '../assets/projects/pshs-sis.png'
import pshsNfaps from '../assets/projects/pshs-nfaps.png'
import pshsErp from '../assets/projects/pshs-erp.png'

const portfolioData = {
  brand: {
    firstName: 'Rodwin',
    lastName: 'Chester',
    fullName: 'Rodwin Chester',
    role: 'Software Engineer',
    experience: '3 Years Experience',
    email: 'rodwinchestermail@gmail.com',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ],
  hero: {
    intro: "Hi, I'm",
    title: 'I build fast, clean, user-friendly software.',
    description:
      'I create responsive web applications, intuitive interfaces, and dependable backend systems that help teams ship better digital products.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Learn More', href: '#about' },
    codeSnippet: `const engineer = {
  name: 'Rodwin Chester',
  role: 'Software Engineer',
  experience: '3 years',
  focus: ['Web Apps', 'APIs', 'UX']
};`,
    status: 'Currently building scalable products with modern web technologies.',
  },
  about: {
    eyebrow: 'About Me',
    heading: 'Engineer with a product mindset.',
    paragraphs: [
      "I'm Rodwin Chester, a software engineer with 3 years of experience designing, developing, and maintaining web applications. I enjoy turning complex problems into simple, reliable, and polished user experiences.",
      'My work spans frontend interfaces, backend APIs, database design, and performance optimization. I care about readable code, strong collaboration, and building tools that people actually enjoy using.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    heading: 'Technologies I use',
    description:
      'A practical toolkit for building responsive, maintainable, and production-ready applications.',
    items: [
      { title: 'Frontend', content: 'HTML, CSS, JavaScript, React, Tailwind CSS' },
      { title: 'Backend', content: 'Node.js, Express, REST APIs, Authentication' },
      { title: 'Database', content: 'PostgreSQL, MongoDB, Prisma, SQL' },
      { title: 'Tools', content: 'Git, GitHub, Docker, Vercel, Agile' },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    heading: 'Featured work',
    description:
      "A few sample projects that show John's ability to build useful, scalable, and visually polished applications.",
    items: [
      {
        title: 'Automated Examination System (NPC)',
        description:
          'An online platform that lets users apply for the Philippine Science High School National Competitive Examination. Allows examinees to take NPC exam online, lets admins create question banks and exams, and sends certificates to examinees through email.',
        tags: ['React', 'Node.js', 'MongoDB'],
        screenshot: aesDashboard,
        gradient: 'from-cyan-400/30 to-blue-600/20',
      },
      {
        title: 'Student Information System',
        description: 'A centralized system used by Philippine Science High School to store, monitor, and analyze student records effectively. It also allows its users to export a PDF copy of a student\'s report card.',
        tags: ['React', 'Node.js', 'MongoDB'],
        screenshot: pshsSis,
        gradient: 'from-violet-400/30 to-fuchsia-600/20',
      },
      {
        title: 'New Freshmen Admissions Processing System',
        description: 'An online platform that lets users apply for the Philippine Science High School National Competitive Examination.',
        tags: ['React', 'Node.js', 'MongoDB'],
        screenshot: pshsNfaps,
        gradient: 'from-emerald-400/30 to-cyan-600/20',
      },
      {
        title: 'Project Monitoring System',
        description: 'A enterprise resource planning web application that enables management of projects and tracking of budget and expenditures.',
        tags: ['React', 'Typescript', 'Node.js', 'PostgresDB'],
        screenshot: pshsErp,
        gradient: 'from-amber-400/30 to-orange-600/20',
      },
    ],
  },
  contact: {
    heading: "Let's build something great.",
    description:
      'Interested in working together? Reach out to discuss web apps, product ideas, or engineering opportunities.',
  },
}

export default portfolioData

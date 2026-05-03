const portfolioData = {
  brand: {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    role: 'Software Engineer',
    experience: '3 Years Experience',
    email: 'john.doe@example.com',
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
  name: 'John Doe',
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
      "I'm John Doe, a software engineer with 3 years of experience designing, developing, and maintaining web applications. I enjoy turning complex problems into simple, reliable, and polished user experiences.",
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
        title: 'TaskFlow',
        description: 'A productivity dashboard for managing tasks, deadlines, and team workflows.',
        tags: ['React', 'Node.js', 'MongoDB'],
        gradient: 'from-cyan-400/30 to-blue-600/20',
      },
      {
        title: 'ShopLite',
        description: 'A responsive e-commerce storefront with product filtering and cart interactions.',
        tags: ['JavaScript', 'Tailwind', 'API'],
        gradient: 'from-violet-400/30 to-fuchsia-600/20',
      },
      {
        title: 'DevTrack',
        description: 'A developer analytics app that visualizes repository activity and sprint progress.',
        tags: ['Vue', 'Express', 'PostgreSQL'],
        gradient: 'from-emerald-400/30 to-cyan-600/20',
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

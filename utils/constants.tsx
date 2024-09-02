import { BookUser, FileClock, NotebookPen, User } from 'lucide-react';

export const projectData = [
  {
    title: 'Reachout.ai',
    description:
      "In today’s fast-paced recruiting world, standing out matters more than ever. At R3achout.AI, we understand the power of connection, where your emails are not just messages, they're the first step in building meaningful relationships. We empower recruiters like you to enhance your recruitment processes, get results, ensuring you stay one step ahead of the competition.",
    img: '/reachout.png',
    href: 'https://reachout-1b7f6.web.app/',
  },
  {
    title: 'Agrios',
    description: 'Agrios is the largest global organic farm.',
    img: '/agrios.png',
    href: 'https://agrios-ten.vercel.app/',
  },
  {
    title: 'Overtimeam',
    description:
      'Overtime Athletic Management software is a comprehensive platform designed for athletic organizations, coaches, athletes, parents, and administrators.',
    img: '/ams.png',
    href: 'https://overtimeam.com/',
  },
  {
    title: 'Hollow Log Studios',
    description:
      'Specializing In Commercial and Residential Murals, Watercolor Portraits, and Illustrations, with a fun fantasy or fairy tale twist!',
    img: '/hollow.png',
    href: 'https://www.hollowlogstudios.com/',
  },

  {
    title: 'Rantir',
    description:
      'Rantir lets you think bigger, create dashboards and visual views faster and save time for every project without integrations.',
    img: '/rantir.png',
    href: 'https://tf-front-sigma.vercel.app/',
  },
  {
    title: 'Thaiproperty4u',
    description:
      'Thaiproperty4u is the leading Thailand Property website - the best place to start your real estate search whether you are an investor, buying for own use, or looking for a place to rent. In DDproperty, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.',
    img: '/dd.png',
    href: 'https://www.thaiproperty4u.com/',
  },
  {
    title: 'Rastro',
    description: 'Rastro: beauty within reach. Find beautiful objects.',
    img: '/rastro.png',
    href: 'https://www.rastro.ai/',
  },
];
export const employeeData = [
  {
    name: 'Riad Ahmed',
    position: 'Founder',
    img: '/riad.jpg',
    href: 'https://reachout-1b7f6.web.app/',
  },
  {
    name: 'Mohammad Jahid',
    position: 'Full Stack Developer',
    img: '/jahid.png',
  },
  {
    name: 'Abdur Rahman',
    position: 'Full Stack Developer',
    img: '/abdur_rahman.jpg',
  },
  {
    name: 'Adnan Sarkar',
    position: 'Backend Developer',
    img: '/adnan.jpg',
  },
  {
    name: 'Faysal Ahmed',
    position: 'App Developer',
    img: '/faysal.jpg',
  },
];
export const testimonialData = [
  {
    title: 'Exceptional Service',
    description:
      'The team went above and beyond to ensure our project was a success. Their attention to detail and dedication were evident throughout.',
    img: '',
    name: 'Alice Johnson',
    position: 'Product Manager, Innovate Tech Solutions',
    rating: 5,
  },
  {
    title: 'Highly Recommend',
    description:
      'Their expertise and professionalism were outstanding. We couldn’t have asked for a better experience.',
    img: '',
    name: 'Bob Carter',
    position: 'Chief Strategy Officer, FutureGen Enterprises',
    rating: 5,
  },
  {
    title: 'Great Results',
    description:
      'We saw significant improvements in our operations thanks to their innovative solutions.',
    img: '',
    name: 'Claire Roberts',
    position: 'Operations Director, Apex Manufacturing',
    rating: 4,
  },
  {
    title: 'Excellent Support',
    description:
      'The support team was always available to assist us with any issues. Their prompt responses were greatly appreciated.',
    img: '',
    name: 'Daniel Lee',
    position: 'Head of Customer Success, Retail Dynamics',
    rating: 5,
  },
  {
    title: 'Impressive Work',
    description:
      'Their ability to understand our needs and deliver accordingly was impressive. The project exceeded our expectations.',
    img: '',
    name: 'Ella Martin',
    position: 'Marketing Director, Creative Solutions Ltd',
    rating: 4,
  },
  {
    title: 'Creative Solutions',
    description:
      'The team provided creative solutions that were both effective and efficient. We’re thrilled with the results.',
    img: '',
    name: 'Frank Lewis',
    position: 'Brand Manager, Trendsetters Agency',
    rating: 5,
  },
  {
    title: 'Outstanding Collaboration',
    description:
      'Working with them was a collaborative experience. They valued our input and integrated it seamlessly into the final product.',
    img: '',
    name: 'Grace Adams',
    position: 'CTO, NextGen Technologies',
    rating: 4,
  },
  {
    title: 'Reliable and Trustworthy',
    description:
      'They were reliable and trustworthy throughout the entire process. We knew we were in good hands.',
    img: '',
    name: 'Henry Wilson',
    position: 'Project Coordinator, BuildIt Corp',
    rating: 5,
  },
  {
    title: 'Professional Team',
    description:
      'The team was professional from start to finish. They delivered on time and within budget, and the quality was top-notch.',
    img: '',
    name: 'Isabella Martinez',
    position: 'General Manager, Prestige Hospitality',
    rating: 4,
  },
  {
    title: 'Exceptional Quality',
    description:
      'The quality of work was exceptional. We’ve received numerous compliments from our clients and stakeholders.',
    img: '',
    name: 'James Anderson',
    position: 'VP of Operations, Elite Financial Group',
    rating: 5,
  },
];

export const partnersData = [
  {
    name: 'Fiverr',
    img: '/fiverr.png',
  },
  {
    name: 'Upwork',
    img: '/upwork.png',
  },
  {
    name: 'Nuj',
    img: '/nuj.png',
  },
  {
    name: 'Rantir',
    img: '/rantir_logo.png',
  },
  {
    name: 'Overtime',
    img: '/overtime.png',
  },
  {
    name: 'Thaiproperty',
    img: '/thai.jpg',
  },
  {
    name: 'Hollow',
    img: '/hlw.png',
  },
  {
    name: 'Stripe',
    img: '/stripe.png',
  },
];

export const standardPackages = [
  {
    price: '500',
    type: 'Basic Package',
    features: [
      'UI/UX Design',
      'Front-End Development',
      'Basic Back-End Integration',
      'Single Platform Support',
      'Standard Security Features',
    ],
    icon: <FileClock className='text-white w-[45px] h-[45px] -mb-5' />,
  },
  {
    price: '1,500',
    type: 'Standard Package',
    features: [
      'All Basic Package Services',
      'Advanced Back-End Development',
      'Custom API Integrations',
      'Responsive Design for Multiple Devices',
      'Basic AI Chatbot Integration',
      'Hosting Included',
      'Admin Panel and Dashboard',
    ],
    icon: <NotebookPen className='text-white w-[45px] h-[45px] -mb-5' />,
  },
  {
    price: '4,500',
    type: 'Premium Package',
    features: [
      'All Standard Package Services',
      'Advanced AI Solutions',
      'Extended Support and Maintenance',
      'Enhanced Security and Compliance',
      'DevOps Support',
    ],
    icon: <BookUser className='text-white w-[45px] h-[45px] -mb-5' />,
  },
];

export const faqItems = [
  {
    question: 'What sets Docalert apart?',
    answer:
      'Our innovative platform empowers doctors to effortlessly manage patient data, track growth, and receive expert support for improvement.',
  },
  {
    question: "How do I unlock Docalert's benefits?",
    answer:
      'Simply sign up and purchase a subscription to access our comprehensive suite of tools.',
  },
  {
    question: 'Can I cancel or refund my subscription?',
    answer:
      'Please note that subscriptions are non-refundable and non-cancellable, as specified in our terms and conditions.',
  },
  {
    question: 'How does your growth analysis and support team work?',
    answer:
      'Our dedicated experts will analyze your patient data and provide personalized recommendations to enhance your practice.',
  },
  {
    question: 'What about patient reviews and feedback?',
    answer:
      "Patients can leave reviews, which we'll moderate and share with doctors to foster growth and improvement.",
  },
  {
    question: 'How does the gift and medal policy work?',
    answer:
      'Doctors who consistently receive excellent reviews will be rewarded with gifts and medals, celebrating their exceptional care.',
  },
  {
    question: 'Can you tell me more about the executive call support team?',
    answer:
      'Our team of over 1,000 call support specialists will contact patients to recall appointments, ensuring seamless communication.',
  },
  {
    question: "What's the scope of Docalert's user base?",
    answer:
      'We proudly support over 6,787 live doctors and more than 3 crore patients, and counting!',
  },
  {
    question: 'Is my data secure with Docalert?',
    answer:
      'Absolutely! We prioritize data security and comply with stringent Indian data protection laws.',
  },
];

export const menuItems = [
  { href: '/login', label: 'Login' },
  { href: '/about', label: 'About us' },
];

export const stacks = [
  'html5',
  'css3',
  'sass',
  'js',
  'reactjs',
  'tailwindcss',
  'bootstrap5',
  'figma',
  'nextjs2',
  'remix',
  'mongodb',
  'nodejs',
  'typescript',
  'mongoose',
  'postgresql',
  'aws',
  'cloudinary',
  'shadcnui',
  'firebase',
  'netlify',
  'render',
  'supabase',
  'graphql',
  'docker',
  'gcloud',
  'flutter',
  'electron',
  'github',
  'jira',
  'redux',
  'zod',
  'vitejs',
  'wordpress',
  'reactquery',
];

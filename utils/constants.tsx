import {
  BookUser,
  FileClock,
  NotebookPen,
  SquareActivity,
  Stethoscope,
  User,
  Users,
} from "lucide-react";

export const projectData = [
  {
    title: "Reachout.ai",
    description:
      "In today’s fast-paced recruiting world, standing out matters more than ever. At R3achout.AI, we understand the power of connection, where your emails are not just messages, they're the first step in building meaningful relationships. We empower recruiters like you to enhance your recruitment processes, get results, ensuring you stay one step ahead of the competition.",
    img: "/reachout.png",
    href: "https://reachout-1b7f6.web.app/",
  },
  {
    title: "Agrios",
    description: "Agrios is the largest global organic farm.",
    img: "/agrios.png",
    href: "https://agrios-ten.vercel.app/",
  },
  {
    title: "Overtimeam",
    description:
      "Overtime Athletic Management software is a comprehensive platform designed for athletic organizations, coaches, athletes, parents, and administrators.",
    img: "/ams.png",
    href: "https://overtimeam.com/",
  },
  {
    title: "Hollow Log Studios",
    description:
      "Specializing In Commercial and Residential Murals, Watercolor Portraits, and Illustrations, with a fun fantasy or fairy tale twist!",
    img: "/hollow.png",
    href: "https://www.hollowlogstudios.com/",
  },

  {
    title: "Rantir",
    description:
      "Rantir lets you think bigger, create dashboards and visual views faster and save time for every project without integrations.",
    img: "/rantir.png",
    href: "https://tf-front-sigma.vercel.app/",
  },
  {
    title: "Thaiproperty4u",
    description:
      "Thaiproperty4u is the leading Thailand Property website - the best place to start your real estate search whether you are an investor, buying for own use, or looking for a place to rent. In DDproperty, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.",
    img: "/dd.png",
    href: "https://www.thaiproperty4u.com/",
  },
  {
    title: "Rastro",
    description: "Rastro: beauty within reach. Find beautiful objects.",
    img: "/rastro.png",
    href: "https://www.rastro.ai/",
  },
];

export const faqItems = [
  {
    question: "What sets Docalert apart?",
    answer:
      "Our innovative platform empowers doctors to effortlessly manage patient data, track growth, and receive expert support for improvement.",
  },
  {
    question: "How do I unlock Docalert's benefits?",
    answer:
      "Simply sign up and purchase a subscription to access our comprehensive suite of tools.",
  },
  {
    question: "Can I cancel or refund my subscription?",
    answer:
      "Please note that subscriptions are non-refundable and non-cancellable, as specified in our terms and conditions.",
  },
  {
    question: "How does your growth analysis and support team work?",
    answer:
      "Our dedicated experts will analyze your patient data and provide personalized recommendations to enhance your practice.",
  },
  {
    question: "What about patient reviews and feedback?",
    answer:
      "Patients can leave reviews, which we'll moderate and share with doctors to foster growth and improvement.",
  },
  {
    question: "How does the gift and medal policy work?",
    answer:
      "Doctors who consistently receive excellent reviews will be rewarded with gifts and medals, celebrating their exceptional care.",
  },
  {
    question: "Can you tell me more about the executive call support team?",
    answer:
      "Our team of over 1,000 call support specialists will contact patients to recall appointments, ensuring seamless communication.",
  },
  {
    question: "What's the scope of Docalert's user base?",
    answer:
      "We proudly support over 6,787 live doctors and more than 3 crore patients, and counting!",
  },
  {
    question: "Is my data secure with Docalert?",
    answer:
      "Absolutely! We prioritize data security and comply with stringent Indian data protection laws.",
  },
];

export const menuItems = [
  // { href: "/login", label: "Login" },
  { href: "/about", label: "About us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

export const navItems = [
  {
    title: "Appointments",
    href: "/doctors-dashboard",
    icon: <Stethoscope className="ml-3 size-5 flex-none" />,
    label: "Appointments",
  },
  {
    title: "Profile",
    href: "/doctors-dashboard/profile",
    icon: <User className="ml-3 size-5 flex-none" />,
    label: "Profile",
  },
];

export const users = [
  {
    id: 1,
    patientName: "Patient Name",
    phone: "Patient Phone Number",
    nextAppointmentDate: "Next Appointment Date",
  },
];

import {
  BookUser,
  BriefcaseMedical,
  FileClock,
  Newspaper,
  NotebookPen,
  Stethoscope,
  User,
} from "lucide-react";

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
  { href: "/articles", label: "Articles" },
];

export const footerItems = [
  // { href: "/login", label: "Login" },
  { href: "/about", label: "About us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/why-us", label: "Why choose us?" },
  { href: "/articles", label: "Articles" },
  { href: "/terms", label: "Terms and Conditions" },
];

export const navItems = [
  {
    title: "Billings",
    href: "/doctors-dashboard/billings",
    icon: <Stethoscope className="size-5 flex-none" />,
    label: "Billings",
  },
  {
    title: "Appointments",
    href: "/doctors-dashboard",
    icon: <Stethoscope className="size-5 flex-none" />,
    label: "Appointments",
  },
  {
    title: "Profile",
    href: "/doctors-dashboard/profile",
    icon: <User className="size-5 flex-none" />,
    label: "Profile",
  },
];

export const navItemsAdmin = [
  {
    title: "Doctors",
    href: "/admin-dashboard",
    icon: <BriefcaseMedical className="size-5 flex-none" />,
    label: "Doctors",
  },
  {
    title: "Appointments",
    href: "/admin-dashboard/appointments",
    icon: <Stethoscope className="size-5 flex-none" />,
    label: "Appointments",
  },
  {
    title: "Articles",
    href: "/admin-dashboard/articles",
    icon: <Newspaper className="size-5 flex-none" />,
    label: "Articles",
  },
  {
    title: "Profile",
    href: "/admin-dashboard/profile",
    icon: <User className="size-5 flex-none" />,
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

//TODO: must change plan Id

export const standardPackages = [
  {
    price: "1,499",
    billing: "Monthly",
    type: "Basic Package",
    planId: "plan_OwKyxAtkqbfFH",

    features: [
      "Record patient data, including name, phone number, and next appointment date",
      "Appointment reminders via our executive call support team",
      "Growth analysis and support from our team of experts",
      "Patient review and feedback collection",
      "Doctor performance tracking and rewards",
    ],
    icon: <FileClock className="text-white w-[45px] h-[45px] -mb-5" />,
  },
  {
    price: "8,994",
    discount: "10%",
    billing: "Semi-Annual",
    type: "Semi-Annual Package",
    planId: "plan_OwKyxAtkqbfFi",
    features: [
      "All features from the 1-month plan",
      "Patient data analytics and insights",
      "Customized patient engagement campaigns",
      "Priority customer support",
    ],
    icon: <NotebookPen className="text-white w-[45px] h-[45px] -mb-5" />,
  },
  {
    price: "17,988",
    billing: "Annual",
    discount: "20%",
    type: "Annual Package",
    planId: "plan_OwKyxAtkqbfFiH",
    features: [
      "All features from the 6-month plan",
      "Dedicated account manager",
      "Advanced patient data analytics and insights",
      "Complimentary listing on our doctor directory",
    ],
    icon: <BookUser className="text-white w-[45px] h-[45px] -mb-5" />,
  },
];

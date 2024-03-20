import { StaticImageData } from "next/image";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
  youtube,
  surja,
  rajram,
  surana,
  jaipal,
  rameshkumar,
  rachnameel,
  santeega,
  madhu,
  dipaloy,
  vinita,
  sharda,
  anurag,
  swati,
  poonam,
  archana,
  anupama,
  shraddhakar,
  chaurasia,
  joshi,
  bhuwan,
  ramprasad,
  mail,
  rksharma,
  manu,
  kcgupta,
  kawasthi,
  bhojak,
  alka,
  meghanshu,
  khanbaba,
  sksukla,
  drmeena,
  warner,
} from "./public";

const navLinks: { herf: string; text: string }[] = [
  {
    herf: "/",
    text: "Home",
  },
  {
    herf: "/about",
    text: "About Us",
  },
  {
    herf: "/organizers",
    text: "Organizers",
  },
  {
    herf: "/advisors",
    text: "Advisors",
  },
  {
    herf: "/speakers",
    text: "Speakers",
  },
  {
    herf: "/registration",
    text: "Registrations & Submissions",
  },
  {
    herf: "/publication",
    text: "Publications",
  },
  {
    herf: "/guidelines",
    text: "Paper Submission Guidelines",
  },
];

const socials: { icon: StaticImageData; id: string; link: string }[] = [
  {
    icon: facebook,
    id: "@SKITJAIP",
    link: "https://www.facebook.com/SKITJAIP",
  },
  {
    icon: twitter,
    id: "@skit_jaipur",
    link: "https://twitter.com/skit_jaipur",
  },
  {
    icon: instagram,
    id: "@skitjaipurofficial",
    link: "https://www.instagram.com/skitjaipurofficial/",
  },
  {
    icon: linkedin,
    id: "@skit_jaipur",
    link: "https://www.linkedin.com/school/skit-jaipur/",
  },
  {
    icon: youtube,
    id: "@SKITJaipurOfficial",
    link: "https://www.youtube.com/channel/UCkMtvOxbKCT6WelA6e4-W2A",
  },
  {
    icon: mail,
    id: "icepadm@skit.ac.in",
    link: "mailto::icepadm@skit.ac.in",
  },
];

const contact: {
  photo: StaticImageData;
  name: string;
  phoneNumber: string;
}[] = [
  {
    photo: sharda,
    name: "Dr. Sharda Soni",
    phoneNumber: "+91 9785337775",
  },
  {
    photo: archana,
    name: "Dr. Archana Saxena",
    phoneNumber: "+91 9414460650",
  },
];

const organizers: {
  category: string;
  members: {
    photo: StaticImageData;
    name: string;
    post: string;
    department: string;
  }[];
}[] = [
  {
    category: "Patrons",
    members: [
      {
        photo: rajram,
        name: "Shri Raja Ram Meel",
        post: "Chief Patron",
        department: "SKIT, Jaipur, India",
      },
      {
        photo: surja,
        name: "Shri Surja Ram Meel",
        post: "Chairman",
        department: "SKIT, Jaipur, India",
      },
    ],
  },
  {
    category: "Mentors",
    members: [
      {
        photo: jaipal,
        name: "Jaipal Meel",
        post: "Director",
        department: "SKIT, Jaipur, India",
      },
      {
        photo: surana,
        name: "Prof. (Dr.) S.L. Surana",
        post: "Director (Academics)",
        department: "SKIT, Jaipur, India",
      },
      {
        photo: rameshkumar,
        name: "Prof. (Dr.) Ramesh Kumar Pachar",
        post: "Principal",
        department: "SKIT, Jaipur, India",
      },
      {
        photo: rachnameel,
        name: "Mrs. Rachna Meel",
        post: "Registrar",
        department: "SKIT, Jaipur, India",
      },
    ],
  },
  {
    category: "Convenors",
    members: [
      {
        photo: sharda,
        name: "Dr. Sharda Soni",
        post: "Head of Department",
        department: "Department of Chemistry, SKIT",
      },
      {
        photo: archana,
        name: "Prof. Archana Saxena",
        post: "Professor",
        department: "Department of Chemistry, SKIT",
      },
    ],
  },
  {
    category: "Co-Convenors",
    members: [
      {
        photo: santeega,
        name: "Prof. Sangeeta Vyas",
        post: "Professor",
        department: "Department of Chemistry, SKIT",
      },
      {
        photo: vinita,
        name: "Prof. Vinita Sharma",
        post: "Professor",
        department: "Department of Chemistry, SKIT",
      },
    ],
  },
  {
    category: "Organizing Secretaries",
    members: [
      {
        photo: anurag,
        name: "Dr. Anurag Sharma",
        post: "Associate Professor",
        department: "Department of Chemistry, SKIT",
      },
      {
        photo: swati,
        name: "Dr. Swati Joshi",
        post: "Associate Professor",
        department: "Department of Chemistry, SKIT",
      },
      {
        photo: poonam,
        name: "Dr. Poonam Ojha",
        post: "Assistant Professor",
        department: "Department of Chemistry, SKIT",
      },
    ],
  },
];

const advisoryBoard: {
  category: string;
  members: {
    name: string;
    post: string;
    address: string;
  }[];
}[] = [
  {
    category: "Advisory Committee",
    members: [
      {
        name: "Prof. Paul Anastas",
        post: "Director",
        address: "Yale University, USA",
      },
      {
        name: "Prof. P.S. Verma",
        post: "Professor",
        address: "UOR, Jaipur",
      },
      {
        name: "Prof. A. B. Gupta",
        post: "Professor",
        address: "MNIT Jaipur",
      },
      {
        name: "Prof. R. K. Vyas",
        post: "Professor",
        address: "MNIT, Jaipur",
      },
      {
        name: "Prof. Vimal Chandra Srivastava",
        post: "Professor",
        address: "IIT Roorkee, Roorkee",
      },
      {
        name: "Dr. Uma Rathore",
        post: "Doctor",
        address: "GCRC, Govt Dungar College, Bikaner",
      },
      {
        name: "Mr. Bhuwanpathak",
        post: "Professor",
        address:
          "The Himalayan Institute of Research and Development (THIRD), Uttarakhand",
      },
      {
        name: "Prof. Vivek Pandey",
        post: "Professor",
        address: "Department of Chemistry, RTU, Kota",
      },
      {
        name: "Dr. S.N. Jatolia",
        post: "Professor",
        address: "GCRC, Govt Dungar College, Bikaner",
      },
      {
        name: "Dr. Mohd Zaheer Khan Yusufzai",
        post: "Professor",
        address: "IIT, Varanasi (UP) India",
      },
      {
        name: "Prof. Praveen K. Surolia",
        post: "HOD",
        address: "Chemistry Department, Manipal University, Jaipur",
      },
      {
        name: "Prof. Surekha Bhanot",
        post: "Professor",
        address: "BITS, Pilani",
      },
      {
        name: "Dr. Kanika Solanki Shyam Lal",
        post: "Professor",
        address: "College University of Delhi, Delhi",
      },
      {
        name: "Dr. Goverdhan Vyas",
        post: "Professor",
        address: "Govt College Raipur, Chhatisgarh",
      },
      {
        name: "Dr. Nivedita Kaul",
        post: "Professor",
        address: "MNIT, Jaipur",
      },
      {
        name: "Dr. Hemendra Singh Bhandari",
        post: "Professor",
        address: "Govt Dungar College, Bikaner",
      },
      {
        name: "Dr. Garima Kaushik",
        post: "Professor",
        address: "CURAJ, Kishangarh (Rajasthan)",
      },
      {
        name: "Dr. Sweta Vyas",
        post: "Professor",
        address: "Department of Chemistry, Kota University",
      },
      {
        name: "Dr. Raja Ram",
        post: "Professor",
        address: "GCRC, Govt Dungar College, Bikaner",
      },
    ],
  },
  {
    category: "Institute Advisory Committee",
    members: [
      {
        name: "Prof. Hemlata Dullar",
        post: "Principal",
        address: "Swami Keshvanand Institute of Pharmacy, Jaipur",
      },
      {
        name: "Prof. R. K. Jain",
        post: "Dean",
        address: "SKIT, Jaipur",
      },
      {
        name: "Prof. Mukesh Arora",
        post: "Head",
        address: "OFA & Department of ECE",
      },
      {
        name: "Prof. Anil Choudhary",
        post: "Head",
        address: "Department of IT",
      },
      {
        name: "Prof. Mukesh Gupta",
        post: "Head",
        address: "Department of CSE",
      },
      {
        name: "Prof. D.K. Sharma",
        post: "Head",
        address: "Department of Civil Engineering",
      },
      {
        name: "Prof. B. L. Sharma",
        post: "",
        address: "Department of Civil Engineering",
      },
      {
        name: "Prof. Dheeraj Joshi",
        post: "Head",
        address: "Department of Mechanical Engineering",
      },
      {
        name: "Prof. Ashish Nayyar",
        post: "",
        address: "Department of Mechanical Engineering",
      },
      {
        name: "Dr. Sarfaraz Nawaz",
        post: "Head",
        address: "Department of Electrical Engineering",
      },
      {
        name: "Prof. Rohit Mukherjee",
        post: "I/C B.Tech. I Year",
        address: "SKIT, Jaipur",
      },
      {
        name: "Prof. Amber Srivastava",
        post: "Head",
        address: "Department of Maths",
      },
      {
        name: "Prof. Puneet Sharma",
        post: "CEO",
        address: "SKIT Innovation Incubation Entrepreneurship Centre",
      },
      {
        name: "Prof. Brajraj Sharma",
        post: "Head",
        address: "Department of Physics",
      },
      {
        name: "Prof. Neha Purohit",
        post: "Head",
        address: "Department of English",
      },
      {
        name: "Prof. Ona Ladiwal",
        post: "Head",
        address: "Department of Management Studies",
      },
      {
        name: "Dr. Savita Choudhary",
        post: "",
        address: "Department of Management Studies",
      },
    ],
  },
];

const speakers: {
  photo: StaticImageData;
  name: string;
  post: string;
  address: string;
}[] = [
  {
    photo: warner,
    name: "Prof. John C. Warner",
    post: "President, CTO and Chairman",
    address: "Warner Babcock Institute for Green Chemistry",
  },
  {
    photo: shraddhakar,
    name: "Dr. Shraddhakar",
    post: "Principal Engineer",
    address: "Worley Engineering, West Virginia, USA",
  },
  {
    photo: rksharma,
    name: "Prof. R. K. Sharma",
    post: "Coordinator",
    address: "Green Chemistry Network Centre, Deakin University, Australia",
  },
  {
    photo: anupama,
    name: "Dr. Anupama Kumar",
    post: "Senior scientist",
    address: "CSIRO, Adelaide, South Australia",
  },
  {
    photo: manu,
    name: "Manu Sikarwar",
    post: "Assistant Director",
    address:
      "Higher Education Government of Rajasthan, Jaipur, Rajasthan, India",
  },
  {
    photo: kcgupta,
    name: "Dr. K.C. Gupta",
    post: "INSA Scientist",
    address:
      "Department of Chemistry, University of Delhi, Delhi, India",
  },
  {
    photo: kawasthi,
    name: "Prof. Satish K. Awasthi",
    post: "Head",
    address: "Department of Chemistry, University of Delhi, Delhi, India",
  },
  {
    photo: joshi,
    name: "Prof. P.K.Joshi",
    post: "School of Environmental Sciences",
    address: "JNU, New Delhi, India",
  },
  {
    photo: bhuwan,
    name: "Mr. Bhuwan Pathak",
    post: "Founder",
    address:
      "The Himalayan institute of research and development (THIRD)-Bageshwer Uttarakhand",
  },
  {
    photo: alka,
    name: "Prof. Alka Agrawal",
    post: "Department of Medicinal Chemistry",
    address: "Banaras Hindu University, Vanarasi (UP) India",
  },
  {
    photo: ramprasad,
    name: "Dr.Ram Prasad",
    post: "Department of Botany",
    address:
      "Mahatma Gandhi Central University, Motihari, East Champaran, Bihar, India",
  },
  {
    photo: bhojak,
    name: "Prof. Narendar Bhojak",
    post: "GCRC, Department of Chemistry",
    address: "Govt. Dungar College,Bikaner (Rajasthan) India",
  },
  {
    photo: meghanshu,
    name: "Dr. Meghanshu Vashista",
    post: "Department of Mechanical Engineering",
    address: "Indian Institute of Technology, Varanasi (UP) India",
  },
  {
    photo: khanbaba,
    name: "Dr. Mohd Zaheer Khan Yusufzai",
    post: "Department of Mechanical Engineering",
    address: "Indian Institute of Technology , Varanasi (UP)Varanasi (UP)",
  },
  {
    photo: sksukla,
    name: "Dr. S. K. Shukla",
    post: "Department Of Polymer Science",
    address: "University of Delhi, Delhi, India",
  },
  {
    photo: drmeena,
    name: "Dr. Meena Nemiwal",
    post: "Department of Chemistry",
    address: "Malaviya National Institute of Technology Jaipur",
  },
];

const registrationDetails: {
  category: string;
  feeIndians: string; // in ₹
  feeNonIndians: string; // in $
  registrationLink: string;
}[] = [
  {
    category: "PhD Scholar / Students",
    feeIndians: "1000",
    feeNonIndians: "30",
    registrationLink: "https://erp.skit.ac.in/register/r/icepadm2024",
  },
  {
    category: "Academicians",
    feeIndians: "1500",
    feeNonIndians: "50",
    registrationLink: "https://erp.skit.ac.in/register/r/icepadmfacu2024",
  },
  {
    category: "Industry Person",
    feeIndians: "2000",
    feeNonIndians: "50",
    registrationLink: "https://erp.skit.ac.in/register/r/icepadmindu2024",
  },
];

const paperSubmissionDetails: {
  category: string;
  teamplateLink: string;
  submissionLink: string;
}[] = [
  {
    category: "Abstract Submission",
    teamplateLink:
      "https://docs.google.com/document/d/1Rb5DvzuUXDpbbEupNE4R-rFnRZv8qxJP/edit#heading=h.gjdgxs",
    submissionLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeb28RhmLEIO6usTVDlBBI2l6ISCsHLr4CKz6PpYEoyiD4XhQ/viewform",
  },
  {
    category: "Full Paper Submission",
    teamplateLink:
      "https://docs.google.com/document/d/1z155H-_eH0-BXD4hs2wfwXBCwSaFikBXDie1iqQuBnI/edit",
    submissionLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdSExe_iEwNF0SqqlV25a410e8SHd9Nr8b0znQZhuKmlXW1pQ/viewform",
  },
];

const importantDates: {
  category: string;
  lastDate: string;
}[] = [
  {
    category: "Abstract Submission",
    lastDate: "20th March, 2024",
  },
  {
    category: "Acceptance of Abstract",
    lastDate: "22th March, 2024",
  },
  {
    category: "Full Paper Submission",
    lastDate: "25th March, 2024",
  },
  {
    category: "Last Date of Registration",
    lastDate: "25th March, 2024",
  },
];

export {
  navLinks,
  socials,
  organizers,
  advisoryBoard,
  speakers,
  contact,
  registrationDetails,
  paperSubmissionDetails,
  importantDates
};

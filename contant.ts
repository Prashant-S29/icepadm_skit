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
    category: "Chairpersons",
    members: [
      {
        photo: santeega,
        name: "Dr. Sangeeta Vyas",
        post: "Professor",
        department: "Department of Chemistry, SKIT",
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
    category: "Organizing Secretaries",
    members: [
      {
        photo: vinita,
        name: "Prof. Vinita Sharma",
        post: "Professor",
        department: "Department of Chemistry, SKIT",
      },
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
    category: "International and National Advisory Committee",
    members: [
      {
        name: "Dr. Shradhakar",
        post: "PE & SME",
        address: "Worley Engineering, West Virginia, USA",
      },
      {
        name: "Dr. Anupama",
        post: "Senior Scientist",
        address: "CSIRO, Adelaide, South Australia",
      },
      {
        name: "Prof. R. K. Sharma",
        post: "Professor",
        address: "University of Delhi, Delhi, India",
      },
      {
        name: "Prof. Satish K. Awasthi",
        post: "Professor",
        address: "University of Delhi, Delhi, India",
      },
      {
        name: "Dr. K.C. Gupta",
        post: "Professor",
        address: "Delhi University, Delhi, India",
      },
      {
        name: "Prof. P.S. Verma",
        post: "Emeritus Scientist",
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
        name: "Prof. Narendar Bhojak",
        post: "Professor",
        address: "Govt Dungar College, Bikaner",
      },
      {
        name: "Prof. Vimal Chandra Srivastava",
        post: "Professor",
        address: "IIT Roorkee, Roorkee",
      },
      {
        name: "Prof. S. K. Awasthi",
        post: "Head, Department of Chemistry",
        address: "Delhi University, Delhi, India",
      },
      {
        name: "Prof. P. K. Joshi",
        post: "Professor",
        address: "JNU, New Delhi",
      },
      {
        name: "Mr. Bhuwanpathak",
        post: "Founder",
        address:
          "The Himalayan Institute of Research and Development (THIRD), Bageshwer, Uttarakhand",
      },
      {
        name: "Prof. Vivek Pandey",
        post: "Professor",
        address: "Department of Chemistry, RTU, Kota",
      },
      {
        name: "Prof. Alka Agrawal",
        post: "Professor",
        address: "Banaras Hindu University, Varanasi (UP), India",
      },
      {
        name: "Dr. Meghanshu Vashista",
        post: "Associate Professor",
        address: "IIT Varanasi (UP), India",
      },
      {
        name: "Mr. Manu Sikarwar",
        post: "Higher Education Government",
        address: "Jaipur, Rajasthan, India",
      },
      {
        name: "Dr. Mohd Zaheer Khan Yusufzai",
        post: "IIT",
        address: "Varanasi (UP), India",
      },
      {
        name: "Prof. Surekha Bhanot",
        post: "Professor",
        address: "BITS, Pilani",
      },
      {
        name: "Dr. S. K. Shukla",
        post: "Professor",
        address: "University of Delhi, Delhi, India",
      },
      {
        name: "Dr. Kanika Solanki Shyam Lal",
        post: "College University",
        address: "University of Delhi, Delhi, India",
      },
      {
        name: "Dr. Goverdhan Vyas",
        post: "Govt College",
        address: "Raipur, Chhattisgarh, India",
      },
      {
        name: "Dr. Nivedita Kaul",
        post: "MNIT",
        address: "Jaipur, India",
      },
      {
        name: "Dr. Hemendra Singh Bhandari",
        post: "Govt Dungar College",
        address: "Bikaner, India",
      },
      {
        name: "Dr. S.K. Verma",
        post: "Govt Dungar College",
        address: "Bikaner, India",
      },
      {
        name: "Dr. Meena",
        post: "MNIT",
        address: "Jaipur, India",
      },
      {
        name: "Dr. Garima Kaushik",
        post: "CURAJ",
        address: "Kishangarh, Rajasthan, India",
      },
      {
        name: "Dr. Sweta Vyas",
        post: "Department of Chemistry",
        address: "Kota University",
      },
    ],
  },
  {
    category: "Institute Advisory Committee",
    members: [
      {
        name: "Prof. R. K. jain",
        post: "Dean",
        address: "",
      },
      {
        name: "Prof. Mukesh Arora",
        post: "Head, OFA",
        address: "",
      },
      {
        name: "Prof. D.K. Sharma",
        post: "Head, Department of Civil Engineering",
        address: "",
      },
      {
        name: "Prof. B. L. Sharma",
        post: "Department of Civil Engineering",
        address: "",
      },
      {
        name: "Prof. Dheeraj Joshi",
        post: "Head, Department of Mechanical Engineering",
        address: "",
      },
      {
        name: "Prof. Ashish Nayyar",
        post: "Department of Mechanical Engineering",
        address: "",
      },
      {
        name: "Dr. Sarfaraz Nawaz",
        post: "Head, Department of Electrical Engineering",
        address: "",
      },
      {
        name: "Prof. Rohit Mukherjee",
        post: "I/C B.Tech. I Year",
        address: "",
      },
      {
        name: "Prof. Amber Srivastava",
        post: "Head, Department of Maths",
        address: "",
      },
      {
        name: "Prof. Brajraj Sharma",
        post: "Head, Department of Physics",
        address: "",
      },
      {
        name: "Prof. Neha Purohit",
        post: "Head, Department of English",
        address: "",
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
    post: "Scientist F (Retd.)",
    address:
      "CSIR-Institute of Genomics & Integrative Biology, University of Delhi, Delhi, India",
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

export {
  navLinks,
  socials,
  organizers,
  advisoryBoard,
  speakers,
  contact,
  registrationDetails,
  paperSubmissionDetails,
};

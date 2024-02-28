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
    text: "Guidelines",
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
        post: "Hon.Secretary",
        department: "InDA",
      },
    ],
  },
  {
    category: "Organizing Secretaries",
    members: [
      {
        photo: vinita,
        name: "Dr. Vinita Sharma",
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
    category: "Inter Institute Advisory Committee",
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
    category: "Intra Institute Advisory Committee",
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
        name: "Dr. Sharda Soni",
        post: "Head, Department of Chemistry",
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
    name: "Professor R. K. Sharma",
    post: "Coordinator",
    address: "Deakin University, Australia",
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
    post: "Visiting Researcher",
    address: "PSL University Paris, France",
  },
  {
    photo: chaurasia,
    name: "Prof. S.P. Chaurasia",
    post: "President",
    address: "InDA and Professor, MNIT Jaipur",
  },
  {
    photo: kcgupta,
    name: "Dr. K.C. Gupta",
    post: "Integrative Biology",
    address: "Delhi University, Delhi, India",
  },
  {
    photo: kawasthi,
    name: "Professor Satish K. Awasthi",
    post: "Senior Professor and Head",
    address: "University of Delhi, Delhi, India",
  },
  {
    photo: joshi,
    name: "Prof P.K.Joshi",
    post: "Professor",
    address: "JNU, New Delhi,India",
  },
  {
    photo: bhuwan,
    name: "Mr. Bhuwan Pathak",
    post: "Founder",
    address:
      "The Himalayan institute of research and development (THIRD)-Bageshwer Uttarakhand",
  },
  {
    photo: bhojak,
    name: "Dr. Narendar Bhojak",
    post: "Principal Engineer",
    address: "Worley Engineering, West Virginia, USA",
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
      "Mahatma Gandhi Central University, Motihari, East Champaran, Bihar, INDIA",
  },
  {
    photo: meghanshu,
    name: "Dr. Meghanshu Vashista",
    post: "Associate Professor",
    address:
      "Department of Mechanical Engineering Indian Institute of Technology, Varanasi (UP) India",
  },
  {
    photo: khanbaba,
    name: "Dr. Mohd Zaheer Khan Yusufzai",
    post: "Associate Professor",
    address: "Varanasi (UP)",
  },
  {
    photo: sksukla,
    name: "Dr. S. K. Shukla",
    post: "DU · Department Of Polymer Science",
    address: "University of Delhi , Delhi, India",
  },
  {
    photo: drmeena,
    name: "Dr. Meena Nemiwal",
    post: "Assistant Professor",
    address:
      "Dept. of Chemistry, Malaviya National Institute of Technology Jaipur",
  },
];

// }[] = [
//   {
//     photo: dalai,
//     name: "Prof. Ajay K. Dalai",
//     post: "Dept. of Chemical and Biological",
//     address: "Engg. University of Saskatchewan, Canada",
//   },
//   {
//     photo: anupama,
//     name: "Dr. Anupama Kumar",
//     post: "Senior scientist, CSIRO Adelaide",
//     address: "South Australia",
//   },
//   {
//     photo: shraddhakar,
//     name: "Dr. Shraddhakar",
//     post: "Principal Engineer, Worley",
//     address: "Engineering, West Virginia, USA",
//   },
//   {
//     photo: chaurasia,
//     name: "Prof. S.P. Chaurasia",
//     post: "President, InDA and Professor",
//     address: "MNIT Jaipur",
//   },
//   {
//     photo: joshi,
//     name: "Prof. P.K.Joshi",
//     post: "Professor",
//     address: "Center for Disaster Reseach,JNU,New Delhi",
//   },
//   {
//     photo: vimal,
//     name: "Prof. Vimal Chandra Srivastava",
//     post: "HOD Chemistry Department",
//     address: "IIT Roorkee, India",
//   },
//   {
//     photo: dinesh,
//     name: "Prof. Dinesh Mohan",
//     post: "School of Environmental Sciences",
//     address: "JNU, New Delhi. India",
//   },
//   {
//     photo: amrit,
//     name: "Prof. Amrit Pal Toor",
//     post: "Professor",
//     address: "Panjab Univ., Chandigarh.India",
//   },
//   {
//     photo: garima,
//     name: "Dr. Garima Prajapat",
//     post: "Govt. Engineering College Bikaner",
//     address: "India",
//   },
//   {
//     photo: sataya,
//     name: "Dr. Satya Prakash Mehra",
//     post: "Professor & Director",
//     address: "Rajputana Society of Natural History, Rajasthan, India",
//   },
//   {
//     photo: bhuwan,
//     name: "Mr. Bhuwan pathak",
//     post: "Founder",
//     address: "Himalayan Institute of R&D, Uttarakhand",
//   },
//   {
//     photo: sriram,
//     name: "Mr. Sriram Kulkarni",
//     post: "Director, Technochem.Group",
//     address: "Mumbai, India",
//   },
//   {
//     photo: ajay,
//     name: "Prof. Ajay Bansal",
//     post: "Chem. Engg. NIT Jalandhar",
//     address: "Punjab",
//   },
//   {
//     photo: ramprasad,
//     name: "Dr.Ram Prasad",
//     post: "Department of Botany",
//     address: "Mahatma Gandhi Central University, Bhiar",
//   },
//   {
//     photo: hemish,
//     name: "Mr. Hemish kapadia",
//     post: "CEO",
//     address: "Neo Nir, Surat",
//   },
// ];

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
    registrationLink: "",
  },
  {
    category: "Academicians",
    feeIndians: "1500",
    feeNonIndians: "50",
    registrationLink: "",
  },
  {
    category: "Industry Person",
    feeIndians: "2000",
    feeNonIndians: "50",
    registrationLink: "",
  },
];

const paperSubmissionDetails: {
  category: string;
  teamplateLink: string;
  submissionLink: string;
}[] = [
  {
    category: "Abstract Submission",
    teamplateLink: "1000",
    submissionLink: "",
  },
  {
    category: "Full Paper Submission",
    teamplateLink: "1500",
    submissionLink: "",
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
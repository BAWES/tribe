import type { Club, University, Major, Class, MajorClass, Country } from "./types"

// This is mock data - in a real app, this would come from a database
const clubsData: Club[] = [
  {
    id: "1",
    name: "Translation Club",
    slug: "translation-club",
    description:
      "The Translation Club is dedicated to promoting language learning and cultural exchange through translation activities. Members work on translating various texts, from literature to media, and engage in discussions about language and culture.",
    category: "Social & Edu",
    location: "GUST",
    status: "Active",
    email: "translationclub@gust.edu.kw",
    instagram: "tc_kw",
    joiningRules: [
      "Open to all students interested in languages",
      "No prior translation experience required",
      "Commitment to attend at least 70% of meetings",
      "Participation in at least one translation project per semester",
    ],
    meetingSchedule: "Every Wednesday at 4:00 PM in Room 203",
    members: [
      {
        id: "1",
        name: "Fatimah Al Sughayer",
        role: "President",
        bio: "Senior linguistics student with a passion for Arabic-English translation",
        image: "",
      },
      {
        id: "2",
        name: "Hedayah Alothman",
        role: "Vice President",
        bio: "Multilingual student specializing in technical translations",
        image: "",
      },
      {
        id: "3",
        name: "Aisha Alrushaid",
        role: "Head of Media",
        bio: "Media studies major with experience in content localization",
        image: "",
      },
      {
        id: "4",
        name: "Areej Albreekan",
        role: "Head of PR",
        bio: "Communications student focused on international relations",
        image: "",
      },
      {
        id: "5",
        name: "Maryam Almahboub",
        role: "Head of Events",
        bio: "Event planning enthusiast with experience organizing cultural exchanges",
        image: "",
      },
      {
        id: "6",
        name: "Abdulaziz Al Shammari",
        role: "Treasurer",
        bio: "Finance major helping manage club resources and budget",
        image: "",
      },
    ],
  },
  {
    id: "2",
    name: "Finance Club",
    slug: "finance-club",
    description:
      "The Finance Club aims to enhance students' understanding of financial markets, investment strategies, and career opportunities in finance. We organize workshops, guest speaker sessions, and networking events.",
    category: "Finance",
    location: "AUK",
    status: "Active",
    email: "financeclub@auk.edu.kw",
    website: "https://financeclub.auk.edu.kw",
    joiningRules: [
      "Open to all students interested in finance",
      "Membership fee of 10 KWD per semester",
      "Attendance at orientation session required",
      "Participation in at least two club activities per semester",
    ],
    meetingSchedule: "Every Monday at 5:30 PM in Business Building, Room 105",
    members: [
      {
        id: "1",
        name: "Ahmad Al-Sabah",
        role: "President",
        bio: "Finance major with internship experience at Kuwait Investment Authority",
        image: "",
      },
      {
        id: "2",
        name: "Noura Al-Mutairi",
        role: "Vice President",
        bio: "Economics student researching sustainable investment",
        image: "",
      },
    ],
  },
  {
    id: "3",
    name: "Computer Science Club",
    slug: "computer-science-club",
    description:
      "The Computer Science Club is a community for students interested in programming, software development, and technology. We host coding competitions, workshops, and collaborative projects.",
    category: "Computer & Science",
    location: "KU",
    status: "Active",
    email: "csclub@ku.edu.kw",
    instagram: "ku_csclub",
    joiningRules: [
      "Open to all students regardless of major",
      "Basic programming knowledge recommended but not required",
      "Commitment to participate in at least one project per year",
      "Attendance at monthly general meetings",
    ],
    meetingSchedule: "Biweekly on Thursdays at 6:00 PM in Engineering Building, Lab 302",
    members: [
      {
        id: "1",
        name: "Mohammed Al-Enezi",
        role: "President",
        bio: "Senior CS student specializing in AI and machine learning",
        image: "",
      },
      {
        id: "2",
        name: "Sara Al-Qattan",
        role: "Vice President",
        bio: "Software engineering student with web development experience",
        image: "",
      },
    ],
  },
  {
    id: "4",
    name: "Art Club",
    slug: "art-club",
    description:
      "The Art Club provides a creative space for students to explore various art forms, develop their skills, and showcase their work. We welcome artists of all levels and interests.",
    category: "ART",
    location: "GUST",
    status: "Active",
    email: "artclub@gust.edu.kw",
    instagram: "gust_artclub",
    joiningRules: [
      "Open to all students with an interest in art",
      "No prior experience necessary",
      "Bring your own supplies for most sessions",
      "Participate in at least one exhibition per year",
    ],
    meetingSchedule: "Every Saturday at 3:00 PM in Arts Building, Studio 5",
    members: [
      {
        id: "1",
        name: "Layla Al-Ahmad",
        role: "President",
        bio: "Fine arts major specializing in oil painting",
        image: "",
      },
      {
        id: "2",
        name: "Jassim Al-Fahad",
        role: "Vice President",
        bio: "Graphic design student with a passion for digital art",
        image: "",
      },
    ],
  },
  {
    id: "5",
    name: "Debate Club",
    slug: "debate-club",
    description:
      "The Debate Club fosters critical thinking, public speaking, and argumentation skills through regular debates on current events and philosophical topics. We participate in local and international competitions.",
    category: "Social & Edu",
    location: "AUK",
    status: "Active",
    email: "debateclub@auk.edu.kw",
    instagram: "auk_debate",
    joiningRules: [
      "Open to all students interested in debate and public speaking",
      "Commitment to attend weekly practice sessions",
      "Participation in at least two internal debates per semester",
      "Willingness to research debate topics thoroughly",
    ],
    meetingSchedule: "Every Tuesday and Thursday at 6:00 PM in Liberal Arts Building, Room 203",
    members: [
      {
        id: "1",
        name: "Yousef Al-Mutawa",
        role: "President",
        bio: "Political science major with experience in Model UN",
        image: "",
      },
      {
        id: "2",
        name: "Dalal Al-Sabah",
        role: "Vice President",
        bio: "International relations student and champion debater",
        image: "",
      },
    ],
  },
  {
    id: "6",
    name: "Environmental Club",
    slug: "environmental-club",
    description:
      "The Environmental Club is dedicated to promoting sustainability, environmental awareness, and conservation efforts on campus and in the wider community. We organize clean-ups, awareness campaigns, and sustainability initiatives.",
    category: "Social & Edu",
    location: "KU",
    status: "Active",
    email: "envclub@ku.edu.kw",
    website: "https://kuenvironmental.org",
    instagram: "ku_environmental",
    joiningRules: [
      "Open to all students passionate about environmental issues",
      "Commitment to participate in at least one project per semester",
      "Attendance at monthly general meetings",
      "Willingness to volunteer for community initiatives",
    ],
    meetingSchedule: "First Monday of each month at 5:00 PM in Science Building, Room 105",
    members: [
      {
        id: "1",
        name: "Hasan Al-Enezi",
        role: "President",
        bio: "Environmental science major focusing on marine conservation",
        image: "",
      },
      {
        id: "2",
        name: "Mariam Al-Sager",
        role: "Vice President",
        bio: "Biology student researching local ecosystem preservation",
        image: "",
      },
    ],
  },
]

// New data for educational ecosystem
const countriesData: Country[] = [
  { code: "KW", name: "Kuwait", flagEmoji: "🇰🇼" },
  { code: "US", name: "United States", flagEmoji: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flagEmoji: "🇬🇧" },
  { code: "AE", name: "United Arab Emirates", flagEmoji: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", flagEmoji: "🇸🇦" },
  { code: "QA", name: "Qatar", flagEmoji: "🇶🇦" },
  { code: "BH", name: "Bahrain", flagEmoji: "🇧🇭" },
  { code: "OM", name: "Oman", flagEmoji: "🇴🇲" },
]

const universitiesData: University[] = [
  {
    id: "1",
    name: "American University of Kuwait",
    slug: "american-university-of-kuwait",
    shortName: "AUK",
    logo: "/placeholder.svg?height=200&width=200&text=AUK",
    location: "Salmiya, Kuwait",
    description:
      "The American University of Kuwait (AUK) is an independent, private, equal opportunity, and coeducational liberal arts institution of higher education.",
    website: "https://www.auk.edu.kw",
    establishedYear: 2004,
    isActive: true,
    countryCode: "KW",
  },
  {
    id: "2",
    name: "Gulf University for Science and Technology",
    slug: "gulf-university-for-science-and-technology",
    shortName: "GUST",
    logo: "/placeholder.svg?height=200&width=200&text=GUST",
    location: "Mubarak Al-Abdullah, Kuwait",
    description:
      "Gulf University for Science and Technology (GUST) is a private university in Kuwait with a focus on business and technology education.",
    website: "https://www.gust.edu.kw",
    establishedYear: 2002,
    isActive: true,
    countryCode: "KW",
  },
  {
    id: "3",
    name: "Kuwait University",
    slug: "kuwait-university",
    shortName: "KU",
    logo: "/placeholder.svg?height=200&width=200&text=KU",
    location: "Kuwait City, Kuwait",
    description:
      "Kuwait University is a public university and the state's first and largest university. It has 16 colleges offering undergraduate, graduate, and doctoral programs.",
    website: "https://www.ku.edu.kw",
    establishedYear: 1966,
    isActive: true,
    countryCode: "KW",
  },
]

const majorsData: Major[] = [
  {
    id: "1",
    name: "Computer Science",
    slug: "computer-science",
    code: "CS",
    description:
      "The Computer Science program focuses on the fundamentals of program design, software development, computer organization, and problem-solving using computers.",
    department: "Computer Science and Engineering",
    universityId: "1", // AUK
    degreeType: "Bachelor",
    creditHours: 124,
    isActive: true,
  },
  {
    id: "2",
    name: "Business Administration",
    slug: "business-administration",
    code: "BUS",
    description:
      "The Business Administration program prepares students for careers in business and management through a curriculum that emphasizes both theoretical and practical knowledge.",
    department: "Business and Economics",
    universityId: "1", // AUK
    degreeType: "Bachelor",
    creditHours: 124,
    isActive: true,
  },
  {
    id: "3",
    name: "Computer Science",
    slug: "computer-science-gust",
    code: "CS",
    description:
      "The Computer Science program at GUST provides students with a strong foundation in computer science theory and practice.",
    department: "Computer Science",
    universityId: "2", // GUST
    degreeType: "Bachelor",
    creditHours: 128,
    isActive: true,
  },
  {
    id: "4",
    name: "Engineering",
    slug: "engineering",
    code: "ENG",
    description:
      "The Engineering program at Kuwait University offers specializations in various engineering disciplines.",
    department: "Engineering",
    universityId: "3", // KU
    degreeType: "Bachelor",
    creditHours: 136,
    isActive: true,
  },
]

const classesData: Class[] = [
  {
    id: "1",
    name: "Introduction to Programming",
    slug: "introduction-to-programming",
    code: "CSIS 110",
    description: "An introduction to programming concepts and problem-solving using a high-level programming language.",
    creditHours: 3,
    universityId: "1", // AUK
    departmentCode: "CSIS",
    isActive: true,
    semester: "Fall",
  },
  {
    id: "2",
    name: "Data Structures",
    slug: "data-structures",
    code: "CSIS 210",
    description:
      "Study of data structures including lists, stacks, queues, trees, and graphs. Implementation and algorithms for manipulating these structures in the context of typical applications.",
    creditHours: 3,
    universityId: "1", // AUK
    departmentCode: "CSIS",
    prerequisites: ["1"], // CSIS 110
    isActive: true,
    semester: "Spring",
  },
  {
    id: "3",
    name: "Principles of Marketing",
    slug: "principles-of-marketing",
    code: "MRKT 200",
    description:
      "An introduction to marketing concepts, principles, and processes. Topics include marketing research, consumer behavior, product development, pricing, channels, and promotion.",
    creditHours: 3,
    universityId: "1", // AUK
    departmentCode: "MRKT",
    isActive: true,
    semester: "Fall",
  },
  {
    id: "4",
    name: "Introduction to Programming",
    slug: "introduction-to-programming-gust",
    code: "CSC 101",
    description: "Introduction to computer programming and problem-solving using Python.",
    creditHours: 3,
    universityId: "2", // GUST
    departmentCode: "CSC",
    isActive: true,
    semester: "Fall",
  },
  {
    id: "5",
    name: "Calculus I",
    slug: "calculus-i",
    code: "MATH 201",
    description:
      "Limits, continuity, differentiation, applications of derivatives, integration, and applications of integration.",
    creditHours: 3,
    universityId: "1", // AUK
    departmentCode: "MATH",
    isActive: true,
    semester: "Fall",
  },
]

const majorClassesData: MajorClass[] = [
  // Computer Science at AUK
  {
    majorId: "1",
    classId: "1", // Intro to Programming
    isRequired: true,
    yearRecommended: 1,
    semesterRecommended: "Fall",
  },
  {
    majorId: "1",
    classId: "2", // Data Structures
    isRequired: true,
    yearRecommended: 2,
    semesterRecommended: "Spring",
  },
  {
    majorId: "1",
    classId: "5", // Calculus I
    isRequired: true,
    yearRecommended: 1,
    semesterRecommended: "Fall",
  },

  // Business Administration at AUK
  {
    majorId: "2",
    classId: "3", // Principles of Marketing
    isRequired: true,
    yearRecommended: 2,
    semesterRecommended: "Fall",
  },
  {
    majorId: "2",
    classId: "5", // Calculus I
    isRequired: true,
    yearRecommended: 1,
    semesterRecommended: "Fall",
  },

  // Computer Science at GUST
  {
    majorId: "3",
    classId: "4", // Intro to Programming at GUST
    isRequired: true,
    yearRecommended: 1,
    semesterRecommended: "Fall",
  },
]

export async function getClubs(): Promise<Club[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return clubsData
}

export async function getClubBySlug(slug: string): Promise<Club | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return clubsData.find((club) => club.slug === slug)
}

// New functions for educational ecosystem
export async function getCountries(): Promise<Country[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return countriesData
}

export async function getUniversities(countryCode?: string): Promise<University[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (countryCode) {
    return universitiesData.filter((uni) => uni.countryCode === countryCode)
  }
  return universitiesData
}

export async function getUniversityBySlug(slug: string): Promise<University | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return universitiesData.find((uni) => uni.slug === slug)
}

export async function getMajors(universityId?: string): Promise<Major[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  if (universityId) {
    return majorsData.filter((major) => major.universityId === universityId)
  }
  return majorsData
}

export async function getMajorBySlug(slug: string): Promise<Major | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return majorsData.find((major) => major.slug === slug)
}

export async function getClasses(universityId?: string, departmentCode?: string): Promise<Class[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  let filteredClasses = classesData

  if (universityId) {
    filteredClasses = filteredClasses.filter((cls) => cls.universityId === universityId)
  }

  if (departmentCode) {
    filteredClasses = filteredClasses.filter((cls) => cls.departmentCode === departmentCode)
  }

  return filteredClasses
}

export async function getClassBySlug(slug: string): Promise<Class | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return classesData.find((cls) => cls.slug === slug)
}

export async function getClassesForMajor(majorId: string): Promise<Class[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Get all class IDs for this major
  const majorClassIds = majorClassesData.filter((mc) => mc.majorId === majorId).map((mc) => mc.classId)

  // Return the classes with those IDs
  return classesData.filter((cls) => majorClassIds.includes(cls.id))
}

export async function getMajorsForClass(classId: string): Promise<Major[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Get all major IDs for this class
  const classMajorIds = majorClassesData.filter((mc) => mc.classId === classId).map((mc) => mc.majorId)

  // Return the majors with those IDs
  return majorsData.filter((major) => classMajorIds.includes(major.id))
}


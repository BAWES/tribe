// Existing types
export interface Club {
  id: string
  name: string
  slug: string
  description: string
  category: string
  location: string
  status: "Active" | "Inactive"
  email: string
  website?: string
  instagram?: string
  joiningRules: string[]
  meetingSchedule: string
  members: Member[]
  // New fields
  universityId?: string
  relatedMajorIds?: string[]
  relatedClassIds?: string[]
}

export interface Member {
  id: string
  name: string
  role: string
  bio?: string
  image?: string
}

// New types for educational ecosystem
export interface University {
  id: string
  name: string
  slug: string
  shortName: string // e.g., "AUK", "GUST", "KU"
  logo?: string
  location: string
  description: string
  website: string
  establishedYear: number
  isActive: boolean
  countryCode: string // For international support
}

export interface Major {
  id: string
  name: string
  slug: string
  code: string // e.g., "CS", "BUS", "ENG"
  description: string
  department: string
  universityId: string
  degreeType: "Bachelor" | "Master" | "PhD" | "Associate" | "Diploma"
  creditHours: number
  isActive: boolean
}

export interface Class {
  id: string
  name: string
  slug: string
  code: string // e.g., "CS101", "MATH202"
  description: string
  creditHours: number
  universityId: string
  departmentCode: string
  prerequisites?: string[] // Array of class IDs
  isActive: boolean
  semester: "Fall" | "Spring" | "Summer" | "Winter" | "Year-round"
}

export interface MajorClass {
  majorId: string
  classId: string
  isRequired: boolean
  yearRecommended: number // 1, 2, 3, 4
  semesterRecommended: "Fall" | "Spring" | "Summer" | "Winter"
}

export interface Country {
  code: string
  name: string
  flagEmoji: string
}


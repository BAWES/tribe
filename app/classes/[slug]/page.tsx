import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Building2, GraduationCap } from "lucide-react"
import { getClassBySlug, getUniversityBySlug, getMajorsForClass, getClasses } from "@/lib/data"

interface ClassPageProps {
  params: {
    slug: string
  }
}

export default async function ClassPage({ params }: ClassPageProps) {
  const classData = await getClassBySlug(params.slug)

  if (!classData) {
    notFound()
  }

  const university = await getUniversityBySlug(classData.universityId)
  const majors = await getMajorsForClass(classData.id)
  const allClasses = await getClasses(classData.universityId)

  // Get prerequisites if any
  const prerequisites = classData.prerequisites ? allClasses.filter((c) => classData.prerequisites?.includes(c.id)) : []

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/classes" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Classes
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="border-white/10 text-zinc-400">
                {classData.departmentCode}
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                {classData.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{classData.name}</h1>
            <div className="flex items-center gap-2 text-zinc-400">
              <Building2 className="h-4 w-4" />
              <Link href={`/universities/${university?.slug}`} className="hover:text-white">
                {university?.name}
              </Link>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">About this Class</h2>
            <p className="text-zinc-400">{classData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{classData.creditHours}</div>
              <div className="text-zinc-400">Credit Hours</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <GraduationCap className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{majors.length}</div>
              <div className="text-zinc-400">Related Majors</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-400"
                >
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                  <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                  <path d="M12 12v6" />
                  <path d="M8 18h8" />
                  <path d="M12 3v9" />
                </svg>
              </div>
              <div className="text-2xl font-bold">{prerequisites.length}</div>
              <div className="text-zinc-400">Prerequisites</div>
            </div>
          </div>

          {prerequisites.length > 0 && (
            <div className="bg-white/5 rounded-lg border border-white/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
              <div className="space-y-2">
                {prerequisites.map((prereq) => (
                  <Link
                    key={prereq.id}
                    href={`/classes/${prereq.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-400" />
                      <span className="font-medium">{prereq.name}</span>
                    </div>
                    <Badge variant="outline" className="border-white/10 text-zinc-400">
                      {prereq.code}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Class Information</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-zinc-400 mb-1">Class Code</div>
                <div className="font-mono">{classData.code}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Department</div>
                <div>{classData.departmentCode}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Semester Offered</div>
                <div>{classData.semester}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">University</div>
                <Link href={`/universities/${university?.slug}`} className="text-blue-400 hover:text-blue-300">
                  {university?.name}
                </Link>
              </div>
            </div>
          </div>

          {majors.length > 0 && (
            <div className="bg-white/5 rounded-lg border border-white/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Required for Majors</h2>
              <div className="space-y-2">
                {majors.map((major) => (
                  <Link
                    key={major.id}
                    href={`/majors/${major.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-400" />
                      <span className="font-medium">{major.name}</span>
                    </div>
                    <Badge variant="outline" className="border-white/10 text-zinc-400">
                      {major.code}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


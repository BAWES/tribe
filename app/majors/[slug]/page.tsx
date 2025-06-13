import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, BookOpen, Building2, Users } from "lucide-react"
import { getMajorBySlug, getUniversityBySlug, getClassesForMajor, getClubs } from "@/lib/data"

interface MajorPageProps {
  params: {
    slug: string
  }
}

export default async function MajorPage({ params }: MajorPageProps) {
  const major = await getMajorBySlug(params.slug)

  if (!major) {
    notFound()
  }

  const university = await getUniversityBySlug(major.universityId)
  const classes = await getClassesForMajor(major.id)
  const clubs = await getClubs()

  // Filter clubs that might be related to this major
  // In a real app, this would use the relatedMajorIds field
  const relatedClubs = clubs.filter(
    (club) =>
      club.location === university?.shortName && (club.category === major.department || club.category === "Academic"),
  )

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/majors" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Majors
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="border-white/10 text-zinc-400">
                {major.department}
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                {major.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{major.name}</h1>
            <div className="flex items-center gap-2 text-zinc-400">
              <Building2 className="h-4 w-4" />
              <Link href={`/universities/${university?.slug}`} className="hover:text-white">
                {university?.name}
              </Link>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">About this Major</h2>
            <p className="text-zinc-400">{major.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{major.creditHours}</div>
              <div className="text-zinc-400">Credit Hours</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <GraduationCap className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{major.degreeType}</div>
              <div className="text-zinc-400">Degree Type</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{relatedClubs.length}</div>
              <div className="text-zinc-400">Related Clubs</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Major Information</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-zinc-400 mb-1">Department</div>
                <div>{major.department}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Major Code</div>
                <div className="font-mono">{major.code}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">University</div>
                <Link href={`/universities/${university?.slug}`} className="text-blue-400 hover:text-blue-300">
                  {university?.name}
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-2">Find Your Club</h2>
            <p className="text-zinc-400 mb-4">
              Discover clubs related to {major.name} at {university?.name}
            </p>
            <Link href={`/clubs?major=${major.id}`}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
                Browse Related Clubs
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Tabs defaultValue="classes" className="mt-8">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="classes" className="data-[state=active]:bg-white/10">
            <BookOpen className="h-4 w-4 mr-2" />
            Required Classes
          </TabsTrigger>
          <TabsTrigger value="clubs" className="data-[state=active]:bg-white/10">
            <Users className="h-4 w-4 mr-2" />
            Related Clubs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="classes" className="mt-6">
          <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
              <div className="col-span-3">Code</div>
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Credits</div>
              <div className="col-span-2">Year</div>
            </div>

            <div className="divide-y divide-white/10">
              {classes.map((cls) => (
                <Link
                  key={cls.id}
                  href={`/classes/${cls.slug}`}
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors"
                >
                  <div className="col-span-3 font-mono text-blue-400">{cls.code}</div>
                  <div className="col-span-5 font-medium">{cls.name}</div>
                  <div className="col-span-2">{cls.creditHours}</div>
                  <div className="col-span-2">
                    <Badge variant="outline" className="border-white/10 text-zinc-400">
                      Year {/* This would come from the MajorClass relationship */}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="clubs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedClubs.map((club) => (
              <Link key={club.id} href={`/clubs/${club.slug}`} className="group">
                <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all overflow-hidden h-full">
                  <div className="h-40 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-2">{club.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{club.name}</h3>
                    <p className="text-zinc-400 mb-4 line-clamp-3">{club.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <Badge variant="outline" className="border-white/10 text-zinc-400">
                        {club.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-blue-400 group-hover:text-blue-300 p-0">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


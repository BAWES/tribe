import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, BookOpen, Users, ExternalLink } from "lucide-react"
import { getUniversityBySlug, getMajors, getClasses, getClubs, getCountries } from "@/lib/data"

interface UniversityPageProps {
  params: {
    slug: string
  }
}

export default async function UniversityPage({ params }: UniversityPageProps) {
  const university = await getUniversityBySlug(params.slug)

  if (!university) {
    notFound()
  }

  const majors = await getMajors(university.id)
  const classes = await getClasses(university.id)
  const clubs = await getClubs()
  const countries = await getCountries()

  // Filter clubs by university
  const universityClubs = clubs.filter((club) => club.location === university.shortName)

  // Get country info
  const country = countries.find((c) => c.code === university.countryCode)

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/universities" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Universities
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
              {university.logo ? (
                <Image
                  src={university.logo || "/placeholder.svg"}
                  alt={university.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <div className="text-3xl font-bold text-white/70">{university.shortName}</div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{country?.flagEmoji}</span>
                <Badge variant="outline" className="border-white/10 text-zinc-400">
                  {country?.name}
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                  {university.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{university.name}</h1>
              <p className="text-zinc-400">{university.location}</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-zinc-400">{university.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <GraduationCap className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{majors.length}</div>
              <div className="text-zinc-400">Majors</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{classes.length}</div>
              <div className="text-zinc-400">Classes</div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{universityClubs.length}</div>
              <div className="text-zinc-400">Clubs</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-zinc-400 mb-1">Established</div>
                <div>{university.establishedYear}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Website</div>
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  {university.website.replace(/^https?:\/\//, "")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Location</div>
                <div>{university.location}</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-2">Create a Club</h2>
            <p className="text-zinc-400 mb-4">
              Start your own club at {university.shortName} and connect with like-minded students
            </p>
            <Link href="/clubs/create">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
                Create Club
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Tabs defaultValue="majors" className="mt-8">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="majors" className="data-[state=active]:bg-white/10">
            <GraduationCap className="h-4 w-4 mr-2" />
            Majors
          </TabsTrigger>
          <TabsTrigger value="classes" className="data-[state=active]:bg-white/10">
            <BookOpen className="h-4 w-4 mr-2" />
            Classes
          </TabsTrigger>
          <TabsTrigger value="clubs" className="data-[state=active]:bg-white/10">
            <Users className="h-4 w-4 mr-2" />
            Clubs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="majors" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((major) => (
              <Link key={major.id} href={`/majors/${major.slug}`} className="group">
                <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all h-full">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2 border-white/10 text-zinc-400">
                      {major.department}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{major.name}</h3>
                    <p className="text-zinc-400 mb-4 line-clamp-3">{major.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-1 text-zinc-400">
                        <BookOpen className="h-4 w-4" />
                        <span>{major.creditHours} Credit Hours</span>
                      </div>
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

        <TabsContent value="classes" className="mt-6">
          <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
              <div className="col-span-3">Code</div>
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Credits</div>
              <div className="col-span-2">Semester</div>
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
                      {cls.semester}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="clubs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universityClubs.map((club) => (
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


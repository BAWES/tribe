import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, GraduationCap, Building2, BookOpen } from "lucide-react"
import { getMajors, getUniversities } from "@/lib/data"

export default async function MajorsPage() {
  const majors = await getMajors()
  const universities = await getUniversities()

  // Create a map of university IDs to university names for easy lookup
  const universityMap = universities.reduce(
    (acc, university) => {
      acc[university.id] = university
      return acc
    },
    {} as Record<string, (typeof universities)[0]>,
  )

  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">
          <GraduationCap className="h-3.5 w-3.5 mr-2" />
          Academic Programs
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Majors</h1>
        <p className="text-zinc-400 text-lg">
          Discover academic programs across universities and find related clubs that match your interests
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search majors..." className="pl-10 bg-white/5 border-white/10" />
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majors.map((major) => (
          <Link key={major.id} href={`/majors/${major.slug}`} className="group">
            <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-white/10 text-zinc-400">
                    {major.department}
                  </Badge>
                  <Badge
                    className={
                      major.isActive
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0"
                        : "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0"
                    }
                  >
                    {major.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{major.name}</h3>
                <p className="text-zinc-400 mb-4 line-clamp-3">{major.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Building2 className="h-4 w-4" />
                    <span>{universityMap[major.universityId]?.shortName}</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <BookOpen className="h-4 w-4" />
                    <span>{major.creditHours} Credits</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


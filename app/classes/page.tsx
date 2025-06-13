import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Filter } from "lucide-react"
import { getClasses, getUniversities } from "@/lib/data"

export default async function ClassesPage() {
  const classes = await getClasses()
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
          <BookOpen className="h-3.5 w-3.5 mr-2" />
          Course Catalog
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Classes</h1>
        <p className="text-zinc-400 text-lg">
          Explore classes offered at different universities and discover related clubs
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search classes..." className="pl-10 bg-white/5 border-white/10" />
        </div>
        <Button variant="outline" className="border-white/10 text-white">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
          Search
        </Button>
      </div>

      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
          <div className="col-span-3">Code</div>
          <div className="col-span-4">Name</div>
          <div className="col-span-2">University</div>
          <div className="col-span-1">Credits</div>
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
              <div className="col-span-4 font-medium">{cls.name}</div>
              <div className="col-span-2">
                <Badge variant="outline" className="border-white/10 text-zinc-400">
                  {universityMap[cls.universityId]?.shortName}
                </Badge>
              </div>
              <div className="col-span-1">{cls.creditHours}</div>
              <div className="col-span-2">
                <Badge className="bg-white/10 text-white border-0">{cls.semester}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


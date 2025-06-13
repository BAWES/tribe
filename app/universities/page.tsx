import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, GraduationCap, BookOpen } from "lucide-react"
import { getUniversities, getCountries } from "@/lib/data"

export default async function UniversitiesPage() {
  const universities = await getUniversities()
  const countries = await getCountries()

  // Create a map of country codes to country names for easy lookup
  const countryMap = countries.reduce(
    (acc, country) => {
      acc[country.code] = country
      return acc
    },
    {} as Record<string, (typeof countries)[0]>,
  )

  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">
          <Globe className="h-3.5 w-3.5 mr-2" />
          Universities
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Universities</h1>
        <p className="text-zinc-400 text-lg">
          Browse universities, explore their majors and classes, and discover clubs at each institution
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search universities..." className="pl-10 bg-white/5 border-white/10" />
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((university) => (
          <Link key={university.id} href={`/universities/${university.slug}`} className="group">
            <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all overflow-hidden h-full">
              <div className="h-40 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {university.logo ? (
                    <Image
                      src={university.logo || "/placeholder.svg"}
                      alt={university.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-white/70">{university.shortName}</div>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{countryMap[university.countryCode]?.flagEmoji}</span>
                  <Badge variant="outline" className="border-white/10 text-zinc-400">
                    {countryMap[university.countryCode]?.name}
                  </Badge>
                  <Badge className="ml-auto bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                    {university.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                <p className="text-zinc-400 mb-4 line-clamp-2">{university.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-zinc-400">
                      <GraduationCap className="h-4 w-4" />
                      <span>12 Majors</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <BookOpen className="h-4 w-4" />
                      <span>86 Classes</span>
                    </div>
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
    </div>
  )
}


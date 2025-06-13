import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Pencil, Trash2, Globe } from "lucide-react"
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Universities</h1>
          <p className="text-zinc-400">Manage all universities in the system</p>
        </div>
        <Link href="/admin/universities/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add University
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search universities..." className="pl-10 bg-white/5 border-white/10" />
        </div>
        <Button variant="outline" className="border-white/10 text-white">
          <Globe className="h-4 w-4 mr-2" />
          Filter by Country
        </Button>
      </div>

      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
          <div className="col-span-1">Logo</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-2">Short Name</div>
          <div className="col-span-2">Country</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="divide-y divide-white/10">
          {universities.map((university) => (
            <div key={university.id} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-1">
                <div className="h-10 w-10 bg-white/10 rounded-md flex items-center justify-center overflow-hidden">
                  {university.logo ? (
                    <Image
                      src={university.logo || "/placeholder.svg"}
                      alt={university.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold">{university.shortName.charAt(0)}</span>
                  )}
                </div>
              </div>
              <div className="col-span-3 font-medium">{university.name}</div>
              <div className="col-span-2">{university.shortName}</div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{countryMap[university.countryCode]?.flagEmoji}</span>
                  <span>{countryMap[university.countryCode]?.name}</span>
                </div>
              </div>
              <div className="col-span-2">
                <Badge
                  className={
                    university.isActive
                      ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0"
                      : "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0"
                  }
                >
                  {university.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
              <div className="col-span-2 flex justify-end gap-2">
                <Link href={`/admin/universities/${university.id}/edit`}>
                  <Button size="sm" variant="outline" className="h-8 border-white/10 text-white hover:bg-white/10">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                </Link>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 border-white/10 text-white hover:bg-white/10 hover:text-red-400 hover:border-red-400/30"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Pencil, Trash2 } from "lucide-react"
import { getCountries } from "@/lib/data"

export default async function CountriesPage() {
  const countries = await getCountries()

  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Countries</h1>
          <p className="text-zinc-400">Manage all countries in the system</p>
        </div>
        <Link href="/admin/countries/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Country
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search countries..." className="pl-10 bg-white/5 border-white/10" />
        </div>
      </div>

      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
          <div className="col-span-1">Flag</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-2">Code</div>
          <div className="col-span-2">Region</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="divide-y divide-white/10">
          {countries.map((country) => (
            <div key={country.code} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-1">
                <span className="text-2xl">{country.flagEmoji}</span>
              </div>
              <div className="col-span-3 font-medium">{country.name}</div>
              <div className="col-span-2 font-mono text-sm">{country.code}</div>
              <div className="col-span-2">{country.region || "N/A"}</div>
              <div className="col-span-2">
                <Badge
                  className={
                    country.isActive !== false
                      ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0"
                      : "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0"
                  }
                >
                  {country.isActive !== false ? "Active" : "Inactive"}
                </Badge>
              </div>
              <div className="col-span-2 flex justify-end gap-2">
                <Link href={`/admin/countries/${country.code}/edit`}>
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


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Pencil, Trash2, Filter } from "lucide-react"
import { getClubs } from "@/lib/data"

export default async function ClubsPage() {
  const clubs = await getClubs()

  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Clubs</h1>
          <p className="text-zinc-400">Manage all clubs in the system</p>
        </div>
        <Link href="/admin/clubs/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Club
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search clubs..." className="pl-10 bg-white/5 border-white/10" />
        </div>
        <Button variant="outline" className="border-white/10 text-white">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 font-medium text-sm">
          <div className="col-span-1">Logo</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Location</div>
          <div className="col-span-2">Members</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="divide-y divide-white/10">
          {clubs.map((club) => (
            <div key={club.id} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-1">
                <div className="h-10 w-10 bg-white/10 rounded-md flex items-center justify-center overflow-hidden">
                  {club.logo ? (
                    <Image
                      src={club.logo || "/placeholder.svg"}
                      alt={club.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold">{club.name.charAt(0)}</span>
                  )}
                </div>
              </div>
              <div className="col-span-3 font-medium">{club.name}</div>
              <div className="col-span-2">
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-0">{club.category}</Badge>
              </div>
              <div className="col-span-2">{club.location}</div>
              <div className="col-span-2">{club.members ? club.members.length : 0} members</div>
              <div className="col-span-2 flex justify-end gap-2">
                <Link href={`/admin/clubs/${club.id}/edit`}>
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


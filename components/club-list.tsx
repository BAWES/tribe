import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Club } from "@/lib/types"

interface ClubListProps {
  clubs: Club[]
}

export default function ClubList({ clubs }: ClubListProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 bg-muted font-medium text-sm">
        <div className="col-span-4 md:col-span-3">Club Name</div>
        <div className="col-span-3 md:col-span-2">Category</div>
        <div className="col-span-2 hidden md:block">Location</div>
        <div className="col-span-2 hidden md:block">Status</div>
        <div className="col-span-5 md:col-span-3">Email</div>
      </div>

      <div className="divide-y">
        {clubs.map((club) => (
          <Link
            key={club.id}
            href={`/clubs/${club.slug}`}
            className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/50 transition-colors"
          >
            <div className="col-span-4 md:col-span-3 font-medium">{club.name}</div>
            <div className="col-span-3 md:col-span-2">
              <Badge variant="outline" className="bg-muted/80">
                {club.category}
              </Badge>
            </div>
            <div className="col-span-2 hidden md:block text-sm">{club.location}</div>
            <div className="col-span-2 hidden md:block">
              <Badge variant="success" className="bg-green-500 text-white">
                Active
              </Badge>
            </div>
            <div className="col-span-5 md:col-span-3 text-sm truncate">{club.email}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}


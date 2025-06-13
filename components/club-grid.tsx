import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Club } from "@/lib/types"

interface ClubGridProps {
  clubs: Club[]
}

export default function ClubGrid({ clubs }: ClubGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club) => (
        <Link
          key={club.id}
          href={`/clubs/${club.slug}`}
          className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
        >
          <div className="relative h-48">
            <Image
              src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(club.name)}`}
              alt={club.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-2">{club.category}</Badge>
              <h3 className="text-xl font-bold text-white">{club.name}</h3>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <p className="text-zinc-400 line-clamp-3 flex-1">{club.description}</p>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
              <Badge variant="outline" className="border-white/10 text-zinc-400">
                {club.location}
              </Badge>
              <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1 text-sm font-medium">
                View Club
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


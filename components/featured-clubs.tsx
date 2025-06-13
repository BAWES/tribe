import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Club } from "@/lib/types"

interface FeaturedClubsProps {
  clubs: Club[]
}

export default function FeaturedClubs({ clubs }: FeaturedClubsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club) => (
        <Card key={club.id} className="overflow-hidden group">
          <div className="relative h-48 bg-muted">
            <Image
              src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(club.name)}`}
              alt={club.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="outline" className="bg-black/50 text-white border-white/20 mb-2">
                {club.category}
              </Badge>
              <h3 className="text-xl font-bold text-white">{club.name}</h3>
            </div>
          </div>
          <CardContent className="p-4">
            <p className="text-muted-foreground line-clamp-3 h-[4.5rem]">{club.description}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <Badge variant="outline">{club.location}</Badge>
            <Link href={`/clubs/${club.slug}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                View Club
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


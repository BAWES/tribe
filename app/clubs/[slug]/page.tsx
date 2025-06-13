import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Globe, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ClubStructure from "@/components/club-structure"
import { getClubBySlug } from "@/lib/data"

export default async function ClubPage({ params }: { params: { slug: string } }) {
  const club = await getClubBySlug(params.slug)

  if (!club) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to directory</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold">{club.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">{club.category}</Badge>
                <Badge variant="outline">{club.location}</Badge>
                <Badge variant="success" className="bg-green-500 text-white">
                  Active
                </Badge>
              </div>
            </div>
            <Button>Join Club</Button>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2>About</h2>
            <p>{club.description}</p>

            <h2>Joining Rules</h2>
            <ul>
              {club.joiningRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Meeting Schedule</h2>
            <p>{club.meetingSchedule}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg border p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${club.email}`} className="text-primary">
                  {club.email}
                </a>
              </div>
              {club.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-primary">
                    Website
                  </a>
                </div>
              )}
              {club.instagram && (
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://instagram.com/${club.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    @{club.instagram}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="bg-card rounded-lg border p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Club Structure</h2>
            <ClubStructure members={club.members} />
          </div>
        </div>
      </div>
    </div>
  )
}


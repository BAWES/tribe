import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { getClubs, getMajors, getClasses } from "@/lib/data"

export default async function ClubRelationsPage() {
  const clubs = await getClubs()
  const majors = await getMajors()
  const classes = await getClasses()

  // For demo purposes, we'll just use the first club
  const selectedClub = clubs[0]

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/admin" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Club Relations</h1>
          <p className="text-zinc-400">Link clubs to related majors and classes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border-white/10 sticky top-24">
            <CardHeader>
              <CardTitle>Select Club</CardTitle>
              <CardDescription className="text-zinc-400">Choose a club to manage its relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <Select defaultValue={selectedClub.id}>
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select a club" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10">
                  {clubs.map((club) => (
                    <SelectItem key={club.id} value={club.id}>
                      {club.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Club Details</h3>
                  <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                    <h4 className="font-medium mb-1">{selectedClub.name}</h4>
                    <p className="text-sm text-zinc-400 mb-2">{selectedClub.category}</p>
                    <Badge variant="outline" className="border-white/10 text-zinc-400">
                      {selectedClub.location}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Related Majors</CardTitle>
                <CardDescription className="text-zinc-400">Link this club to relevant academic majors</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Major
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {majors.slice(0, 2).map((major) => (
                  <div
                    key={major.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div>
                      <div className="font-medium">{major.name}</div>
                      <div className="text-sm text-zinc-400">{major.department}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-white/10 text-zinc-400">
                        {major.degreeType}
                      </Badge>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-950/30"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Related Classes</CardTitle>
                <CardDescription className="text-zinc-400">Link this club to relevant classes</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Class
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {classes.slice(0, 3).map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div>
                      <div className="font-medium">{cls.name}</div>
                      <div className="text-sm text-zinc-400 font-mono">{cls.code}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-white/10 text-zinc-400">
                        {cls.creditHours} Credits
                      </Badge>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-950/30"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


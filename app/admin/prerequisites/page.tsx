import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { getClasses } from "@/lib/data"

export default async function PrerequisitesPage() {
  const classes = await getClasses()

  // For demo purposes, we'll just use one class
  const selectedClass = classes[1] // Data Structures

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/admin" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Manage Prerequisites</h1>
          <p className="text-zinc-400">Set up class prerequisites and dependencies</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border-white/10 sticky top-24">
            <CardHeader>
              <CardTitle>Select Class</CardTitle>
              <CardDescription className="text-zinc-400">Choose a class to manage its prerequisites</CardDescription>
            </CardHeader>
            <CardContent>
              <Select defaultValue={selectedClass.id}>
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10">
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.code}: {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Class Details</h3>
                  <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                    <h4 className="font-medium mb-1">{selectedClass.name}</h4>
                    <p className="text-sm text-zinc-400 font-mono mb-2">{selectedClass.code}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-white/10 text-zinc-400">
                        {selectedClass.creditHours} Credits
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-0">
                        {selectedClass.semester}
                      </Badge>
                    </div>
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
                <CardTitle>Prerequisites</CardTitle>
                <CardDescription className="text-zinc-400">
                  Classes that must be completed before taking {selectedClass.name}
                </CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Prerequisite
              </Button>
            </CardHeader>
            <CardContent>
              {selectedClass.prerequisites && selectedClass.prerequisites.length > 0 ? (
                <div className="space-y-2">
                  {selectedClass.prerequisites.map((prereqId) => {
                    const prereq = classes.find((c) => c.id === prereqId)
                    if (!prereq) return null

                    return (
                      <div
                        key={prereq.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div>
                          <div className="font-medium">{prereq.name}</div>
                          <div className="text-sm text-zinc-400 font-mono">{prereq.code}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-white/10 text-zinc-400">
                            {prereq.creditHours} Credits
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
                    )
                  })}
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg border border-white/10 p-6 text-center">
                  <p className="text-zinc-400">No prerequisites have been set for this class.</p>
                  <Button className="mt-4" size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add First Prerequisite
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Dependent Classes</CardTitle>
                <CardDescription className="text-zinc-400">
                  Classes that have {selectedClass.name} as a prerequisite
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {classes.slice(0, 1).map((cls) => (
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
                      <Link href={`/admin/prerequisites?class=${cls.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-white/10 text-white hover:bg-white/10"
                        >
                          Manage
                        </Button>
                      </Link>
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


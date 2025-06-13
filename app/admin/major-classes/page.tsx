import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { getMajors, getClasses } from "@/lib/data"

export default async function MajorClassesPage() {
  const majors = await getMajors()
  const classes = await getClasses()

  // For demo purposes, we'll just use the first major
  const selectedMajor = majors[0]

  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/admin" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Major-Class Relationships</h1>
          <p className="text-zinc-400">Manage which classes belong to which majors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border-white/10 sticky top-24">
            <CardHeader>
              <CardTitle>Select Major</CardTitle>
              <CardDescription className="text-zinc-400">Choose a major to manage its classes</CardDescription>
            </CardHeader>
            <CardContent>
              <Select defaultValue={selectedMajor.id}>
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select a major" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10">
                  {majors.map((major) => (
                    <SelectItem key={major.id} value={major.id}>
                      {major.name} ({major.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Major Details</h3>
                  <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                    <h4 className="font-medium mb-1">{selectedMajor.name}</h4>
                    <p className="text-sm text-zinc-400 mb-2">{selectedMajor.department}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-white/10 text-zinc-400">
                        {selectedMajor.creditHours} Credits
                      </Badge>
                      <Badge
                        className={
                          selectedMajor.isActive
                            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0"
                            : "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0"
                        }
                      >
                        {selectedMajor.isActive ? "Active" : "Inactive"}
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
                <CardTitle>Required Classes</CardTitle>
                <CardDescription className="text-zinc-400">Classes that are required for this major</CardDescription>
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
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">Required</span>
                        <Switch defaultChecked />
                      </div>
                      <Select defaultValue="1">
                        <SelectTrigger className="w-24 h-8 text-xs bg-white/5 border-white/10">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-white/10">
                          <SelectItem value="1">Year 1</SelectItem>
                          <SelectItem value="2">Year 2</SelectItem>
                          <SelectItem value="3">Year 3</SelectItem>
                          <SelectItem value="4">Year 4</SelectItem>
                        </SelectContent>
                      </Select>
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
                <CardTitle>Elective Classes</CardTitle>
                <CardDescription className="text-zinc-400">Optional classes for this major</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Elective
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {classes.slice(3, 5).map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div>
                      <div className="font-medium">{cls.name}</div>
                      <div className="text-sm text-zinc-400 font-mono">{cls.code}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">Required</span>
                        <Switch />
                      </div>
                      <Select defaultValue="3">
                        <SelectTrigger className="w-24 h-8 text-xs bg-white/5 border-white/10">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-white/10">
                          <SelectItem value="1">Year 1</SelectItem>
                          <SelectItem value="2">Year 2</SelectItem>
                          <SelectItem value="3">Year 3</SelectItem>
                          <SelectItem value="4">Year 4</SelectItem>
                        </SelectContent>
                      </Select>
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


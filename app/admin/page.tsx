import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building2, GraduationCap, BookOpen, Users, Globe } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
          <p className="text-zinc-400">Manage universities, majors, classes, and clubs</p>
        </div>
      </div>

      <Tabs defaultValue="universities" className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="universities" className="data-[state=active]:bg-white/10">
            <Building2 className="h-4 w-4 mr-2" />
            Universities
          </TabsTrigger>
          <TabsTrigger value="majors" className="data-[state=active]:bg-white/10">
            <GraduationCap className="h-4 w-4 mr-2" />
            Majors
          </TabsTrigger>
          <TabsTrigger value="classes" className="data-[state=active]:bg-white/10">
            <BookOpen className="h-4 w-4 mr-2" />
            Classes
          </TabsTrigger>
          <TabsTrigger value="clubs" className="data-[state=active]:bg-white/10">
            <Users className="h-4 w-4 mr-2" />
            Clubs
          </TabsTrigger>
          <TabsTrigger value="countries" className="data-[state=active]:bg-white/10">
            <Globe className="h-4 w-4 mr-2" />
            Countries
          </TabsTrigger>
        </TabsList>

        <TabsContent value="universities" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Universities</h2>
            <Link href="/admin/universities/new">
              <Button>Add University</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/universities" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Universities</CardTitle>
                  <CardDescription className="text-zinc-400">View, edit, and delete universities</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Building2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/universities/import" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Import Universities</CardTitle>
                  <CardDescription className="text-zinc-400">Bulk import universities from CSV</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="majors" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Majors</h2>
            <Link href="/admin/majors/new">
              <Button>Add Major</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/majors" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Majors</CardTitle>
                  <CardDescription className="text-zinc-400">View, edit, and delete majors</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/majors/import" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Import Majors</CardTitle>
                  <CardDescription className="text-zinc-400">Bulk import majors from CSV</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/major-classes" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Major-Class Relationships</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Manage which classes belong to which majors
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M17 6H3" />
                      <path d="M21 12H8" />
                      <path d="M21 18H8" />
                      <path d="M3 12v6" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="classes" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Classes</h2>
            <Link href="/admin/classes/new">
              <Button>Add Class</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/classes" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Classes</CardTitle>
                  <CardDescription className="text-zinc-400">View, edit, and delete classes</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/classes/import" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Import Classes</CardTitle>
                  <CardDescription className="text-zinc-400">Bulk import classes from CSV</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/prerequisites" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Prerequisites</CardTitle>
                  <CardDescription className="text-zinc-400">Set up class prerequisites</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                      <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                      <path d="M12 12v6" />
                      <path d="M8 18h8" />
                      <path d="M12 3v9" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="clubs" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Clubs</h2>
            <Link href="/admin/clubs/new">
              <Button>Add Club</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/clubs" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Clubs</CardTitle>
                  <CardDescription className="text-zinc-400">View, edit, and delete clubs</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/club-relations" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Club Relations</CardTitle>
                  <CardDescription className="text-zinc-400">Link clubs to majors and classes</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M17 6H3" />
                      <path d="M21 12H8" />
                      <path d="M21 18H8" />
                      <path d="M3 12v6" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/club-approval" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Club Approval</CardTitle>
                  <CardDescription className="text-zinc-400">Review and approve new club submissions</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="countries" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Countries</h2>
            <Link href="/admin/countries/new">
              <Button>Add Country</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/countries" className="group">
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all">
                <CardHeader>
                  <CardTitle>Manage Countries</CardTitle>
                  <CardDescription className="text-zinc-400">View, edit, and delete countries</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


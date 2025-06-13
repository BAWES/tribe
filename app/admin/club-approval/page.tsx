import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, X, Eye } from "lucide-react"

// Mock data for pending club approvals
const pendingClubs = [
  {
    id: "pending-1",
    name: "Blockchain Club",
    description:
      "A club dedicated to exploring blockchain technology, cryptocurrencies, and decentralized applications. We host workshops, hackathons, and guest speakers from the industry.",
    category: "Computer & Science",
    location: "AUK",
    submittedBy: "Ahmed Al-Khalid",
    submittedDate: "2025-03-20",
    members: 12,
  },
  {
    id: "pending-2",
    name: "Photography Society",
    description:
      "A community for photography enthusiasts to share their work, learn new techniques, and explore Kuwait through photo walks and exhibitions.",
    category: "ART",
    location: "GUST",
    submittedBy: "Maryam Al-Sabah",
    submittedDate: "2025-03-18",
    members: 8,
  },
]

export default function ClubApprovalPage() {
  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/admin" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Club Approval</h1>
          <p className="text-zinc-400">Review and approve new club submissions</p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="pending" className="data-[state=active]:bg-white/10">
            Pending Approval ({pendingClubs.length})
          </TabsTrigger>
          <TabsTrigger value="approved" className="data-[state=active]:bg-white/10">
            Recently Approved
          </TabsTrigger>
          <TabsTrigger value="rejected" className="data-[state=active]:bg-white/10">
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          {pendingClubs.map((club) => (
            <Card key={club.id} className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Submitted by {club.submittedBy} on {new Date(club.submittedDate).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-white/10 text-zinc-400">
                      {club.location}
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-0">
                      {club.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Description</h3>
                  <p>{club.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center text-center">
                    <div className="text-2xl font-bold">{club.members}</div>
                    <div className="text-zinc-400">Initial Members</div>
                  </div>

                  <div className="md:col-span-2 bg-white/5 rounded-lg border border-white/10 p-4">
                    <h3 className="text-sm font-medium text-zinc-400 mb-2">Submission Notes</h3>
                    <p className="text-sm">
                      The club has submitted all required documentation including a constitution, member list, and
                      faculty advisor confirmation.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 border-t border-white/10 pt-6">
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 sm:w-auto w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  View Full Details
                </Button>
                <div className="flex gap-2 sm:w-auto w-full">
                  <Button
                    variant="outline"
                    className="border-red-500/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 flex-1 sm:flex-none"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 flex-1 sm:flex-none">
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="approved">
          <div className="bg-white/5 rounded-lg border border-white/10 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Recently Approved Clubs</h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              When you approve clubs, they will appear here for easy reference.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="rejected">
          <div className="bg-white/5 rounded-lg border border-white/10 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 text-red-400 mb-4">
              <X className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Recently Rejected Clubs</h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              When you reject club applications, they will appear here for reference.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


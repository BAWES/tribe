import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"

export default function ImportUniversitiesPage() {
  return (
    <div className="container px-4 md:px-6 py-10">
      <Link href="/admin" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Admin Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Import Universities</h1>
          <p className="text-zinc-400">Bulk import universities from a CSV file</p>
        </div>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle>Upload CSV File</CardTitle>
          <CardDescription className="text-zinc-400">
            The CSV file should include columns for name, short name, location, country code, and other university
            details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-white/10 rounded-lg p-10 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Upload className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-1">Drag and drop your CSV file here, or click to browse</p>
                <p className="text-xs text-zinc-500">Supports CSV files up to 10MB</p>
              </div>
              <Button className="mt-2">Select File</Button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
              Download Template
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
              disabled
            >
              Import Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


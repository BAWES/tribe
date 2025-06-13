import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Club Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-6">The club you're looking for doesn't exist or has been removed.</p>
      <Link href="/">
        <Button>Return to Directory</Button>
      </Link>
    </div>
  )
}


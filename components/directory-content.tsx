"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Search, Filter, Plus, X, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ClubList from "@/components/club-list"
import ClubGrid from "@/components/club-grid"
import { getClubs } from "@/lib/data"
import type { Club } from "@/lib/types"

// Categories for filtering
const categories = ["Cultural", "Finance", "Computer & Science", "Social & Edu", "ART", "Hobby"]

// Locations for filtering
const locations = ["AUK", "GUST", "KU"]

export default function DirectoryContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // State for clubs data
  const [clubs, setClubs] = useState<Club[]>([])
  const [filteredClubs, setFilteredClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Fetch clubs data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getClubs()
        setClubs(data)
        setFilteredClubs(data)
      } catch (error) {
        console.error("Error fetching clubs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Load initial filters from URL
  useEffect(() => {
    const query = searchParams.get("q") || ""
    const categoryParams = searchParams.getAll("category")
    const locationParams = searchParams.getAll("location")
    const sort = searchParams.get("sort") || "name"
    const view = (searchParams.get("view") as "grid" | "list") || "grid"

    setSearchQuery(query)
    setSelectedCategories(categoryParams)
    setSelectedLocations(locationParams)
    setSortBy(sort)
    setViewMode(view)
  }, [searchParams])

  // Apply filters and sorting
  useEffect(() => {
    if (clubs.length === 0) return

    let result = [...clubs]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (club) =>
          club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          club.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((club) => selectedCategories.includes(club.category))
    }

    // Apply location filter
    if (selectedLocations.length > 0) {
      result = result.filter((club) => selectedLocations.includes(club.location))
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "newest":
          return Number.parseInt(b.id) - Number.parseInt(a.id)
        case "oldest":
          return Number.parseInt(a.id) - Number.parseInt(b.id)
        default:
          return 0
      }
    })

    setFilteredClubs(result)
  }, [clubs, searchQuery, selectedCategories, selectedLocations, sortBy])

  // Update URL with current filters
  const updateURL = () => {
    const params = new URLSearchParams()

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    selectedCategories.forEach((category) => params.append("category", category))
    selectedLocations.forEach((location) => params.append("location", location))

    params.set("sort", sortBy)
    params.set("view", viewMode)

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateURL()
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) => (prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]))
  }

  // Apply filters button handler
  const applyFilters = () => {
    updateURL()
  }

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedLocations([])
    setSortBy("name")
    setViewMode("grid")

    router.push(pathname)
  }

  // Remove single filter
  const removeFilter = (type: "search" | "category" | "location", value?: string) => {
    if (type === "search") {
      setSearchQuery("")
    } else if (type === "category" && value) {
      setSelectedCategories((prev) => prev.filter((c) => c !== value))
    } else if (type === "location" && value) {
      setSelectedLocations((prev) => prev.filter((l) => l !== value))
    }
  }

  // Count active filters
  const activeFilterCount = selectedCategories.length + selectedLocations.length + (searchQuery ? 1 : 0)

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Student Clubs Directory</h1>
        <Link href="/clubs/create">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
            <Plus className="mr-2 h-4 w-4" />
            Create New Club
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search clubs..."
            className="pl-10 bg-white/5 border-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3">
            Search
          </Button>
        </form>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-white/10 text-white hover:bg-white/10"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                {activeFilterCount > 0 && <Badge className="ml-1 bg-blue-600 text-white">{activeFilterCount}</Badge>}
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-zinc-950 border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Filter Clubs</SheetTitle>
                <SheetDescription className="text-zinc-400">
                  Narrow down clubs by category, location, and more
                </SheetDescription>
              </SheetHeader>

              <div className="py-6 space-y-6">
                <Accordion type="single" collapsible defaultValue="categories" className="w-full">
                  <AccordionItem value="categories" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-white hover:no-underline">
                      Categories
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                              className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="locations" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-white hover:no-underline">
                      Locations
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onCheckedChange={() => toggleLocation(location)}
                              className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <label
                              htmlFor={`location-${location}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {location}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <SheetFooter className="flex-row justify-between sm:justify-between gap-2">
                <Button
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/10"
                  onClick={resetFilters}
                >
                  <X className="mr-2 h-4 w-4" />
                  Reset
                </Button>
                <SheetClose asChild>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Select
            value={sortBy}
            onValueChange={(value) => {
              setSortBy(value)
              const newParams = new URLSearchParams(searchParams.toString())
              newParams.set("sort", value)
              router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
            }}
          >
            <SelectTrigger className="w-[180px] border-white/10 bg-white/5 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-950 border-white/10 text-white">
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border border-white/10 rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-10 w-10 ${viewMode === "grid" ? "bg-white/10" : ""}`}
              onClick={() => {
                setViewMode("grid")
                const newParams = new URLSearchParams(searchParams.toString())
                newParams.set("view", "grid")
                router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
              }}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none h-10 w-10 ${viewMode === "list" ? "bg-white/10" : ""}`}
              onClick={() => {
                setViewMode("list")
                const newParams = new URLSearchParams(searchParams.toString())
                newParams.set("view", "list")
                router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
              }}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Active filters display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {searchQuery && (
            <Badge
              variant="outline"
              className="bg-white/5 border-white/10 text-white flex items-center gap-1 px-3 py-1"
            >
              Search: {searchQuery}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => {
                  removeFilter("search")
                  const newParams = new URLSearchParams(searchParams.toString())
                  newParams.delete("q")
                  router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
                }}
              />
            </Badge>
          )}

          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="bg-white/5 border-white/10 text-white flex items-center gap-1 px-3 py-1"
            >
              Category: {category}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => {
                  removeFilter("category", category)
                  const newParams = new URLSearchParams(searchParams.toString())
                  const categories = newParams.getAll("category").filter((c) => c !== category)
                  newParams.delete("category")
                  categories.forEach((c) => newParams.append("category", c))
                  router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
                }}
              />
            </Badge>
          ))}

          {selectedLocations.map((location) => (
            <Badge
              key={location}
              variant="outline"
              className="bg-white/5 border-white/10 text-white flex items-center gap-1 px-3 py-1"
            >
              Location: {location}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => {
                  removeFilter("location", location)
                  const newParams = new URLSearchParams(searchParams.toString())
                  const locations = newParams.getAll("location").filter((l) => l !== location)
                  newParams.delete("location")
                  locations.forEach((l) => newParams.append("location", l))
                  router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
                }}
              />
            </Badge>
          ))}

          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white h-7 px-2" onClick={resetFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Results count */}
      <div className="mb-6 text-zinc-400">
        {loading ? (
          <p>Loading clubs...</p>
        ) : (
          <p>
            Showing {filteredClubs.length} {filteredClubs.length === 1 ? "club" : "clubs"}
          </p>
        )}
      </div>

      {/* Club display */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-12 w-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        </div>
      ) : filteredClubs.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-lg p-12 text-center">
          <h3 className="text-xl font-medium mb-2">No clubs found</h3>
          <p className="text-zinc-400 mb-6">Try adjusting your filters or search query</p>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      ) : viewMode === "list" ? (
        <ClubList clubs={filteredClubs} />
      ) : (
        <ClubGrid clubs={filteredClubs} />
      )}
    </>
  )
}


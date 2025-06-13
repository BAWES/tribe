import Link from "next/link"
import { Palette, BarChart, Code, GraduationCap, Music, Globe, Heart, Microscope, Camera } from "lucide-react"

const categories = [
  { name: "Cultural", icon: Globe, color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400" },
  { name: "Finance", icon: BarChart, color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400" },
  { name: "Computer & Science", icon: Code, color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
  {
    name: "Social & Edu",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
  },
  { name: "Art", icon: Palette, color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400" },
  { name: "Hobby", icon: Music, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400" },
  { name: "Charity", icon: Heart, color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400" },
  { name: "Science", icon: Microscope, color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400" },
  { name: "Media", icon: Camera, color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400" },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="group"
        >
          <div className="flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-md transition-all">
            <div className={`p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
              <category.icon className="h-6 w-6" />
            </div>
            <span className="font-medium">{category.name}</span>
            <span className="text-sm text-muted-foreground mt-1">Clubs</span>
          </div>
        </Link>
      ))}
    </div>
  )
}


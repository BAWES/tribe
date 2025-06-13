import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import ClubMatchmaking from "@/components/club-matchmaking"
import TrendingClubs from "@/components/trending-clubs"
import { getClubs } from "@/lib/data"

export default async function Home() {
  const clubs = await getClubs()

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-3xl" />
          <div className="absolute bottom-[10%] left-[20%] w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <Badge className="px-4 py-1.5 text-sm font-medium bg-white/10 text-white border-0 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Connecting 1000+ students with their perfect clubs
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Find Your Tribe.
              <br />
              Build Your Network.
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Tribe uses AI to connect you with the perfect student clubs based on your interests, goals, and schedule.
              Join a community that helps you thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input
                placeholder="Enter your university email"
                className="h-12 bg-white/10 border-white/10 text-white placeholder:text-zinc-500"
              />
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              >
                Get Started
              </Button>
            </div>

            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <span>Already have an account?</span>
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t border-white/10 py-6 bg-black/30 backdrop-blur-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <p className="text-zinc-500 font-medium">Trusted by students at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <div className="text-zinc-400 font-semibold text-lg">AUK</div>
              <div className="text-zinc-400 font-semibold text-lg">GUST</div>
              <div className="text-zinc-400 font-semibold text-lg">KU</div>
              <div className="text-zinc-400 font-semibold text-lg">+ 5 more</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Matching Made Simple</h2>
            <p className="text-zinc-400 max-w-2xl">
              Our AI-powered platform makes finding the perfect club as easy as answering a few questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Share Your Interests</h3>
              <p className="text-zinc-400">
                Tell us about your passions, skills, and what you're looking to gain from a club experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Get Matched</h3>
              <p className="text-zinc-400">
                Our algorithm analyzes your profile and matches you with clubs that align with your interests and goals.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Connect & Join</h3>
              <p className="text-zinc-400">
                Explore your matches, connect with club leaders, and find your perfect community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Matchmaking */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <Badge className="px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">
                <Zap className="h-3.5 w-3.5 mr-2" />
                AI-Powered Matching
              </Badge>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Find your perfect club match in seconds</h2>

              <p className="text-zinc-400 text-lg">
                Our advanced algorithm considers your interests, schedule, and goals to recommend clubs that are perfect
                for you. No more scrolling through endless lists.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
                  Take the Quiz
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Browse All Clubs
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <ClubMatchmaking />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Clubs */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">
                <Users className="h-3.5 w-3.5 mr-2" />
                Trending Now
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Discover Popular Clubs</h2>
            </div>
            <Link href="/directory">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <TrendingClubs clubs={clubs.slice(0, 6)} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-[20%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-white/10 text-white border-0">
              <Globe className="h-3.5 w-3.5 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Are Saying</h2>
            <p className="text-zinc-400 max-w-2xl">
              Join thousands of students who found their community through ClubMatch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-500 h-5 w-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6">
                "Tribe connected me with the Translation Club, which perfectly aligned with my passion for languages.
                I've made amazing friends and improved my skills!"
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 h-12 w-12 flex items-center justify-center">
                  <span className="font-medium text-white">NA</span>
                </div>
                <div>
                  <p className="font-medium text-white">Noor Al-Salem</p>
                  <p className="text-sm text-zinc-400">Translation Club Member</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-500 h-5 w-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6">
                "As a club president, Tribe has helped us grow our membership by 200% in just one semester. The platform
                makes it easy to showcase what we offer."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 h-12 w-12 flex items-center justify-center">
                  <span className="font-medium text-white">MA</span>
                </div>
                <div>
                  <p className="font-medium text-white">Mohammed Al-Enezi</p>
                  <p className="text-sm text-zinc-400">CS Club President</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-500 h-5 w-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6">
                "I was struggling to find my place on campus until Tribe recommended the Debate Club. Now I'm developing
                leadership skills and making lifelong connections."
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 h-12 w-12 flex items-center justify-center">
                  <span className="font-medium text-white">DA</span>
                </div>
                <div>
                  <p className="font-medium text-white">Dalal Al-Sabah</p>
                  <p className="text-sm text-zinc-400">Debate Club Vice President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="rgba(255, 255, 255, 0.1)" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to find your perfect club match?</h2>
            <p className="text-zinc-400 text-lg">
              Join thousands of students who've found their community through Tribe. It takes less than 2 minutes to get
              started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              >
                Get Started — It's Free
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Tribe
              </div>
              <p className="text-zinc-400 mb-4">
                Connecting students with their perfect clubs through AI-powered matchmaking.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-zinc-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/directory" className="text-zinc-400 hover:text-white">
                    Club Directory
                  </Link>
                </li>
                <li>
                  <Link href="/universities" className="text-zinc-400 hover:text-white">
                    Universities
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-zinc-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-zinc-400 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-zinc-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-zinc-400 hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2025 Tribe. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
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
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


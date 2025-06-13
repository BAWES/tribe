"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronRight } from "lucide-react"

export default function ClubMatchmaking() {
  const [step, setStep] = useState(1)
  const [interests, setInterests] = useState<string[]>([])

  const interestOptions = [
    "Technology",
    "Arts",
    "Sports",
    "Science",
    "Business",
    "Languages",
    "Music",
    "Politics",
    "Environment",
    "Media",
    "Volunteering",
    "Culture",
    "Gaming",
    "Health",
    "Literature",
  ]

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest))
    } else {
      setInterests([...interests, interest])
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  return (
    <Card className="bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-white">Tribe Matchmaking Quiz</div>
          <div className="text-sm text-white/70">Step {step} of 3</div>
        </div>
        <div className="w-full bg-white/20 h-1 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <CardContent className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What are your interests?</h3>
              <p className="text-zinc-400">Select all that apply to help us find your perfect club matches.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <Button
                  key={interest}
                  type="button"
                  variant="outline"
                  className={`justify-start border-white/10 hover:bg-white/10 ${
                    interests.includes(interest) ? "bg-white/10 text-white" : "text-zinc-400"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interests.includes(interest) && <Check className="mr-2 h-4 w-4 text-blue-400" />}
                  {interest}
                </Button>
              ))}
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              onClick={nextStep}
              disabled={interests.length === 0}
            >
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What are your goals?</h3>
              <p className="text-zinc-400">What do you hope to gain from joining a club?</p>
            </div>

            <div className="space-y-3">
              {[
                "Make new friends and connections",
                "Develop leadership skills",
                "Learn new skills related to my interests",
                "Build my resume for future opportunities",
                "Have fun and relax outside of classes",
                "Contribute to the community",
              ].map((goal) => (
                <Button
                  key={goal}
                  type="button"
                  variant="outline"
                  className="w-full justify-start border-white/10 hover:bg-white/10 text-zinc-400"
                >
                  {goal}
                </Button>
              ))}
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              onClick={nextStep}
            >
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Your Top Matches</h3>
              <p className="text-zinc-400">Based on your interests in {interests.slice(0, 3).join(", ")}.</p>
            </div>

            <div className="space-y-4">
              {[
                { name: "Computer Science Club", match: "98%" },
                { name: "Tech Entrepreneurs Society", match: "92%" },
                { name: "Digital Media Club", match: "87%" },
              ].map((club, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div>
                    <div className="font-medium text-white">{club.name}</div>
                    <div className="text-sm text-zinc-400">Match Score: {club.match}</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0">
                    {club.match}
                  </Badge>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
              View All Matches
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


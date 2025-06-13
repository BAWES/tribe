"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

// Mock events data
const mockEvents = [
  {
    id: "event1",
    title: "Welcome Meeting",
    description:
      "Join us for our first meeting of the semester! We'll introduce the club, discuss our plans for the year, and get to know each other.",
    date: "2025-04-15",
    time: "5:00 PM - 7:00 PM",
    location: "Student Center, Room 203",
    image: "/placeholder.svg?height=300&width=600&text=Welcome%20Meeting",
    attendees: 24,
    isRegistered: false,
  },
  {
    id: "event2",
    title: "Guest Speaker: Industry Insights",
    description:
      "We're excited to host a special guest speaker who will share insights about career opportunities and industry trends.",
    date: "2025-04-28",
    time: "6:30 PM - 8:30 PM",
    location: "Business Building, Auditorium",
    image: "/placeholder.svg?height=300&width=600&text=Guest%20Speaker",
    attendees: 42,
    isRegistered: false,
  },
  {
    id: "event3",
    title: "Workshop: Practical Skills",
    description:
      "A hands-on workshop to develop practical skills related to our club's focus. All materials will be provided.",
    date: "2025-05-10",
    time: "3:00 PM - 6:00 PM",
    location: "Engineering Building, Lab 101",
    image: "/placeholder.svg?height=300&width=600&text=Workshop",
    attendees: 18,
    isRegistered: false,
  },
]

interface ClubEventsProps {
  clubId: string
}

export default function ClubEvents({ clubId }: ClubEventsProps) {
  const [events, setEvents] = useState(mockEvents)

  const handleRegister = (eventId: string) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, isRegistered: true, attendees: event.attendees + 1 } : event,
      ),
    )

    toast({
      title: "Registration successful!",
      description: "You've been registered for this event. We'll send you a reminder email closer to the date.",
    })
  }

  const handleCancelRegistration = (eventId: string) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, isRegistered: false, attendees: event.attendees - 1 } : event,
      ),
    )

    toast({
      title: "Registration cancelled",
      description: "You've been removed from this event.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-48 md:h-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>

              <div className="p-6 md:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-0 self-start">
                    Upcoming
                  </Badge>
                </div>

                <p className="text-zinc-400 mb-6">{event.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-400" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>
                      {event.attendees} {event.attendees === 1 ? "person" : "people"} attending
                    </span>
                  </div>

                  {event.isRegistered ? (
                    <Button
                      variant="outline"
                      className="border-red-500/30 text-red-400 hover:bg-red-950/30 hover:text-red-300"
                      onClick={() => handleCancelRegistration(event.id)}
                    >
                      Cancel Registration
                    </Button>
                  ) : (
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
                      onClick={() => handleRegister(event.id)}
                    >
                      Register for Event
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


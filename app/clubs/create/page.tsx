"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import MemberForm from "@/components/member-form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Club name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  location: z.string({
    required_error: "Please select a location.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  website: z.string().url().optional().or(z.literal("")),
  instagram: z.string().optional(),
  joiningRules: z.string(),
  meetingSchedule: z.string(),
})

export default function CreateClubPage() {
  const router = useRouter()
  const [members, setMembers] = useState([{ name: "", role: "President", bio: "", image: "" }])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      location: "",
      email: "",
      website: "",
      instagram: "",
      joiningRules: "",
      meetingSchedule: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to the server
    console.log({ ...values, members })

    // Redirect to the club page (in a real app, this would go to the newly created club)
    router.push("/")
  }

  const addMember = () => {
    setMembers([...members, { name: "", role: "", bio: "", image: "" }])
  }

  const updateMember = (index: number, data: any) => {
    const newMembers = [...members]
    newMembers[index] = { ...newMembers[index], ...data }
    setMembers(newMembers)
  }

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Club</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Club Information</CardTitle>
              <CardDescription>Provide basic information about your club</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Club Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Translation Club" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Cultural">Cultural</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Computer & Science">Computer & Science</SelectItem>
                          <SelectItem value="Social & Edu">Social & Edu</SelectItem>
                          <SelectItem value="ART">Art</SelectItem>
                          <SelectItem value="Hobby">Hobby</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="AUK">AUK</SelectItem>
                          <SelectItem value="GUST">GUST</SelectItem>
                          <SelectItem value="KU">KU</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your club's purpose and activities"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="club@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourclub.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram Handle (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="yourclubhandle" {...field} />
                    </FormControl>
                    <FormDescription>Don't include the @ symbol</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="joiningRules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Joining Rules</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Explain how students can join your club"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="meetingSchedule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Schedule</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Every Tuesday at 5 PM in Room 101" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Club Structure</CardTitle>
              <CardDescription>Add members and their roles in the club</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {members.map((member, index) => (
                <MemberForm
                  key={index}
                  member={member}
                  onChange={(data) => updateMember(index, data)}
                  onRemove={() => removeMember(index)}
                  canRemove={members.length > 1}
                />
              ))}

              <Button type="button" variant="outline" onClick={addMember}>
                Add Another Member
              </Button>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Create Club
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  )
}


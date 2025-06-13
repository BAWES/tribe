"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface MemberFormProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
  }
  onChange: (data: any) => void
  onRemove: () => void
  canRemove: boolean
}

export default function MemberForm({ member, onChange, onRemove, canRemove }: MemberFormProps) {
  return (
    <div className="border rounded-lg p-4 relative">
      {canRemove && (
        <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={onRemove}>
          <X className="h-4 w-4" />
        </Button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor={`member-name`}>Name</Label>
          <Input
            id={`member-name`}
            value={member.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`member-role`}>Role</Label>
          <Select value={member.role} onValueChange={(value) => onChange({ role: value })}>
            <SelectTrigger id={`member-role`}>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="President">President</SelectItem>
              <SelectItem value="Vice President">Vice President</SelectItem>
              <SelectItem value="Secretary">Secretary</SelectItem>
              <SelectItem value="Treasurer">Treasurer</SelectItem>
              <SelectItem value="Head of Media">Head of Media</SelectItem>
              <SelectItem value="Head of PR">Head of PR</SelectItem>
              <SelectItem value="Head of Events">Head of Events</SelectItem>
              <SelectItem value="Member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`member-bio`}>Bio (Optional)</Label>
        <Textarea
          id={`member-bio`}
          value={member.bio}
          onChange={(e) => onChange({ bio: e.target.value })}
          placeholder="Brief description about this member"
          className="h-20"
        />
      </div>
    </div>
  )
}


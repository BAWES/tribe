import type { Member } from "@/lib/types"

interface ClubStructureProps {
  members: Member[]
}

export default function ClubStructure({ members }: ClubStructureProps) {
  // Group members by role type
  const leadership = members.filter((m) => ["President", "Vice President"].includes(m.role))

  const heads = members.filter((m) => m.role.startsWith("Head of"))

  const others = members.filter(
    (m) => !["President", "Vice President"].includes(m.role) && !m.role.startsWith("Head of"),
  )

  return (
    <div className="flex flex-col items-center space-y-8 py-4">
      {/* Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {leadership.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-lg font-medium text-primary">{member.role}</div>
            <div className="font-bold text-xl">{member.name}</div>
          </div>
        ))}
      </div>

      {/* Department Heads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {heads.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-lg font-medium text-primary">{member.role}</div>
            <div className="font-bold text-xl">{member.name}</div>
          </div>
        ))}
      </div>

      {/* Other Roles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {others.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-lg font-medium text-primary">{member.role}</div>
            <div className="font-bold text-xl">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


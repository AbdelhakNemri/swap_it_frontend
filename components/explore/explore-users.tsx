import { useState, useEffect } from 'react';
import { User } from '@/lib/auth';
import Image from 'next/image';

interface ExploreUser extends User {
  skills: string[];
  matchPercentage: number;
}

export function ExploreUsers() {
  const [users, setUsers] = useState<ExploreUser[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  useEffect(() => {
    // TODO: Fetch users from API
    const mockUsers: ExploreUser[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Web Developer with 5 years of experience',
        skills: ['JavaScript', 'React', 'Node.js'],
        location: 'New York',
        profile_image: null,
        matchPercentage: 85,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        bio: 'UI/UX Designer passionate about creating beautiful interfaces',
        skills: ['Figma', 'UI Design', 'User Research'],
        location: 'San Francisco',
        profile_image: null,
        matchPercentage: 75,
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike@example.com',
        bio: 'Backend Developer specializing in Python and Django',
        skills: ['Python', 'Django', 'PostgreSQL'],
        location: 'London',
        profile_image: null,
        matchPercentage: 60,
      },
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = selectedSkill
    ? users.filter((user) => user.skills.includes(selectedSkill))
    : users;

  const allSkills = Array.from(
    new Set(users.flatMap((user) => user.skills))
  ).sort();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedSkill('')}
          className={`px-3 py-1 rounded-full text-sm ${
            !selectedSkill
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {allSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSkill === skill
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                {user.profile_image ? (
                  <Image
                    src={user.profile_image}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{user.name}</h3>
                  <span className="text-xs text-blue-500">
                    {user.matchPercentage}% match
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{user.bio}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {user.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
import { useState } from 'react';

export default function InteractiveWidget() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      ❤️ {likes} Likes
    </button>
  );
}
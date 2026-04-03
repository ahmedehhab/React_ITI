import React, { useState } from 'react';
import UserCard from '../userCard/UserCard';
import users from '../../data/users.json'

const UserGallery = () => {
  const [searchEmail, setSearchEmail] = useState("");

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-md">
          <div className="flex shadow-sm rounded-lg overflow-hidden border border-slate-200">
            <span className="bg-white px-4 flex items-center border-r-0">
              <i className="bi bi-search text-slate-400"></i>
            </span>
            <input 
              type="text" 
              className="w-full py-2 px-3 focus:outline-none text-slate-700 bg-white" 
              placeholder="Search users..." 
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users
          .filter(user => user.email.toLowerCase().includes(searchEmail.toLowerCase()))
          .map(user => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default UserGallery;
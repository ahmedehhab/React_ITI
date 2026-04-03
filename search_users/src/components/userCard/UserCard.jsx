const UserCard = ({ user }) => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-sm border-0 h-full flex flex-col overflow-hidden transition-transform hover:shadow-md">
        <div className="p-6 text-center flex-grow">
          {/* Profile Image */}
          <img 
            src={user.profilePicture} 
            className="rounded-full mb-4 border-4 border-slate-50 shadow-sm mx-auto object-cover" 
            alt={user.username}
            style={{ width: '90px', height: '90px' }} 
          />
          
          <h5 className="text-xl font-bold text-slate-800 mb-0">{user.username}</h5>
          <p className="text-slate-400 text-sm mb-3 font-mono italic">@{user.username}</p>

          {/* Role Badge - Equivalent to @switch */}
          <div className="mb-4">
            {user.role === 'admin' && (
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase">Admin</span>
            )}
            {user.role === 'moderator' && (
              <span className="bg-amber-100 text-amber-600 text-xs font-bold px-3 py-1 rounded-full uppercase">Moderator</span>
            )}
            {user.role === 'user' && (
              <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full uppercase">User</span>
            )}
          </div>

          {/* Details Section */}
          <div className="text-left border-t border-slate-100 pt-4 mt-2 space-y-2">
            <div className="flex items-center text-sm text-slate-500">
              <i className="bi bi-envelope me-2 text-blue-500"></i>
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <i className="bi bi-telephone me-2 text-blue-500"></i>
              <span>{user.phoneNumber}</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <i className="bi bi-calendar3 me-2 text-blue-500"></i>
              <span>{user.birthdate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
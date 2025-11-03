import { useContext } from 'react'
import UserContext from '../context/userContext'
import React from 'react'

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => setUser(null);

  if (!user) {
    return (
      <div className="bg-white border border-slate-100 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-slate-900">Profile</h2>
        <p className="mt-3 text-slate-600">No user logged in</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-900">Profile</h2>

      <div className="mt-4 space-y-2">
        <div>
          <p className="text-sm text-slate-500">Username</p>
          <p className="text-slate-900 font-medium">{user.username}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Password</p>
          <p className="text-slate-900 font-medium">{user.password}</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-md bg-red-500 px-3 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
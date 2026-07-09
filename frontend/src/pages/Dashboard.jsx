import { useNavigate } from 'react-router-dom';

function decodeToken(token) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
  } catch {
    return null;
  }
}

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? decodeToken(token) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-5 bg-white shadow-sm">
        <span className="text-xl font-extrabold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
          Taskify
        </span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-full text-sm font-medium text-blue-700 border border-blue-200 hover:bg-blue-50 transition"
        >
          Logout
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome{user?.name ? `, ${user.name}` : ''}
          </h1>
          <p className="mt-3 text-gray-500">
            {user?.email && `Signed in as ${user.email}`}
          </p>
          <p className="mt-8 text-gray-400">
            Your task workspace is coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

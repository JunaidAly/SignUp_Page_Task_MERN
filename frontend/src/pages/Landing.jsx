import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300 text-white">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-6">
        <span className="text-2xl font-extrabold tracking-tight">Taskify</span>
        <div className="space-x-3">
          <Link
            to="/signin"
            className="px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-full text-sm font-medium bg-white text-blue-700 hover:shadow-lg transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight">
          Organize your work. Simplify your day.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-xl">
          Taskify helps you plan, track, and finish what matters — all in one
          clean, distraction-free workspace.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/signup"
            className="px-8 py-3 rounded-full font-semibold bg-white text-blue-700 hover:shadow-xl hover:scale-105 transition"
          >
            Create free account
          </Link>
          <Link
            to="/signin"
            className="px-8 py-3 rounded-full font-semibold border border-white/60 hover:bg-white/10 transition"
          >
            I already have an account
          </Link>
        </div>
      </main>

      <footer className="text-center text-blue-100/80 text-sm py-6">
        &copy; {new Date().getFullYear()} Taskify. All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;

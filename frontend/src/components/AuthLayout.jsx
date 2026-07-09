import { Link } from 'react-router-dom';

function AuthLayout({ subtitle, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-600 to-sky-300 px-4">
      <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeIn">
        <Link to="/" className="block text-center mb-1">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
            Taskify
          </span>
        </Link>
        <h2 className="text-lg font-medium mb-6 text-center text-gray-500">
          {subtitle}
        </h2>

        {children}

        {footer && (
          <p className="mt-6 text-center text-sm text-gray-600">{footer}</p>
        )}
      </div>
    </div>
  );
}

export default AuthLayout;

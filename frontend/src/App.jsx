import { useState } from 'react';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import './index.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {isSignIn ? 'Authorization' : 'Registration'}
        </h1>

        {isSignIn ? <SignIn /> : <SignUp />}

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignIn ? (
            <>
              Don't have an account?{' '}
              <button
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;

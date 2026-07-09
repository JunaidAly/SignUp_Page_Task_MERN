import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import IconInput from '../components/IconInput.jsx';
import { MailIcon } from '../components/icons.jsx';

const API_URL = 'http://localhost:5000/api/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [resetLink, setResetLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setResetLink(null);
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/forgot-password`, { email });
      setMessage({ type: 'success', text: res.data.message });
      setResetLink(res.data.resetLink);
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      subtitle="Reset your password"
      footer={
        <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
          Back to Sign In
        </Link>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <p className="text-sm text-gray-500 text-center">
          Enter your email and we'll generate a link to reset your password.
        </p>

        {message && (
          <div
            className={`p-2 rounded text-sm ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {resetLink && (
          <div className="p-2 rounded text-sm bg-blue-50 text-blue-700 break-all">
            <Link to={resetLink.replace('http://localhost:5173', '')} className="underline">
              {resetLink}
            </Link>
          </div>
        )}

        <IconInput
          icon={<MailIcon />}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;

import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import IconInput from '../components/IconInput.jsx';
import { LockIcon } from '../components/icons.jsx';

const API_URL = 'http://localhost:5000/api/auth';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      setMessage({ type: 'success', text: res.data.message });
      setTimeout(() => navigate('/signin'), 1500);
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
      subtitle="Set a new password"
      footer={
        <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
          Back to Sign In
        </Link>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
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

        <IconInput
          icon={<LockIcon />}
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-60"
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;

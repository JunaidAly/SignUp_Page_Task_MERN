import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout.jsx';
import IconInput from './IconInput.jsx';
import { MailIcon, LockIcon, UserIcon } from './icons.jsx';

const API_URL = 'http://localhost:5000/api/auth';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/signup`, form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
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
      subtitle="Create your account"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {message && (
          <div className="p-2 rounded text-sm bg-red-100 text-red-700">
            {message.text}
          </div>
        )}

        <IconInput
          icon={<UserIcon />}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <IconInput
          icon={<MailIcon />}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <IconInput
          icon={<LockIcon />}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-60"
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;

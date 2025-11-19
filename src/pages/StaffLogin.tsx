import { useState } from 'react';
import { Shield } from 'lucide-react';

export function StaffLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#2a2a2a] p-8 shadow-2xl border border-gray-800">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8e6d46]/20 mb-4">
            <Shield className="w-8 h-8 text-[#8e6d46]" />
          </div>
          <h1 className="text-3xl font-light tracking-widest uppercase text-[#a2886a] mb-2">
            Staff Portal
          </h1>
          <p className="text-gray-400 font-light">Authorized personnel only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-light tracking-wide uppercase text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 focus:border-[#8e6d46] focus:outline-none transition-colors text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-light tracking-wide uppercase text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 focus:border-[#8e6d46] focus:outline-none transition-colors text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8e6d46] hover:bg-[#a2886a] text-white py-3 px-6 uppercase tracking-wider text-sm font-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Staff Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-gray-500 hover:text-[#8e6d46] font-light text-sm transition-colors">
            Return to main site
          </a>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      );

      localStorage.setItem('token', res.data.token);

      alert('Login Successful');

    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <form onSubmit={handleLogin}
      className='shadow-lg p-10 rounded w-96'>

        <h2 className='text-3xl font-bold mb-5'>Login</h2>

        <input
        type='email'
        placeholder='Email'
        className='border p-2 w-full mb-3'
        onChange={(e) => setEmail(e.target.value)}
        />

        <input
        type='password'
        placeholder='Password'
        className='border p-2 w-full mb-3'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button className='bg-black text-white w-full py-2 rounded'>
          Login
        </button>

      </form>
    </div>
  )
}

export default Login
import {useState} from "react";
import axios from "axios";

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deviceName, setDeviceName] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', { email, password });
      const token = res.data.token;

      console.log(res.data);
      

      localStorage.setItem('token', token);

      await axios.post('http://localhost:5000/auth/track-login', { email, deviceName });

      alert('Login successful');
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };



  return (
    <>
      <div className="flex flex-col max-w-lg mx-auto">
        <div className="">
          <h1 className="my-4 text-4xl font-bold text-center">Sign In</h1>
          <form action="" className="flex flex-col gap-4">
            <input
              type="email"
              className="p-3 rounded bg-slate-200"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="p-3 rounded bg-slate-200"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

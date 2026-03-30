import { useState, useEffect } from "react";
import { Link } from "react-router";

export function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <p>{user?.email}</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>About Us</h1>
      {count > 0 && <p>Current Count: {count}</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export const myAppRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

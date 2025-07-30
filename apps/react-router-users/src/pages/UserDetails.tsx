import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User } from '../types';

export function UserDetails() {
  // TODO: Get the user ID from the route params
  const id = "1"
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching user: ' + err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {loading ? (
        <p>Loading user details...</p>
      ) : user ? (
        <div>
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <Link to="/">Back to all users</Link>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

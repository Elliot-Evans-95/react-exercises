import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

export function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching users: ' + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

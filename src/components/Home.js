import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const role = localStorage.getItem('role'); 

  return (
    <div>
      <h2>Welcome!!</h2>
      <div>
        <Link to="/movies">
          <button>View Movies</button>
        </Link>
        {role === 'admin' && (
          <Link to="/add-movie">
            <button>Add Movie</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;

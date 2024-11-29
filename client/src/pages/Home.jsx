import { useEffect } from "react";
import BlogList from '../components/BlogList.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (isLoading) return;
        if (isAuthenticated && user) {
            // console.log('User Data:', user);
            axios.post('http://localhost:5050/api/users', {
                username: user.name,
                email: user.email,
                auth0Id: user.sub,
            })
            .then((response) => {
                console.log('User info stored in DB:', response.data);
            })
            .catch((error) => {
                console.error('Error storing user info:', error);
            });
            let userInfo = {
              username: user.name,
              email: user.email
            };
          
          localStorage.setItem("saved_current_user", JSON.stringify(userInfo));
        }
    }, [isAuthenticated, user, isLoading]);

  return (
    <div>
      <BlogList />
    </div>
  );
}

export default Home;

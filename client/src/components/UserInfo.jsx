import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../pages/styles/UserInfo.css';
import LogoutButton from './LogoutButton.jsx';

const Profile = () => {
    const { isAuthenticated } = useAuth0();
    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const MAX_BIO_LENGTH = 150;

    // Load user info from localStorage after login
    useEffect(() => {
        if (isAuthenticated) {
            const savedUserData = JSON.parse(localStorage.getItem("saved_current_user"));
            if (savedUserData) {
                setUsername(savedUserData.username);
                setBio(savedUserData.bio || '');
                setProfileData(savedUserData);
            }
        }
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Updated profile:', { username, bio });
   
        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users`, {
                email: profileData.email,
                bio,
            });
            console.log('User info updated in DB:', response.data);
   
            const updatedUserData = response.data.user;
            localStorage.setItem("saved_current_user", JSON.stringify(updatedUserData));
   
            setProfileData(updatedUserData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };
   

    const handleBioChange = (e) => {
        const editBio = e.target.value;
        if (editBio.length <= MAX_BIO_LENGTH) {
            setBio(editBio);
        }
    };

    const handleCancel = () => {
        setBio(profileData?.bio);
        setIsEditing(false);
    };

    if (!isAuthenticated) {
        return <div>Please log in to view your profile</div>;
    }

    return (
        <div className="profile-container">
            {profileData ? (
                !isEditing ? (
                    <div>
                        <h2>{username}</h2>
                        <p>Bio: {bio}</p>
                        <button onClick={() => setIsEditing(true)}>Edit Details</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Username:
                                <input 
                                    type="text" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required
                                    disabled
                                />
                            </label>
                        </div>
                        
                        <div>
                            <label>
                                Bio:
                                <textarea 
                                    value={bio} 
                                    onChange={handleBioChange} 
                                    required
                                    maxLength={MAX_BIO_LENGTH}
                                />
                                <p>{bio.length}/{MAX_BIO_LENGTH} characters</p>
                            </label>
                        </div>
                        
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                )
            ) : (
                <div>Loading user information...</div>
            )}
            <LogoutButton />
        </div>
    );
};

export default Profile;

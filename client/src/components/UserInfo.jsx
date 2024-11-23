import React, { useState } from 'react';
import '../pages/styles/UserInfo.css';
const Profile = () => {
    const user = { //temp
        username: 'Mark Rober',
        bio: 'I make random science expiraments to be able to show the younger audience how interesting science can be',
    };

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [initialBio, setInitialBio] = useState(user.bio);
    const MAX_BIO_LENGTH = 150;

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated profile:', { username, bio });// make call here, but later
    setIsEditing(false);
    };

    const handleBioChange = (e) => {
    const editBio = e.target.value;
    if (editBio.length <= MAX_BIO_LENGTH) {
        setBio(editBio);
    }
    };
    const handleCancel = () => {
        // Revert the bio back to its initial value when canceling
        setBio(initialBio);
        setIsEditing(false);
    };

    return (
    <div className="profile-container">
        {!isEditing ? (
        <div>
            <h2>{username}</h2>
            <p><strong>Bio:</strong> {bio}</p>
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
                <p>{bio.length}/{MAX_BIO_LENGTH} characters</p> {/* Character count */}
            </label>
            </div>
            
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => handleCancel(false)}>
            Cancel
            </button>
        </form>
        )}
    </div>
    );
};

export default Profile;

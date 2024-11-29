import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    localStorage.removeItem("saved_current_user");
  };

  return (
    <button
      onClick={() => {
        handleLogout(); 
        logout({ returnTo: window.location.origin });
      }}
      style={{
        padding: '0.75rem',
        marginTop: '1rem',
        backgroundColor: '#00008B',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#003366';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#00008B';
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

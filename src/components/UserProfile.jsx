import { useState, useEffect } from "react";

function UserProfile() {
    // State for data, loading status, and error handling
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // The AJAX function using async/await and fetch()
    async function fetchUser() {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://randomuser.me/api/");

            // Handle HTTP errors (e.g., 404, 500)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // The API returns an array called 'results', we want the first item
            setUser(data.results[0]);
        } catch (err) {
            setError(err.message || "Something went wrong while fetching data.");
        } finally {
            setLoading(false);
        }
    }

    // Trigger the AJAX request when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <section className="card">
            <h2>AJAX Demo · Random User API</h2>

            {/* 1. Loading State */}
            {loading && (
                <div className="profile-container">
                    <p className="muted">Loading user data...</p>
                </div>
            )}

            {/* 2. Error State */}
            {error && (
                <div className="profile-container">
                    <p className="error-message">⚠️ Error: {error}</p>
                </div>
            )}

            {/* 3. Success State (Data Display) */}
            {!loading && !error && user && (
                <div className="profile-container">
                    <img
                        src={user.picture.large}
                        alt={`${user.name.first} ${user.name.last}`}
                        className="avatar"
                    />
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p className="muted">{user.email}</p>
                    <p className="muted">📍 {user.location.city}, {user.location.country}</p>
                </div>
            )}

            {/* Action Button */}
            <button
                onClick={fetchUser}
                disabled={loading}
                className="fetch-btn"
            >
                {loading ? "Fetching..." : "Fetch New User"}
            </button>
        </section>
    );
}

export default UserProfile;
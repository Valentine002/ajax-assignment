import { useState, useEffect } from "react";

function Greeting() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 1. The AJAX function
    async function fetchRandomUser() {
        setLoading(true);
        setError(null);

        try {
            // Make the AJAX request to a public API
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

            // Check if the request was successful
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            // Parse the JSON response
            const data = await response.json();

            // Update state with the fetched data
            setName(data.name);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // 2. Trigger the AJAX request when the component first mounts
    useEffect(() => {
        fetchRandomUser();
    }, []); // The empty [] array means "run this once on mount"

    return (
        <section className="card">
            <h2>Greeting · AJAX (fetch) + useEffect</h2>

            {/* 3. Show different UI based on the AJAX state */}
            {loading && <p>Loading user data...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && <p>Hello, {name || "stranger"}! 👋</p>}

            <button onClick={fetchRandomUser} disabled={loading}>
                {loading ? "Fetching..." : "Fetch Another User"}
            </button>
        </section>
    );
}

export default Greeting;
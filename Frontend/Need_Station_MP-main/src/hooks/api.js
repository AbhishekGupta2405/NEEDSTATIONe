export const signupUser = async (userData) => {
    try {
        const response = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        return await response.text();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};

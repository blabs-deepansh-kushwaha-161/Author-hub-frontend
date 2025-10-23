

export const isLoggedIn = () => {
    const token = localStorage.getItem("access_token");
    return !!token; // true if token exists
};

export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

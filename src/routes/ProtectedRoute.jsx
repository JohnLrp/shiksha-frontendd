import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Wait for bootstrap to finish
  if (loading) return null;

  if (!isAuthenticated) {
    try {
      const here = window.location.pathname + window.location.search;
      if (here && here.startsWith("/") && !here.startsWith("//")) {
        sessionStorage.setItem("post_auth_redirect", here);
      }
    } catch (_) { /* sessionStorage unavailable */ }

    window.location.href = (import.meta.env.VITE_HOME_URL || "https://www.shikshacom.com") + "/login";
    return null;
  }

  return children;
};

export default ProtectedRoute;

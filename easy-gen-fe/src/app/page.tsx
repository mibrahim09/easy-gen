"use client";
import withProtectedRoute from "@/components/protected-route/withProtectedRoute";

const HomePage = () => {
  return (
    <div className={"min-h-svh flex items-center justify-center"}>
      <p>Welcome to the application.</p>
    </div>
  );
};

export default withProtectedRoute(HomePage);

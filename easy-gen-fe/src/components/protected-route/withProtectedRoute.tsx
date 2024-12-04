"use client";

import React, { ComponentType, useEffect } from "react";
import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";

const withProtectedRoute = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const ProtectedRoute: React.FC<P> = (props) => {
    const authContext = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!authContext?.isLoggedIn) {
        router.push("/auth/login");
      }
    }, [authContext, router]);

    return authContext?.isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;

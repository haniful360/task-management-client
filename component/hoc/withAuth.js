'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isAuthenticate, setIsAuthenticate] = useState(null);

    useEffect(() => {
      const user = localStorage.getItem("user");
      if (typeof window !== "undefined") {
        if (!user) {
          router.replace("/login");
        } else {
          setIsAuthenticate(true);
        }
      }
    }, [router]);

    if (!isAuthenticate) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

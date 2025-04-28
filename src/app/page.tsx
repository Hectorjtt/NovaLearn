"use client";
import { useState } from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

export default function Page() {
  const [user, setUser] = useState<{
    fullName: string;
    favoriteBook: string;
  } | null>(null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {!user ? (
        <Login
          onSuccess={(fullName, favoriteBook) =>
            setUser({ fullName, favoriteBook })
          }
        />
      ) : (
        <Welcome
          fullName={user.fullName}
          favoriteBook={user.favoriteBook}
        />
      )}
    </main>
  );
}
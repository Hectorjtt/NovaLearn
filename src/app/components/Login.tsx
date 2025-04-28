"use client";
import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Login({
  onSuccess,
}: {
  onSuccess: (fullName: string, favoriteBook: string) => void;
}) {
  const { login, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      onSuccess(user.fullName, user.favoriteBook);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl mb-4">Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border"
      />
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <button type="submit" className="w-full bg-blue-600 text-white p-2">
        Entrar
      </button>
    </form>
  );
}
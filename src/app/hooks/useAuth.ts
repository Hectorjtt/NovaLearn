"use client";
import { useState } from "react";
import { Student } from "../types/student";

const students: Student[] = [
  { username: "ana.t",   password: "libro123",  fullName: "Ana Torres",    favoriteBook: "Cien Años de Soledad" },
  { username: "marco.r", password: "lectura456",fullName: "Marco Ramírez", favoriteBook: "El Principito"       },
  { username: "sofia.m", password: "novela789", fullName: "Sofía Morales", favoriteBook: "Orgullo y Prejuicio" }
];

export function useAuth() {
  const [error, setError] = useState<string|null>(null);

  function login(username: string, password: string) {
    const user = students.find(
      s => s.username === username && s.password === password
    );
    if (!user) {
      setError("Usuario o contraseña no válidos.");
      return null;
    }
    setError(null);
    return user;
  }

  return { login, error };
}
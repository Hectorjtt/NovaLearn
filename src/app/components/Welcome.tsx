"use client";

export default function Welcome({
  fullName,
  favoriteBook,
}: {
  fullName: string;
  favoriteBook: string;
}) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl mb-4">¡Bienvenido, {fullName}!</h1>
      <p>
        Disfruta de tu lectura: <strong>{favoriteBook}</strong>
      </p>
    </div>
  );
}
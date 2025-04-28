import "./globals.css";

export const metadata = {
  title: "NovaLearn",
  description: "Acceso a Biblioteca Virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: "SiPAS",
  description: "Sistem Inventori & Pinjaman Alatan Sukan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

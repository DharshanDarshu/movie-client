import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-stone-900'>
        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <Header />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

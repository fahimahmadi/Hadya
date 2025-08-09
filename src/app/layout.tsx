import Header from '@/app/components/Header';
import './globals.css';
import Footer from './components/Footer';


export const metadata = {
  title: "Blog App",
  description: "Blog for Students Communication"
}

type PropsType = {
  children: React.ReactNode
}

function RootLayout({children}: PropsType) {
  
  return (
    <html lang="en">
      <body className="bg-black/50 scroll-smooth">
        <main>
          <Header />
          <div className="mt-18 sm:mt-31"></div>
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
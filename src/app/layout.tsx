import Header from '@/app/components/Header';
import './globals.css';


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
      <body className="bg-black/50">
        <main>
          <Header/>
            <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
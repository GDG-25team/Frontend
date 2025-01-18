import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10">
      <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/logo123.png" alt="로고" className="h-14 w-auto"/>
          </Link>
        </div>
      </div>
    </header>
  );
}
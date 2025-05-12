import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginModal from '../auth/LoginModal';
import ZoomControls from '../common/ZoomControls';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        <div className="container-lg mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ZoomControls />
    </div>
  );
};

export default Layout;
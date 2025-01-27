import React, { useState } from 'react';
import { Cookie, Mail } from 'lucide-react';

function App() {
  const [showEmail, setShowEmail] = useState(false);
  
  const revealEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(true);
  };

  const getProtectedEmail = () => {
    return showEmail ? 'info@edible.ie' : 'Click to reveal email';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Cookie className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 rotate-[225deg]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Edible Solutions</h1>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Revolutionising<br />Food Technology
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200">
              We are crafting the future of sustainable food solutions. 
              Our innovative approach combines cutting-edge technology 
              with traditional culinary excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Get in Touch</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            For business enquiries, please contact us at{' '}
            <button
              onClick={revealEmail}
              className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
            >
              {getProtectedEmail()}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
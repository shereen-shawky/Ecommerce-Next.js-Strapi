'use client';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src="login.jpg" // Replace with your image path
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* SignIn form container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
      
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-black hover:bg-gray-800 transition duration-300',
                card: 'shadow-none',
              },
              variables: {
                colorPrimary: '#000000',
                fontSize: '16px',
              },
            }}
          />
      </div>
    </section>
  );
}

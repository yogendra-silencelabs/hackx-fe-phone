// src/components/PhoneScreen.tsx
import React from 'react';

interface PhoneScreenProps {
  children: React.ReactNode;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({ children }) => {
  return (
    <div className="w-[360px] h-[720px] bg-white rounded-2xl shadow-lg overflow-hidden">
      {children}
    </div>
  );
};

export default PhoneScreen;

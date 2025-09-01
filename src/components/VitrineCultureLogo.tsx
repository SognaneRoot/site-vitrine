import React from 'react';
import vitrineCultureLogo from 'figma:asset/3c3ca4bb62f8004de58f32462517d5c3612f1113.png';

interface LogoProps {
  variant?: 'minimal' | 'creative' | 'institutional';
  size?: 'small' | 'medium' | 'large' | 'icon';
  className?: string;
  theme?: 'light' | 'dark';
}

export function VitrineCultureLogo({ 
  variant = 'minimal', 
  size = 'medium', 
  className = '', 
  theme = 'light' 
}: LogoProps) {
  
  const dimensions = {
    icon: { width: 40, height: 40 },
    small: { width: 120, height: 60 },
    medium: { width: 200, height: 100 },
    large: { width: 300, height: 150 }
  };

  const { width, height } = dimensions[size];
  
  // Pour la version icône, on ajuste les dimensions pour garder les proportions du logo
  const isIcon = size === 'icon';
  const logoWidth = isIcon ? 40 : width;
  const logoHeight = isIcon ? 40 : height;

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: logoWidth, height: logoHeight }}
    >
      <img
        src={vitrineCultureLogo}
        alt="Vitrine Culture - Saint-Louis, Sénégal"
        className={`object-contain max-w-full max-h-full ${
          theme === 'dark' ? 'filter brightness-110' : ''
        }`}
        style={{
          width: logoWidth,
          height: logoHeight
        }}
      />
    </div>
  );
}
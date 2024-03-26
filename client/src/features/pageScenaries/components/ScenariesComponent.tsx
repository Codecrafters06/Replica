import React, { FC } from 'react';

interface AvatarProps {
  src: string; 
  alt: string; 
  selected: boolean; 
  onClick: () => void;
}



const AvatarComponent: FC<AvatarProps> = ({ src, alt, selected, onClick }) => {
  return (
    <div
      className={`w-44 h-24 flex justify-center overflow-hidden cursor-pointer ${selected ? 'border-4 rounded-[3px] border-blue-500' : ''}`}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="rounded-[3px] h-full object-cover" />
    </div>
  );
};

export default AvatarComponent;

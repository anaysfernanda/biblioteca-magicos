import Box from '@mui/material/Box';
import React from 'react';

interface WrapProps{
  imageUrl: string;
}

export const Wrap: React.FC<WrapProps> = ({imageUrl}) => {
  const backgroundStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <Box sx={backgroundStyles}>
      {/* Conteúdo do componente aqui */}
    </Box>
  );
};
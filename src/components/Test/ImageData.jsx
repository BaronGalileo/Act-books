import React from 'react';

const ImageComponent = ({ imageData }) => {
  // Создаем строку data URL для отображения изображения
  const imageUrl = `data:image/png;base64,${imageData}`;

  return (
    <div>
      <img src={imageUrl} alt="Image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
    </div>
  );
};

export default ImageComponent;
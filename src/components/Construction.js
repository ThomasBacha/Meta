import React from 'react';

const imageUrl = "https://www.vosp.us/wp-content/uploads/Under.jpg";

const CenteredImage = ({ altText }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={imageUrl} alt={altText} className="UnderConstruction" />
    </div>
  );
};

export default CenteredImage;
 
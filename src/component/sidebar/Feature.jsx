const Feature = ({ children, title, image }) => {
  return (
    <div style={{ display: 'inline-flex' }}>
      {children ? (
        children
      ) : (
        <div style={{
          background: 'red',
          border: 'none',
          color: 'black',
          padding: '10px',
          margin: '3px',
          borderRadius: '20%',
          fontSize: '10px'
        }}>
          {title && <h4>{title}</h4>}
          {image && <img 
              src={image} 
              alt="feature" 
              style={{ width: '60px', height: 'auto', borderRadius: '8px' }}
            />}
        </div>
      )}
    </div>
  );
};
export default Feature;
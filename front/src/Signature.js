import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function SignatureComponent() {
  const signatureRef = useRef();
  const signatureCanvasRef = useRef(null);
  const [penColor, setPenColor] = useState('black'); // État pour la couleur du stylo
  const [signatureDataURL, setSignatureDataURL] = useState(''); // État pour l'URL de l'image de signature

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setSignatureDataURL(''); // Efface également l'URL de l'image de signature précédente
    }
  };

  const handleSave = () => {
    if (signatureRef.current) {
      const signatureData = signatureRef.current.toDataURL(); // Obtient l'image de la signature au format Data URL
      setSignatureDataURL(signatureData); // Met à jour l'état avec l'URL de l'image de signature
    }
  };

  return (
    <div className='aq'>
      <SignatureCanvas
        ref={(ref) => {
          signatureRef.current = ref;
          signatureCanvasRef.current = ref; // Conservez la référence à SignatureCanvas
        }}
        penColor={penColor} // Utilisez l'état de la couleur du stylo
        canvasProps={{ width: 500, height: 400, className: 'signatureCanvas', top: '30px' }}
      />
      <br />
      <input
        type="color"
        value={penColor}
        onChange={(e) => setPenColor(e.target.value)} // Met à jour la couleur du stylo
      />
      <button onClick={handleClear}>Effacer</button>
      <button onClick={handleSave}>Sauvegarder</button>
      <br />
      <br />
      {signatureDataURL && (
        <div>
          <img src={signatureDataURL} alt="Signature" style={{ maxWidth: '100px' }} />
          <input
            type="text"
            value={signatureDataURL}
            onChange={() => {}}
            style={{ display: 'none' }} // Masque l'input tout en affichant l'image
          />
        </div>
      )}
    </div>
  );
}

export default SignatureComponent;

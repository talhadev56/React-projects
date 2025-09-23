import React, { useRef, useState } from 'react';
import img from '../assets/img.png';

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    const prompt = inputRef.current?.value.trim();
    if (!prompt) return;

    setLoading(true);
    try {
      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer'
          },
          body: JSON.stringify({ prompt, n: 1, size: '512x512' }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error:', errorText);
        alert('Failed to generate image.');
        return;
      }

      const { data } = await response.json();
      setImageUrl(data[0].url);
      if (inputRef.current) inputRef.current.value = '';
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container mx-auto">
        <h2 className="text-center fs-2 mb-3">
          AI IMAGE <span className="fw-bold">GENERATOR</span>
        </h2>

        <div className="position-relative text-center mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <img
            src={imageUrl ?? img}
            alt="AI generated result"
            className="img-fluid rounded img"
          />
          {loading && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="spinner-border text-danger" role="status">
              </div>
            </div>
          )}
        </div>
   
        <div className="rounded-1 p-4 mx-auto bg-secondary" style={{ maxWidth:'600px'}}>
       
          <div className="row g-3 align-items-center  bg-secondary">
            <div className="col-9 bg-secondary">
              <input
                type="text"
                ref={inputRef}
                aria-label="Image prompt"
                placeholder="Describe what you want to see ......"
                className="form-control form-control-lg text-white bg-black input"
                disabled={loading}
              />
            </div>
            <div className="col-3 bg-secondary">
              <button
                onClick={imageGenerator}
                className="btn btn-danger w-100 "
                disabled={loading}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div></div>
    
  );
};

export default ImageGenerator;


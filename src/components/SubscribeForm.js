import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      setIsValidEmail(true);
      console.log(`Subscribing with email: ${email}`);
      alert('Subscribed!');
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="container subscribeFrom">
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
                id="emailInput"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                required
                style={{ maxWidthwidth: '90%' }}
              />
              <div className="input-group-append" style={{ maxWidthwidth: '5%' }}>
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {!isValidEmail && (
            <div style={{ color: 'white', fontSize: '80%' }}>
              Please enter a valid email address.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;

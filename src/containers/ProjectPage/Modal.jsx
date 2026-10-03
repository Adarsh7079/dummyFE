import React, { useState } from 'react';

const Modal = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isVisible) return null;

  const sendEmail = async (e) => {
    e.preventDefault();

    const api_url = 'https://cms.cedarstonerealty.example/api/v2/ppc/lead';
    const api_userPublicKey = 'AqQnvCzVWA1yUyHJxbZCmeFZfo6Ni4KIPA7XpcPPbmL3dFrQX7NSFKJWroUCPUeWOLsZvktjSA==';
    const api_userSecretKey = 'lNCEgw6NLlE5UUq6ojgSPe+2Mlndg8Xv+uUu2Nwk';

    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'public-key': api_userPublicKey,
        'secret-key': api_userSecretKey
      },
      body: JSON.stringify(formData)
    });

    const result = await response.text();

    if (response.ok) {
      alert('Message sent successfully!');
      onClose();
    } else {
      alert('Error sending message: ' + result);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <form className="modal-form" onSubmit={sendEmail}>
          <div className="row">
            <h3>Contact Us</h3>
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <i className="bx bx-user"></i>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name*"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <i className="bx bx-envelope"></i>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email*"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <i className="bx bx-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Your Phone"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <i className="bx bx-file"></i>
                <input
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <input
                  type="submit"
                  className="form-control"
                  style={{ backgroundColor: '#1c3863', color: '#ffffff' }}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

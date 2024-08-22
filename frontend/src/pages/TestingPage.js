import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

const TestingPage = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e, step) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (step < steps.length - 1) {
        next();
      } else {
        message.success('Processing complete!');
      }
    }
  };


  const steps = [
    {
      title: 'Customer Info',
      content: (
        <form
          name='form-p'
          className={`register-form needs-validation ${Object.keys(errors).length ? 'was-validated' : ''}`}
          id='partner-form'
          onSubmit={(e) => handleSubmit(e, current)}
          noValidate
        >
          <div className="row gy-3">
            <div className="col-lg-6">
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="mobile"
                pattern="[1-9]{1}[0-9]{9}"
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                placeholder="Phone-number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>
          </div>
        </form>
      ),
    },
    {
      title: 'Shipping Info',
      content: <div>Enter your shipping address.</div>,
    },
    {
      title: 'Payment',
      content: <div>Complete payment for your order.</div>,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = "Full Name is required";
//     if (!formData.email) errors.email = "Email is required";
//     if (!formData.mobile) errors.mobile = "Phone-number is required";
//     return errors;
//   };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    padding: '20px',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={(e) => handleSubmit(e, current)}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={(e) => handleSubmit(e, current)}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default TestingPage;

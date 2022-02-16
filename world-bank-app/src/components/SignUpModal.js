import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkInputs = () => {
    if (email) {
      if (password !== confirmPassword || password.length < 8) {
        setPasswordError("is-invalid");
        setDisableButton(true);
      } else if (password && confirmPassword) {
        setPasswordError("");
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  };

  useEffect(() => {
    checkInputs();
  });

  const handleSubmit = async () => {
    try {
      let response = await props.postSignup(email, password);
      let json = await response.json();
      if (response.status === 400) {
        throw new Error(json.error);
      } else {
        setSuccess(true);
        setError("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      setSuccess(false);
      setError(error.toString());
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create an Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={passwordError}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
              Password must be more than 8 characters
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              className={passwordError}
              type="password"
              placeholder="Enter password again"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}.
          </div>
        ) : null}
        {success ? (
          <div className="alert alert-success" role="alert">
            Account created successfully
          </div>
        ) : null}
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={disableButton}
        >
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

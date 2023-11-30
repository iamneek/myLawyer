import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>Register</div>
  )
}

export default Register
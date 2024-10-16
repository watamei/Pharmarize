import React, { useState } from 'react';
import './Login.css'; // เราจะสร้าง CSS สำหรับหน้า Login

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // จัดการล็อกอินที่นี่ (เช่นเรียก API)
        console.log('Logging in with', email, password);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="login-input"
                />
                <div className="password-container">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="login-input"
                    />
                    <span className="toggle-password" onClick={togglePasswordVisibility}>
                        {showPassword ? '👁️' : '🙈'}
                    </span>
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
};

export default Login;

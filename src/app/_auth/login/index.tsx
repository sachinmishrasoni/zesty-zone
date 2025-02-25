'use client';
import React from 'react';
import { Button, Input, Form, notification, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { setAuthModalState } from '@/store/features/auth/authSlice';
import AppName from '@/components/common/AppName';
import Icons from '@/icons';
import Image from 'next/image';
// import { ReactComponent as GoogleLogo } from '@/public/svg/google.svg';

// Types for the form's values
interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean; // Added rememberMe
}

interface LoginFormProps {
    onSubmit?: () => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    // Function to navigate to the signup form
    const navigateToSignup = () => {
        dispatch(setAuthModalState({ open: true, type: 'signup' }));
    };

    // Function to handle login form submission
    const handleLogin = async (values: LoginFormValues) => {
        const { email, password, rememberMe } = values;

        // Example login logic (replace this with actual API logic)
        console.log('Logging in with:', { email, password, rememberMe });

        // Simulate a successful login (you can replace this with actual API logic)
        notification.success({ message: 'Logged in successfully!' });

        // Call the passed onSubmit function to handle post-login actions
        if (onSubmit) onSubmit();
    };

    // Function to handle Forgot Password click
    const handleForgotPassword = () => {
        dispatch(setAuthModalState({ open: true, type: 'forgotPassword' }));
    };

    return (
        <div className="login-form">
            <div className='text-center mb-6'>
                <AppName />
                <p className="text-lg text-gray-800">Welcome back to your flavor zone!</p>
            </div>
            <Form
                form={form}
                onFinish={handleLogin}
                layout="vertical"
                initialValues={{ email: '', password: '', rememberMe: false }}
                className='space-y-4'
            >
                {/* Email input */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input prefix={<Icons.Mail size={20} className='text-gray-500' />} size="large" type="email" placeholder="Enter your email" className="!font-geistSans !rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                {/* Password input */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input.Password prefix={<Icons.Lock size={20} className='text-gray-500' />} size="large" placeholder="Enter your password" className="!font-geistSans !rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                {/* Remember Me checkbox */}
                <div className='flex justify-between items-center'>
                    <Form.Item name="rememberMe" valuePropName="checked" className='!mb-0'>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Button
                        type="link"
                        className="!text-yellow-600 !font-bold !p-0 !text-xs"
                        onClick={handleForgotPassword}
                    >
                        Forgot Password?
                    </Button>
                </div>

                {/* Login button */}
                <div className="text-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full !rounded-full !shadow-lg"
                        size="large"
                    >
                        Login
                    </Button>
                </div>
            </Form>

            <div className="flex items-center justify-center my-6 text-gray-600">
                <div className="w-full border-t border-gray-300"></div>
                <span className="absolute px-4 text-sm font-medium bg-white rounded-full">OR</span>
            </div>

            <div className="flex justify-center gap-4">
                <Button shape='round' size='large' icon={<Image src="/svg/google.svg" alt="Google Logo" width={20} height={20} />} />
                <Button shape='round' size='large' icon={<Image src="/svg/facebook.svg" alt="Facebook Logo" width={20} height={20} />} />
            </div>

            {/* Links below the form */}
            <div className="mt-4 text-center">
                <span>Don’t have an account? </span>
                <Button
                    type="link"
                    className="!text-yellow-600 !font-bold !p-0"
                    onClick={navigateToSignup}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;

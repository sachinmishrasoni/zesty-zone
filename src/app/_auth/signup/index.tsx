// components/SignUpForm.tsx
'use client';
import React from 'react';
import { Button, Input, Form, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { setAuthModalState } from '@/store/features/auth/authSlice';
import AppName from '@/components/common/AppName';
import Icons from '@/icons';
import Image from 'next/image';

// Types for the form's values
interface SignUpFormValues {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
}

interface SignUpFormProps {
    onSubmit?: () => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const navigateToLogin = () => {
        dispatch(setAuthModalState({ open: true, type: 'login' }));
    }

    // Handle form submission
    const handleSignUp = async (values: SignUpFormValues) => {
        const { email, password, confirmPassword, fullName } = values;

        // Basic password match validation
        if (password !== confirmPassword) {
            notification.error({ message: 'Passwords do not match' });
            return;
        }

        // Example sign-up logic (you can replace this with actual API logic)
        console.log('Signing up with:', { email, password, fullName });

        // Simulate a successful sign-up (replace with actual API logic)
        notification.success({ message: 'Sign-up successful!' });

        // Call the onSubmit function passed from the parent
        if (onSubmit) onSubmit();
    };

    return (
        <div className="signup-form">
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2> */}
            <div className="text-center mb-6">
                <AppName />
                <p className="text-lg text-gray-800">Create your zesty account!</p>
            </div>

            <Form
                form={form}
                onFinish={handleSignUp}
                layout="vertical"
                initialValues={{ email: '', password: '', confirmPassword: '', fullName: '' }}
                className='space-y-4'
            >
                {/* Full Name */}
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input prefix={<Icons.User size={18} className='text-gray-500' />} placeholder="Enter your full name" size='large' className="!rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                {/* Email */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input prefix={<Icons.Mail size={20} className='text-gray-500' />} type="email" placeholder="Enter your email" size='large' className="!rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input.Password prefix={<Icons.Eye size={20} className='text-gray-500' />} placeholder="Enter your password" size='large' className="!rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                    className='!mb-0 font-semibold'
                >
                    <Input.Password prefix={<Icons.Lock size={20} className='text-gray-500' />} placeholder="Confirm your password" size='large' className="!rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm" />
                </Form.Item>

                <div className="text-center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        size='large'
                        className="w-full !rounded-full !shadow-lg"
                    >
                        Sign Up
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

            <div className="mt-4 text-center">
                <span>Already have an account? </span>
                <Button type='link' className='!text-yellow-600 !font-bold !p-0' onClick={navigateToLogin}>Log In</Button>
            </div>
        </div>
    );
};

export default SignUpForm;

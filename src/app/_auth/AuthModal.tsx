'use client';
import { Modal } from 'antd'
import React from 'react'
import LoginForm from './login';
import SignUpForm from './signup';
import ForgotPassword from './forgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setAuthModalState } from '@/store/features/auth/authSlice';

const AuthModal = () => {
    const dispatch = useDispatch();
    const { open, type } = useSelector((state: RootState) => state.auth.authModal);
    const getFormContent = () => {
        switch(type) {
            case 'login':
                return <LoginForm />
            case 'signup':
                return <SignUpForm />
            case 'forgotPassword':
                return <ForgotPassword />
        }
    }
    // const getTitle = () => {
    //     switch(type) {
    //       case 'login':
    //         return 'Login';
    //       case 'signup':
    //         return 'Sign Up';
    //       case 'forgotPassword':
    //         return 'Forgot Password';
    //       default:
    //         return 'Authentication';
    //     }
    //   };

      const closeModal = () => {
        dispatch(setAuthModalState({ open: false, type: 'login' }));  // Close modal and reset type to 'login'
      };
    return (
        <Modal
            open={open}
            centered
            // title={<h4 className='text-xl font-semibold'>{getTitle()}</h4>}
            footer={null}
            onCancel={closeModal}
        >
            {getFormContent()}
        </Modal>
    )
}

export default AuthModal;
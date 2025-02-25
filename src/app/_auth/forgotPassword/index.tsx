import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useDispatch } from "react-redux";
import { setAuthModalState } from "@/store/features/auth/authSlice";
import AppName from "@/components/common/AppName";
import Icons from "@/icons";

interface ForgotPasswordFormValues {
    email: string;
  }

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);

    const navigateToLogin = () => {
        dispatch(setAuthModalState({ open: true, type: 'login' }));
    };

    const onFinish = (values: ForgotPasswordFormValues) => {
        setLoading(true);

        // Simulate an API request (this would be your backend call)
        setTimeout(() => {
            setLoading(false);

            // Display success notification
            notification.success({
                message: "Password Reset Link Sent",
                description: `If this email is registered, a password reset link will be sent to ${values.email}.`,
                duration: 5,
            });
        }, 2000);
    };

    return (
        <div className="forgot-password-container" >
            {/* <h2>Forgot Password</h2> */}
            <div className="text-center">
                <AppName />
                <p className="text-lg text-gray-800 mt-3">Forgot your password? No worries!</p>
                <p className="text-center text-gray-800 text-sm mb-5">Enter your email to receive a password reset link.</p>
            </div>

            <Form
                name="forgot-password"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    //   label="Email Address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email address!",
                        },
                        {
                            type: "email",
                            message: "The input is not a valid email address!",
                        },
                    ]}
                >
                    <Input
                        prefix={<Icons.Mail size={20} className='text-gray-500' />}
                        placeholder="Enter your email"
                        size="large"
                        className="!rounded-full !bg-gray-100 !border-none !py-3 !shadow-sm"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        loading={loading}
                        className="w-full !rounded-full !shadow-lg"
                    >
                        {loading ? 'Sending...' : "Send Reset Link"}
                    </Button>
                </Form.Item>

                <div className="text-center">
                    <Button type="link" onClick={navigateToLogin} className="!text-yellow-600">
                        Back to Login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ForgotPassword;

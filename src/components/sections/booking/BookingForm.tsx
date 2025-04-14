"use client";
import React, { useState } from 'react';
import { Input, Select, InputNumber, DatePicker, TimePicker, Button, Modal, Form } from 'antd';
import { Dayjs } from 'dayjs';

const { Option } = Select;

const BookingForm = () => {
    const [name] = useState<string>('');
    const [email] = useState<string>('');
    const [phone] = useState<string>('');
    const [guestCount, setGuestCount] = useState<number>(5); // Default value is 5
    const [customGuestCount] = useState<number>(5); // For custom input
    const [selectedDate] = useState<Dayjs | null>(null);
    const [selectedTime] = useState<Dayjs | null>(null);
    const [message] = useState<string>('');
    const [isCustom, setIsCustom] = useState(false); // Track if "Custom" is selected
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleBooking = () => {
        // Handle booking logic
        console.log('Booking confirmed');
        setShowConfirmation(true);
    };

    const handleGuestChange = (value: string) => {
        if (value === 'custom') {
            setIsCustom(true);
            setGuestCount(customGuestCount);
        } else {
            setIsCustom(false);
            setGuestCount(Number(value));
        }
    };

    return (
        <>
            <section className="px-6 py-12 max-w-screen-lg mx-auto">
                <div className="text-center mb-8 space-y-3">
                    <p className="text-yellow-600 text-xs font-bold">Online Reservation</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">Book a Table</h3>
                    <div className="text-gray-600">
                        <p>After booking we will call the customer to confirm,</p>
                        <p>so please enter your name and phone number is required, thank you!</p>
                    </div>
                </div>

                <Form
                    layout='vertical'
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-lightFg !p-3 !rounded-xl shadow-lg"
                >
                    <Form.Item
                        label="Name"
                        className='!mb-0 font-semibold'
                    >
                        <Input
                            placeholder="Enter your name"
                            size='large'
                            className="!rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        className='!mb-0 font-semibold'
                    >
                        <Input
                            placeholder="Enter your email"
                            size='large'
                            className="!rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        className='!mb-0 font-semibold'
                    >
                        <Input
                            placeholder="Enter your phone number"
                            size='large'
                            className="!rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                        />
                    </Form.Item>

                    <div >
                        <p className='text-gray-800 font-semibold'>Number of Guests</p>
                        <div className='flex items-center gap-3'>
                            <Form.Item
                                // label="Number of Guests"
                                className='!mb-0 font-semibold grow'
                            >
                                <Select
                                    defaultValue="5"
                                    size='large'
                                    // className="w-full !rounded-xl !shadow-sm !h-[50px]"
                                    className="!rounded-xl !border-none !bg-gray-50 !h-[50px] !shadow-lg"
                                    style={{ border: 'none' }}
                                    onChange={handleGuestChange}
                                >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="custom">Custom</Option>
                                </Select>
                            </Form.Item>

                            {isCustom && (
                                <Form.Item
                                    // label="Custom Guest Count"
                                    className='!mb-0 font-semibold w-full grow'
                                >
                                    <InputNumber
                                        size='large'
                                        // className="!w-full !rounded-xl !py-1.5 !shadow-sm"
                                        className="!w-full !rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                                        value={customGuestCount}
                                    // onChange={setCustomGuestCount}
                                    />
                                </Form.Item>
                            )}
                        </div>
                    </div>

                    <Form.Item
                        label="Date"
                        className='!mb-0 font-semibold'
                    >
                        <DatePicker
                            size='large'
                            className="!w-full !rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Time"
                        className='!mb-0 font-semibold'
                    >
                        <TimePicker
                            size='large'
                            className="!w-full !rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        className='!mb-0 font-semibold col-span-full'
                    >
                        <Input.TextArea
                            placeholder="Enter your message"
                            size='large'
                            className="!rounded-xl !border-none !bg-gray-50 !py-3 !shadow-lg"
                            rows={5}
                        />
                    </Form.Item>

                    <div className='col-span-full py-3'>
                        <Button
                            type="primary"
                            size='large'
                            className="!w-full !rounded-xl !py-3 !shadow-lg"
                            onClick={handleBooking}
                        >
                            Book Now
                        </Button>
                    </div>
                </Form>

                
            </section>

            {/* Confirmation Modal */}
            <Modal
                centered
                title="Reservation Confirmed"
                open={showConfirmation}
                onOk={() => setShowConfirmation(false)}
                onCancel={() => setShowConfirmation(false)}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setShowConfirmation(false)}>
                        OK
                    </Button>,
                ]}
            >
                <p>Your reservation has been successfully confirmed!</p>
                <p>
                    Name: <strong>{name}</strong>
                </p>
                <p>
                    Email: <strong>{email}</strong>
                </p>
                <p>
                    Phone: <strong>{phone}</strong>
                </p>
                <p>
                    Date: <strong>{selectedDate?.format('MMMM DD, YYYY')}</strong>
                </p>
                <p>
                    Time: <strong>{selectedTime?.format('h:mm A')}</strong>
                </p>
                <p>
                    Guests: <strong>{guestCount}</strong>
                </p>
                <p>Message: {message || 'None'}</p>
                <p>We look forward to seeing you at Zestzone!</p>
            </Modal>
        </>
    );
};

export default BookingForm;

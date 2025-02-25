"use client";
import React, { useState } from "react";
import { DatePicker, TimePicker, InputNumber, Button, Modal } from "antd";
import dayjs, { Dayjs } from "dayjs";
import Container from "@/components/common/container";

const BookTable: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const [guestCount, setGuestCount] = useState<number>(1);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleBooking = () => {
        setShowConfirmation(true);
    };

    return (
        <section className="book-table-section bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 py-14">
            <Container>
                <h4 className="text-2xl font-semibold text-center text-yellow-600 mb-2">Exclusive Reservation</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">Book Your Table Now</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Booking Form */}
                    <div className="space-y-6 bg-white rounded-xl shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div>
                            <label className="block text-gray-700 mb-2 font-semibold">Select Date</label>
                            <DatePicker
                                size="large"
                                className="w-full border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                                onChange={(date) => setSelectedDate(date)}
                                disabledDate={(current) => current && current < dayjs().startOf("day")}
                                placeholder="Select Date"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-semibold">Select Time</label>
                            <TimePicker
                                size="large"
                                className="w-full border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                                use12Hours
                                format="h:mm a"
                                onChange={(time) => setSelectedTime(time)}
                                placeholder="Select Time"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-semibold">Number of Guests</label>
                            <InputNumber
                                size="large"
                                min={1}
                                value={guestCount}
                                onChange={(value) => setGuestCount(value || 1)}
                                className="w-full border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                                placeholder="Number of Guests"
                            />
                        </div>
                        <Button
                            size="large"
                            type="primary"
                            className="w-full bg-yellow-600 hover:bg-yellow-700 py-3 rounded-md text-white text-lg font-semibold transition-all duration-200"
                            onClick={handleBooking}
                            disabled={!selectedDate || !selectedTime || guestCount <= 0}
                        >
                            Confirm Booking
                        </Button>
                    </div>

                    {/* Left Section for Descriptive Text */}
                    <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-center p-8 rounded-xl shadow-xl">
                        <h3 className="text-3xl font-semibold text-white mb-4">Why Book With Us?</h3>
                        <p className="text-white text-lg mb-6">
                            Experience exquisite meals and unparalleled ambiance. Reserve your spot for a memorable dining experience with family and friends.
                        </p>
                        <Button
                            type="link"
                            className="text-white hover:text-yellow-300 text-lg font-semibold"
                            onClick={() => window.location.href = "#menu"} // Can scroll to the menu section or another part
                        >
                            Explore Our Menu
                        </Button>
                    </div>
                </div>
            </Container>

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
                    Date: <strong>{selectedDate?.format("MMMM DD, YYYY")}</strong>
                </p>
                <p>
                    Time: <strong>{selectedTime?.format("h:mm A")}</strong>
                </p>
                <p>
                    Guests: <strong>{guestCount}</strong>
                </p>
                <p>We look forward to seeing you at Zesty Zone!</p>
            </Modal>
        </section>
    );
};

export default BookTable;

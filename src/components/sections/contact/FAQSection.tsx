import React from "react";
import { Collapse, theme } from "antd";
import Container from "@/components/common/container";

// Example FAQ data for a restaurant
const faqData = [
    {
        key: "1",
        label: "What are your restaurant's operating hours?",
        children: (
            <p>
                We are open Monday to Friday from 9:00 AM to 9:00 PM and on weekends from 10:00 AM to 11:00 PM.
            </p>
        ),
    },
    {
        key: "2",
        label: "Do you offer vegan or gluten-free options?",
        children: (
            <p>
                Yes, we have a variety of vegan and gluten-free options on our menu. Please check with our staff for details.
            </p>
        ),
    },
    {
        key: "3",
        label: "How can I make a reservation?",
        children: (
            <p>
                You can make a reservation by calling us at +1 (123) 456-7890 or using our online booking system.
            </p>
        ),
    },
    {
        key: "4",
        label: "Do you provide catering services for events?",
        children: (
            <p>
                Yes, we offer catering services for events of all sizes. Contact us to discuss your requirements.
            </p>
        ),
    },
    {
        key: "5",
        label: "What payment methods do you accept?",
        children: (
            <p>
                We accept all major credit cards, debit cards, and mobile payment options. Cash is also accepted.
            </p>
        ),
    },
    {
        key: "6",
        label: "Is parking available at the restaurant?",
        children: (
            <p>
                Yes, we have a dedicated parking area for our customers. Please check availability during peak hours.
            </p>
        ),
    },
];

// Function to split data into two columns
const splitIntoColumns = (data: typeof faqData) => {
    const midpoint = Math.ceil(data.length / 2);
    return [data.slice(0, midpoint), data.slice(midpoint)];
};

const FAQSection: React.FC = () => {
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
        // marginBottom: 15,
        background: "transparent",
        borderRadius: token.borderRadiusLG,
        // border: "none",
    };

    // Split data into two columns
    const [leftColumn, rightColumn] = splitIntoColumns(faqData);

    return (
        // <section className="py-10">
            <Container className="py-10">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Have questions? We&#39;ve got answers!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                    {/* Left Column */}
                    <div>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={["1"]}
                            style={{ background: "transparent" }}
                            items={leftColumn.map((item) => ({
                                ...item,
                                style: panelStyle,
                            }))}
                        />
                    </div>
                    <div className="w-full h-[1px] bg-gray-300 block md:hidden" />
                    {/* Right Column */}
                    <div>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={["3"]}
                            style={{ background: "transparent" }}
                            items={rightColumn.map((item) => ({
                                ...item,
                                style: panelStyle,
                            }))}
                        />
                    </div>
                </div>
            </Container>
        // </section>
    );
};

export default FAQSection;

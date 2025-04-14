import React from "react";
import { motion } from "framer-motion";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import Container from "@/components/common/container";
import socialLinks from "@/constants/socialLinks";
import contactInfo from "@/constants/contactInfo";

const ContactSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const onFinish = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess("Message sent successfully!");
      form.resetFields(); // Clear form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const hoverEffect = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 15, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
        {/* Left Section */}
        <motion.div
          variants={fadeIn}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-3 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Get in <span className="text-yellow-600">Touch</span> With Us
            </h1>
            <p className="text-gray-600 mt-4">
              We’d love to hear from you! Whether you have a question about reservations, our menu,
              or special events, feel free to reach out.
            </p>
          </motion.div>

          <h3 className="text-lg font-semibold mb-0">Contact Information</h3>
          <div className="space-y-4 mt-3">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center group transition-transform duration-300"
                whileHover="hover"
                animate="rest"
                initial="rest"
              >
                <motion.div
                  variants={hoverEffect}
                  className="p-4 rounded-full shadow-md border border-yellow-200 bg-yellow-100 text-yellow-600"
                >
                  {info.icon({ size: 20, className: "text-yellow-600" })}
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-800">{info.label}</h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-4" />

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="p-4 rounded-full shadow-md border border-yellow-200 bg-yellow-100 text-yellow-600 group hover:shadow-lg transition-transform duration-300"
                >
                  <Link href={link.href}>
                    {link.icon({ size: 20 })}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn}
          className="bg-lightFg p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                placeholder="Your Name"
                size="large"
                className="!bg-gray-100 !border-none"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Your Email"
                size="large"
                className="!bg-gray-100 !border-none"
              />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Your Message"
                size="large"
                className="!bg-gray-100 !border-none"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-700"
              size="large"
            >
              Send Message
            </Button>
            {success && (
              <p className="text-green-500 mt-4 text-center" aria-live="polite">
                {success}
              </p>
            )}
          </Form>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ContactSection;

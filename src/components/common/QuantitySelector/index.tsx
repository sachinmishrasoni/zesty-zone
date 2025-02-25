import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const QuantityAdjuster = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0)); // Prevent negative quantity
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <Tooltip title="Decrease quantity">
        <Button
          type="text"
          shape="circle"
          size="middle"
          icon={<MinusOutlined />}
          aria-label="Decrease quantity"
          onClick={handleDecrement}
        />
      </Tooltip>
      <span className="text-sm font-medium">{quantity}</span>
      <Tooltip title="Increase quantity">
        <Button
          type="text"
          shape="circle"
          size="middle"
          icon={<PlusOutlined />}
          aria-label="Increase quantity"
          onClick={handleIncrement}
        />
      </Tooltip>
    </div>
  );
};

export default QuantityAdjuster;

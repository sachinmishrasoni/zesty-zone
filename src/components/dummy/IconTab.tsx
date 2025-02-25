// components/IconTab.tsx
import { useState, useEffect } from "react";
import { BiCart, BiHeart } from "react-icons/bi";

// Define types for the tabs
interface Tab {
  id: string;
  icon: JSX.Element;
  label: string;
}

const IconTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cart");
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const tabs: Tab[] = [
    { id: "cart", icon: <BiCart className="h-6 w-6" />, label: "Cart" },
    { id: "favorites", icon: <BiHeart className="h-6 w-6" />, label: "Favorites" },
  ];

  // Update indicator position when the active tab changes
  useEffect(() => {
    const activeTabElement = document.getElementById(activeTab);
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative bg-gray-0 border border-yellow-600 rounded-full">
      {/* Tabs container */}
      <div className="flex justify-center rounded-lg">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`relative flex items-center justify-center cursor-pointer w-32 py-2 px-4 rounded-lg transform transition-all duration-300 ${
              activeTab === tab.id
                ? "text-white z-30" // Only the text color will change
                : "text-yellow-600 hover:text-yellow-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* Icon on the left */}
            <div className="flex items-center mr-2">{tab.icon}</div>

            {/* Label on the right */}
            <span className={`text-sm ${activeTab === tab.id ? "font-bold" : "font-semibold"}`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>

      {/* Full-width and full-height indicator */}
      <div
        className="absolute bottom-0 left-0 h-full rounded-full bg-yellow-600 transition-all duration-300 shadow-lg"
        style={{
          width: indicatorStyle.width,
          left: indicatorStyle.left,
        }}
      />
    </div>
  );
};

export default IconTab;

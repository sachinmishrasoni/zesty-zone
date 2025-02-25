import { useState, useLayoutEffect, useRef } from "react";

interface Tab {
  id: string;
  icon?: JSX.Element;
  label?: string;
}

interface IconTabProps {
  tabs: Tab[];
  initialActiveTab?: string;
  onTabChange?: (activeTab: string) => void; // Callback to notify parent of active tab change
  fullWidth?: boolean; // Prop to control full width indicator
  isBordered?: boolean;
}

const CustomTab: React.FC<IconTabProps> = ({
  tabs,
  initialActiveTab = "",
  onTabChange,
  fullWidth = false, // Default to false if not provided
  isBordered = false,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Create refs for each tab
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Update indicator position when the active tab changes or window resizes
  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const activeTabElement = tabRefs.current[activeTab];

      if (!activeTabElement) return;

      const activeTabRect = activeTabElement.getBoundingClientRect();

      // Calculate the relative left position
      let relativeLeft = activeTabRect.left - containerRect.left;

      // If the first tab is active, ensure left is exactly 0
      const isFirstTab = tabs[0].id === activeTab;
      if (isFirstTab) {
        relativeLeft = 0;
      }

      setIndicatorStyle({
        left: relativeLeft,
        width: activeTabRect.width,
      });

      // Notify parent about active tab change
      if (onTabChange) {
        onTabChange(activeTab);
      }
    };

    updateIndicator();

    // Recalculate on window resize
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab, tabs, onTabChange, fullWidth]);


  return (
    <div
      ref={containerRef}
      className={`tabs-container relative bg-gray-0 ${isBordered ? "border border-yellow-600" : ""} rounded-full ${fullWidth ? "w-full" : "inline-block"
        }`} // Apply full width only if fullWidth is true
    >
      {/* Tabs container */}
      <div
        className={`flex rounded-lg ${fullWidth ? "justify-between" : "justify-start" // Adjust flex behavior based on fullWidth
          }`}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            ref={(el: any) => (tabRefs.current[tab.id] = el)}
            className={`relative flex items-center justify-center cursor-pointer py-2 px-4 rounded-lg transform transition-all duration-300 ${activeTab === tab.id
                ? "text-white z-30" // Active tab styles
                : "text-yellow-600 hover:text-yellow-600"
              }`}
            style={{
              // Ensure tabs are evenly distributed if fullWidth is true
              flex: fullWidth ? `1 0 ${100 / tabs.length}%` : "none", // For fullWidth, distribute evenly, otherwise auto
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* Icon on the left */}
            <div className={`flex items-center ${tab.label ? "mr-2" : "px-2"}`}>{tab.icon}</div>

            {/* Label on the right */}
            <span className={`text-sm md:text-sm ${activeTab === tab.id ? "font-bold" : "font-bold"}`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>

      {/* Indicator */}
      <div
        className="absolute bottom-0 left-0 h-full bg-yellow-600 transition-all duration-300 rounded-full"
        style={{
          width: indicatorStyle.width,
          left: indicatorStyle.left,
        }}
      />
    </div>
  );
};

export default CustomTab;

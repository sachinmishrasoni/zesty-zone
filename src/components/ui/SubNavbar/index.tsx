import React, { useRef } from "react";

const SubNavbar: React.FC = () => {
  const chipsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToChip = (index: number): void => {
    if (!chipsContainerRef.current) return;

    const chips = chipsContainerRef.current.querySelectorAll<HTMLButtonElement>(
      ".chip"
    );
    const targetChip = chips[index];
    if (targetChip) {
      const chipOffset = targetChip.offsetLeft;
      const chipWidth = targetChip.offsetWidth;
      const containerWidth = chipsContainerRef.current.offsetWidth;

      // Calculate scroll position to bring chip into view
      const scrollToPosition = chipOffset - containerWidth / 2 + chipWidth / 2;
      chipsContainerRef.current.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-[64px] bg-white shadow-md z-50">
      <div
        ref={chipsContainerRef}
        className="flex overflow-x-auto whitespace-nowrap px-4 py-2 scrollbar-hide"
      >
        {["Chip 1", "Chip 2", "Chip 3", "Chip 4", "Chip 5", "Chip 6", "Chip 7", "Chip 8", "Chip 9", "Chip 10"].map(
          (chip, index) => (
            <button
              key={index}
              className="chip mx-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm whitespace-nowrap"
              onClick={() => scrollToChip(index)}
            >
              {chip}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SubNavbar;

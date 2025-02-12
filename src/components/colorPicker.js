import React from "react";

const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Green", value: "#00FF00" },
  { name: "Black", value: "#000000" },
];

export function ColorPicker({ onSelectColor }) {
  return (
    <div className="flex flex-row md:flex-col gap-4 border-2 p-2 h-24 w-full md:h-full justify-center">
      {colors.map((color) => (
        <div
          key={color.name}
          className="w-16 h-16 rounded-full border-2 p-2"
          style={{
            
            backgroundColor: color.value,
            cursor: "pointer",
          }}
          onClick={() => onSelectColor(color.value)}
        />
      ))}
    </div>
  );
}
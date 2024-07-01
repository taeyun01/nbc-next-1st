"use client";

const CustomButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("안녕하세요!");
        }}
      >
        클릭
      </button>
    </div>
  );
};

export default CustomButton;

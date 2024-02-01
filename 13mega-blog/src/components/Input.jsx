import React, { useId } from "react";

// React provides a feature called "forwarding refs," which allows a component to pass its ref to a child component. This is often used when you want to allow parent components to interact with a specific child component, even if it's not a direct child.
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref} // in needed its reference of it so thats why i give the ref
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

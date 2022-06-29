import React from 'react';

interface ITextInput {
    elementId: string;
    label: string;
}

// Remeber to find out a solution to deal with this bunch of classes
export default function TextInput({ elementId, label, ...rest }:ITextInput) {
  return (
    <div>
      <label
        htmlFor={elementId}
        className="sr-only"
      >
        {label}
      </label>
      <input
        {...rest}
        id={elementId}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
}

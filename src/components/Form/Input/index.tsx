import React, { useEffect, useState } from 'react';

interface ITextInput {
    elementId: string;
    label: string;
    // eslint-disable-next-line react/require-default-props
    roundTop?: boolean;
    // eslint-disable-next-line react/require-default-props
    roundBottom?: boolean;
}

// Remeber to find out a solution to deal with this bunch of classes
export default function TextInput({
  elementId,
  label,
  roundBottom = false,
  roundTop = false,
  ...rest
}:ITextInput) {
  const [rounds, setRounds] = useState('');
  useEffect(() => {
    let addedClasses = '';
    if (roundBottom) {
      addedClasses = `${addedClasses} round-t-md`;
    }
    if (roundTop) {
      addedClasses = `${addedClasses} round-b-md`;
    }
    setRounds(addedClasses);
  }, []);

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
        className={`appearance-none rounded-none relative ${rounds} block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
      />
    </div>
  );
}
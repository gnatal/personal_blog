import React from 'react';

export default function Checkbox() {
  return (
    <div className="flex items-center">
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
    </div>
  );
}

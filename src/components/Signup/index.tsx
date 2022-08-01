import React from 'react';
import SignupHeader from './SignupHeader';
import LockIcon from '../Icons/LockIcons';
import TextInput from '../Form/Input';
import PrivacyPolicy from './PrivacyPolicy';

const emailInputs = {
  name: 'email',
  type: 'email',
  autoComplete: 'email',
  required: true,
  placeholder: 'email',
};

const passwordInputs = {
  name: 'password',
  type: 'password',
  autoComplete: true,
  required: true,
  placeholder: 'password',
};

const passwordConfirmInputs = {
  name: 'confirmPassword',
  type: 'password',
  autoComplete: true,
  required: true,
  placeholder: 'confirm password',
};

export default function Signup() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignupHeader />
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput label="Email address" elementId="email-address" {...emailInputs} roundBottom={false} roundTop />
            <TextInput label="Password" elementId="password" {...passwordInputs} roundBottom={false} roundTop={false} />
            <TextInput label="Confirm password" elementId="password" {...passwordConfirmInputs} roundBottom roundTop={false} />
          </div>
          <PrivacyPolicy />

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <LockIcon />
              Sign up
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

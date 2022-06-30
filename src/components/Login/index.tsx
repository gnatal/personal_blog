import React from 'react';
import LockIcon from '../Icons/LockIcons';
import Checkbox from '../Form/Checkbox';
import TextInput from '../Form/Input';
import LoginHeader from './LoginHeader';

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

export default function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <LoginHeader />
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput label="Email address" elementId="email-address" {...emailInputs} roundBottom={false} roundTop />
            <TextInput label="Password" elementId="password" {...passwordInputs} roundBottom roundTop={false} />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox label="Remember-me" elementId="remember" />

            <div className="text-sm">
              <a href="!#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <LockIcon />
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

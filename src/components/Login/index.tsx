import React from 'react';
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
            <TextInput label="Email address" elementId="email-address" {...emailInputs} />
            <TextInput label="Password" elementId="password" {...passwordInputs} />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox />

            <div className="text-sm">
              <a href="!#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-teal-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

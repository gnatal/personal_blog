import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SignupHeader from './SignupHeader';
import LockIcon from '../Icons/LockIcons';
import TextInput from '../Form/Input';
import PrivacyPolicy from './PrivacyPolicy';

interface SignupInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const emailInputs = {
  name: 'email',
  type: 'email',
  placeholder: 'email',
};

const passwordInputs = {
  name: 'password',
  type: 'password',
  placeholder: 'password',
};

const passwordConfirmInputs = {
  name: 'confirmPassword',
  type: 'password',
  placeholder: 'confirm password',
};

export default function Signup() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<SignupInputs>();

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignupHeader />
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              label="Email address"
              elementId="email-address"
              {...emailInputs}
              roundBottom={false}
              roundTop
              register={register}
              name="email"
              validation={{}}
              errors={errors}
            />
            <TextInput
              label="Password"
              elementId="password"
              {...passwordInputs}
              register={register}
              name="password"
              roundBottom={false}
              roundTop={false}
              validation={{}}
              errors={errors}
            />
            <TextInput
              label="Password"
              elementId="password"
              {...passwordConfirmInputs}
              register={register}
              name="confirmPassword"
              roundBottom
              roundTop={false}
              validation={{}}
              errors={errors}
            />
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

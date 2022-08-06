import type { FormEvent } from 'react';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import LockIcon from '../Icons/LockIcons';
import Checkbox from '../Form/Checkbox';
import TextInput from '../Form/Input';
import LoginHeader from './LoginHeader';

interface LoginInputs {
  email: string;
  password: string;
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

const emailValidation = { required: true };
const passwordValidation = { required: true, minLength: 8 };

export default function Login() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit:SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <LoginHeader />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              label="Email address"
              elementId="email-address"
              register={register}
              {...emailInputs}
              errors={errors}
              validation={emailValidation}
              roundBottom={false}
              roundTop
            />
            <TextInput
              label="Password"
              elementId="password"
              register={register}
              {...passwordInputs}
              errors={errors}
              roundBottom
              validation={passwordValidation}
              roundTop={false}
            />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox label="Remember-me" elementId="remember" />

            <div className="text-sm">
              <a href="!#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" data-testid="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <LockIcon />
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 char long'),
  email: yup.string()
    .matches(/^\s+|\s+$/g, 'Emails cannot have any spaces')
    .required('Email is required'),
});

const singupSchema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 char long'),
  email: yup.string()
    .required('Email is required'),
  confirm_password: yup.string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords dont match'),
});

export default {
  loginSchema,
  singupSchema,
};

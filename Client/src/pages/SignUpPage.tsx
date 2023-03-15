import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '~/components/Button'
import FormGroup from '~/components/common/FormGroup'
import { Input } from '~/components/Input'
import { Label } from '~/components/Lable'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useToggleValue from '~/hooks/useToggleValue'
import LayoutAuthentication from '~/layout/LayoutAuthentication'
import Checkbox from '~/components/Checkbox/Checkbox'
import IconEyeToggle from '~/components/icons/IconEyeToggle'

const schema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email address').required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password must be 8 character ')
})

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } = useToggleValue()
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue()
  const handleSignUp = async (values: any) => {
    try {
      // dispatch(authRegister({ ...values, permissions: [] }));
      console.log(values)
      reset({})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <LayoutAuthentication heading='Sign Up'>
      <p className='text-center font-normal lg:text-sm text-xs lg:font-medium mb-6 lg:mb-8'>
        Already have an account ?{' '}
        <Link to={'/sign-in'} className='text-primary font-medium'>
          Sign in
        </Link>
      </p>
      <button className='flex items-center justify-center gap-x-3 w-full py-3 rounded-xl border border-strock text-text2 font-semibold mb-5'>
        <img srcSet='/icon-google.png  2x' alt='icon-google' />
        <span className=''>Singn up with google</span>
      </button>
      <p className='text-center font-normal text-xs mb-4 lg:text-sm lg:mb-8 text-text2'>Or sign up with email</p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor='name'>Full Name *</Label>
          <Input control={control} name='name' placeholder='Jhon Doe' error={errors.name?.message?.toString()}></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email *</Label>
          <Input
            control={control}
            name='email'
            type='email'
            placeholder='example@gmail.com'
            error={errors.email?.message?.toString()}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password *</Label>
          <Input
            control={control}
            name='password'
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder='Create a password'
            error={errors.password?.message?.toString()}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className='flex items-start mb-5 gap-x-5'>
          <Checkbox name='term' checked={acceptTerm} onClick={handleToggleTerm}>
            <p className='flex-1 text-xs lg:text-sm text-text2 dark:text-text3'>
              I agree to the
              <span className='underline text-secondary'> Terms of Use</span> and have read and understand the
              <span className='underline text-secondary'> Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button className='w-full' kind='primary' type='submit'>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default SignUpPage

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { Button, ButtonGoogle } from '~/components/Button'
import FormGroup from '~/components/common/FormGroup'
import IconEyeToggle from '~/components/icons/IconEyeToggle'
import { Input } from '~/components/Input'
import { Label } from '~/components/Lable'
import useToggleValue from '~/hooks/useToggleValue'
import LayoutAuthentication from '~/layout/LayoutAuthentication'

const schema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password must be 8 character ')
})
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue()

  const handleSignIn = (values: any) => {}
  return (
    <LayoutAuthentication heading='Welcome Back!'>
      <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
        Dont have an account?{' '}
        <Link to='/register' className='font-medium underline text-primary'>
          Sign up
        </Link>
      </p>
      <ButtonGoogle text='Sign in with google'></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor='email'>Email *</Label>
          <Input
            control={control}
            name='email'
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
            placeholder='Enter Password'
            error={errors.password?.message?.toString()}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className='text-right'>
            <span className='inline-block text-sm font-medium text-primary'>Forgot password</span>
          </div>
        </FormGroup>
        <Button className='w-full' kind='primary' type='submit'>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default SignInPage

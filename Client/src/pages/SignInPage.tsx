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
  email: yup.string().email('Email không hợp lệ').required('Vui lòng điền vào mục này.'),
  password: yup.string().required('Vui lòng điền vào mục này.').min(8, 'Mật khẩu phải từ 8 ký tự')
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
    <LayoutAuthentication heading='Đăng Nhập'>
      <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
        Bạn chưa có tài khoản?{' '}
        <Link to='/register' className='font-medium underline text-primary'>
          Đăng ký
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
          <Label htmlFor='password'>Mật khẩu *</Label>
          <Input
            control={control}
            name='password'
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder='Nhập mật khẩu'
            error={errors.password?.message?.toString()}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className='text-right'>
            <span className='inline-block text-sm font-medium text-primary'>Quyên mật khẩu</span>
          </div>
        </FormGroup>
        <Button className='w-full' kind='primary' type='submit'>
          Đăng nhập
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default SignInPage

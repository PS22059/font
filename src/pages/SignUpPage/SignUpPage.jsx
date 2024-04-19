// import React from 'react'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
// import InputForm from '../../components/InputForm/InputForm'
// import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
// import imageLogo from '../../assets/images/logo-login.png'
// import { Image } from 'antd'
// import { useState } from 'react'
// import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
// import { useNavigate } from 'react-router-dom'
// import * as UserService from '../../services/UserService'
// import { useMutationHooks } from '../../hooks/useMutationHook'
// import Loading from '../../components/LoadingComponent/Loading'
// import * as message from '../../components/Message/Message'
// import { useEffect } from 'react'

// const SignUpPage = () => {
//   const navigate = useNavigate()

//   const [isShowPassword, setIsShowPassword] = useState(false)
//   const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleOnchangeUsername = (value) => {
//     setUsername(value)
//   }

//   const mutation = useMutationHooks(
//     data => UserService.signupUser(data)
//   )

//   const { data, isLoading, isSuccess, isError } = mutation

//   useEffect(() => {
//     if (isSuccess) {
//       message.success()
//       handleNavigateSignIn()
//     } else if (isError) {
//       message.error()
//     }
//   }, [isSuccess, isError])

//   const handleOnchangePassword = (value) => {
//     setPassword(value)
//   }

//   const handleOnchangeConfirmPassword = (value) => {
//     setConfirmPassword(value)
//   }

//   const handleNavigateSignIn = () => {
//     navigate('/sign-in')
//   }

//   const handleSignUp = () => {
//     mutation.mutate({ username, password, confirmPassword })
//   }

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
//       <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
//         <WrapperContainerLeft>
//           <h1>Xin chào</h1>
//           <p>Đăng nhập vào tạo tài khoản</p>
//           <InputForm style={{ marginBottom: '10px' }} placeholder="username" value={username} onChange={handleOnchangeUsername} />
//           <div style={{ position: 'relative' }}>
//             <span
//               onClick={() => setIsShowPassword(!isShowPassword)}
//               style={{
//                 zIndex: 10,
//                 position: 'absolute',
//                 top: '4px',
//                 right: '8px'
//               }}
//             >{
//                 isShowPassword ? (
//                   <EyeFilled />
//                 ) : (
//                   <EyeInvisibleFilled />
//                 )
//               }
//             </span>
//             <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}
//               value={password} onChange={handleOnchangePassword} />
//           </div>
//           <div style={{ position: 'relative' }}>
//             <span
//               onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
//               style={{
//                 zIndex: 10,
//                 position: 'absolute',
//                 top: '4px',
//                 right: '8px'
//               }}
//             >{
//                 isShowConfirmPassword ? (
//                   <EyeFilled />
//                 ) : (
//                   <EyeInvisibleFilled />
//                 )
//               }
//             </span>
//             <InputForm placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}
//               value={confirmPassword} onChange={handleOnchangeConfirmPassword}
//             />
//           </div>
//           {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
//           <Loading isLoading={isLoading}>
//             <ButtonComponent
//               disabled={!username.length || !password.length || !confirmPassword.length}
//               onClick={handleSignUp}
//               size={40}
//               styleButton={{
//                 background: 'rgb(255, 57, 69)',
//                 height: '48px',
//                 width: '100%',
//                 border: 'none',
//                 borderRadius: '4px',
//                 margin: '26px 0 10px'
//               }}
//               textbutton={'Đăng ký'}
//               styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
//             ></ButtonComponent>
//           </Loading>
//           <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
//         </WrapperContainerLeft>
//         <WrapperContainerRight>
//           <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
//           <h4>Mua sắm tại LTTD</h4>
//         </WrapperContainerRight>
//       </div>
//     </div >
//   )
// }

// export default SignUpPage

// test
import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { useState } from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { useEffect } from 'react'
import './SignUpPage.css'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleOnchangeName = (value) => {
    setName(value)
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleOnchangePhone = (value) => {
    setPhone(value)
  }

  const handleOnchangeAddress = (value) => {
    setAddress(value)
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess && data?.status === 'OK') {
      console.log('isSuccess', isSuccess)
      message.success("Đăng ký thành công");
      handleNavigateSignIn()
    } else if (isError) {
      message.error("Đăng ký thất bại")
    }
  }, [isSuccess, isError])


  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

  // const handleSignUp = () => {
  //   mutation.mutate({ name, email, password, confirmPassword, phone, address })

  // }
  const handleSignUp = async () => {
    try {
      await mutation.mutate({ name, email, password, confirmPassword, phone, address });
    } catch (error) {
      console.error("Đăng ký thất bại:", error);
      // Xử lý lỗi một cách thích hợp, ví dụ: hiển thị thông báo lỗi cho người dùng
      message.error("Đăng ký thất bại");
    }
  };
  

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <div className='signUpPage'>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="Name" value={name} onChange={handleOnchangeName} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}
              value={password} onChange={handleOnchangePassword} />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>
          <InputForm style={{ marginBottom: '10px' }} placeholder="Phone" value={phone} onChange={handleOnchangePhone} />
          <InputForm style={{ marginBottom: '10px' }} placeholder="Address" value={address} onChange={handleOnchangeAddress} />

          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
              size={40}
              styleButton={{
                background: '#4169E1',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textbutton={'Đăng ký'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
          </Loading>
          <p style={{color: '#000'}}>Bạn đã có tài khoản? <div className='handleNavigateSignIn' onClick={handleNavigateSignIn}> Đăng nhập</div></p>
        </div>
      </div>
    </div >
  )
}

export default SignUpPage
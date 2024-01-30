import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../utils/postgraphile';
import { atom, useAtom } from 'jotai';
import { BackGroundDesign } from '../header/BackGround';

export const currentUserAtom = atom({
  name: '',
  address: '',
  email: '',
  phone: '',
  image: '',
  history: '',
  loginMessage: '',
  load: false,
});
const Login = () => {
  if (localStorage.getItem('TOKEN')) {
    return <Navigate replace to={'/categories'} />;
  }
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const [loginFunction, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleSignIn = async () => {
    try {
      setCurrentUser({ ...currentUser, load: true });
      const result = await loginFunction({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      if (result.errors || !result.data || !result.data.login) {
        console.error('Authentication failed:', result.errors);
        setCurrentUser({
          ...currentUser,
          loginMessage: 'An error occurred during login.',
          load: false,
        });
        setLoginMessage('An error occurred during login.');
      } else if (result.data.login.loginResponse.jwtToken) {
        localStorage.setItem('TOKEN', result.data.login.loginResponse.jwtToken);
        const user = result.data.login.loginResponse.userDetails;
        setCurrentUser({
          name: user.name,
          address: user.address,
          email: user.email,
          phone: user.phone,
          image: user.image,
          history: user.history,
          loginMessage: 'maze?',
          load: false,
        });

        navigate('/categories');
      } else {
        const errorMessage =
          result.data.login.errors[0]?.message || 'Invalid email or password';
        console.error('Authentication failed:', errorMessage);
        setCurrentUser({
          ...currentUser,
          loginMessage: errorMessage,
          load: false,
        });
        setLoginMessage(errorMessage);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setLoginMessage('An error occurred during login.');
      setCurrentUser({
        ...currentUser,
        loginMessage: 'An error occurred during login.',
        load: false,
      });
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      <BackGroundDesign />
      <div className={styles.containerWrapper}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-40"
            src="https://media.discordapp.net/attachments/1194572187449958453/1201878341590982676/184572590-repairman-with-wrench-logo-emblem-for-service-repair-funny-mechanic-technician-cartoon-character.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            כניסה לחשבון
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                דוא"ל
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  סיסמא
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    ?שכחת סיסמא
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  setLoad(true);

                  handleSignIn();
                }}
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  load ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ pointerEvents: load ? 'none' : 'auto' }}
              >
                {load ? '...כבר מכניסים אותך' : 'היכנס'}
              </div>
            </div>
            {loginMessage && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">{loginMessage}</strong>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={() => {
                      setLoginMessage('');
                    }}
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}{' '}
            {load && (
              <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg
                  className="w-16 h-16 animate-spin text-gray-900/50"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-900"
                  ></path>
                </svg>
              </div>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <button
              onClick={() => navigate('/signup')}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              הירשם
            </button>
            ?אין לך חשבון{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

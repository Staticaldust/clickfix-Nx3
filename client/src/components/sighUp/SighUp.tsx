import { ChangeEvent, useState } from 'react';
import styles from './SighUp.module.css';
import { useNavigate } from 'react-router-dom';
import { trpc } from '../../utils/trpc';

// const result = trpc.createUser.mutate({
//   name: '',
//   address: '',
//   email: '',
//   password: '',
//   phone: '',
//   image: '',
//   history: [],
// });
interface SignUpType {
  name: string | undefined;
  address: string | undefined;
  email: string | undefined;
  password: string | undefined;
  phone: string | undefined;
  image: string | undefined;
  history: number[] | undefined;
}

export function SighUp() {
  const [details, setDetails] = useState<SignUpType>({
    name: '',
    address: '',
    email: '',
    password: '',
    phone: '',
    image: '',
    history: [],
  });

  const navigate = useNavigate();

  const handelChange = (field: keyof SignUpType, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  // const handelChange = (e) => {
  //   setDetails((prev)=> ...prev, [e.target.name]: e.target.value  );
  // };

  console.log(details.name);

  return (
    <div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-40"
            src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin2203/sergeypykhonin220300085/184572590-repairman-with-wrench-logo-emblem-for-service-repair-funny-mechanic-technician-cartoon-character.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            הרשמה
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                שם מלא
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  value={details.name}
                  onChange={(e) => handelChange('name', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                כתובת
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="address"
                  autoComplete="address"
                  required
                  value={details.address}
                  onChange={(e) => handelChange('address', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                דוא"ל{' '}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={details.email}
                  onChange={(e) => handelChange('email', e.target.value)}
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
                  סיסמה
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={details.password}
                  onChange={(e) => handelChange('password', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                טלפון
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  value={details.phone}
                  onChange={(e) => handelChange('phone', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="client"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                קישור תמונה
              </label>
              <div className="mt-2">
                <input
                  id="client"
                  name="client"
                  type="client"
                  autoComplete="client"
                  required
                  value={details.image}
                  onChange={(e) => handelChange('image', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => navigate('/login')}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                הרשם
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SighUp;

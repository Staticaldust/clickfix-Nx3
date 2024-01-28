import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { currentUserAtom } from '../login/Login';
export function MyAvatar() {
  const [user] = useAtom(currentUserAtom);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="inline-flex">
        <img
          className="w-12 h-12 rounded-full"
          src={user.image}
          alt="Profile"
        />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <div className="px-1 py-1">
            {/* Menu items */}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => {
                    localStorage.removeItem('TOKEN');
                    navigate('/login');
                  }}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => {
                    navigate('/editprofile');
                  }}
                >
                  הפרופיל שלך
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">{/* Menu items */}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

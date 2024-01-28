import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../components/home/HomePage';
import SignUp from '../components/sighUp/SighUp';
import Login from '../components/login/Login';
import Cards from '../components/cards/Cards';
import Categories from '../components/categories/Categories';
import Layout from '../components/layout/Layout';
import Status from '../components/status/Status';
import { Reviews } from '../components/reviews/Reviews';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import { MyAvatar } from '../components/header/Avatar';
import { EditProfile } from '../components/editProfile/EditProfile';

const RouterDom: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/status" element={<Status />} />
        <Route path="/avatar" element={<MyAvatar />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default RouterDom;

{
  /* <Route path="/" element={<Layout />}>
</Route> */
}

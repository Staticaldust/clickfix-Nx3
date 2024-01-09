import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../components/home/HomePage';
import { User } from '../components/User';
import SignUp from '../components/sighUp/SighUp';
import Login from '../components/login/Login';
import Cards from '../components/cards/Cards';
import Categories from '../components/categories/Categories';
import ImageCard from '../components/imageCard/ImageCard';
// import Layout from '../components/layout/Layout';
const RouterDom: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/user" element={<User />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/img" element={<ImageCard />} />
    </Routes>
  );
};

export default RouterDom;

{
  /* <Route path="/" element={<Layout />}>
</Route> */
}

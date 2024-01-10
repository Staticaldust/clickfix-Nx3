import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../components/home/HomePage';
import { User } from '../components/User';
import SignUp from '../components/sighUp/SighUp';
import Login from '../components/login/Login';
import Cards from '../components/cards/Cards';
import Categories from '../components/categories/Categories';
// import { Tps } from '../components/Tps';
import { Tp } from '../components/Tp';
// import Layout from '../components/layout/Layout';
const RouterDom: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/user" element={<User />} />
      {/* <Route path="/tps" element={<Tps />} /> */}
      <Route path="/tp" element={<Tp />} />
    </Routes>
  );
};

export default RouterDom;

{
  /* <Route path="/" element={<Layout />}>
</Route> */
}

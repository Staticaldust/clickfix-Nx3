import { Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../components/home/HomePage';
import SignUp from '../components/sighUp/SighUp';
import Login from '../components/login/Login';
import Cards from '../components/cards/Cards';
import Categories from '../components/categories/Categories';
import { Tp } from '../components/Tp';
import Layout from '../components/layout/Layout';

const RouterDom: React.FC = () => {
  return (
    // <Routes>
    //   <Route index element={<HomePage />} />
    //   <Route path="/layout" element={<Layout />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/categories" element={<Categories />} />
    //   <Route path="/cards" element={<Cards />} />
    //   <Route path="/tp" element={<Tp />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/tp" element={<Tp />} />
      </Route>
    </Routes>
  );
};

export default RouterDom;

{
  /* <Route path="/" element={<Layout />}>
</Route> */
}

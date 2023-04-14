import React, {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
// own modules
import Header from "../../components/header/Header";
import {createPath} from "../../utilits/createPath";
import {ROUTE} from "../../router/routes";
// styles
import styles from "./index.module.css";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(createPath({path: ROUTE.AUTHORIZATION}))
    }
  }, [location, navigate])

  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Outlet/>
      </div>
    </>
  );
};

export default Index;
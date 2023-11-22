import React, { FC, useEffect } from "react";

import useSessionStorage from "../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/constant";

import { useCookies } from "react-cookie";
const Refreshed: FC = () => {
  const [, setRefreshToken] = useSessionStorage<string | null>("__token", null);
  const navigate = useNavigate();
  const [cookies] = useCookies();
  useEffect(() => {
    if (cookies.token && cookies.user && cookies.exp) {
      window.sessionStorage.setItem("expireTime", JSON.stringify(cookies.exp));
      window.sessionStorage.setItem("userInfo", JSON.stringify(cookies.user));
      setRefreshToken(cookies.token);
      navigate(ROUTES.home);
    } else {
      navigate(ROUTES.login);
    }
  }, [cookies, navigate, setRefreshToken]);
  return <></>;
};

export default Refreshed;

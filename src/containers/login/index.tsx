import { FC, useCallback } from "react";
import { Button, Form, Input, Spin } from "antd";
import IcLogoGoogle from "../../assets/images/icons/ic_logo_google.svg";
import IcLogoMicrosoft from "../../assets/images/icons/ic_logo_microsoft.svg";
import IcLogoGithub from "../../assets/images/icons/ic_logo_github.svg";
import IcLogoApple from "../../assets/images/icons/ic_logo_apple.svg";
import IcLogoPasskey from "../../assets/images/icons/ic_logo_passkey.svg";
import { useSelector } from "react-redux";

import useSessionStorage from "../../hooks/useSessionStorage";
import { FormLoginProps } from "../../api/auth/auth.interface";
import { actions, TStore } from "../../store";
import { useAppDispatch } from "../../hooks/storeHook";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/constant";
import ReCAPTCHA from "react-google-recaptcha";
const Login: FC = () => {
  const loading = useSelector((state: TStore) => state.auth.loading);
  const navigate = useNavigate();
  const [, setRefreshToken] = useSessionStorage<string | null>("__token", null);
  const dispatch = useAppDispatch();

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const onFinish = useCallback(
    (values: FormLoginProps) => {
      dispatch(
        actions.auth.loginAction({
          loginInfo: values,
          setRefreshToken,
        })
      );
    },
    [dispatch, setRefreshToken]
  );

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const navigateLink = useCallback(() => {
    navigate(ROUTES.register);
  }, [navigate]);

  const navigateAuthGoogle = useCallback(() => {
    window.open("http://localhost:8080/api/v1/auth/google", "_self");
  }, []);

  const onChangeCaptcha = useCallback(() => {
    console.log("test");
  }, []);
  console.log(process.env.SITE_KEY, "process.env.SITE_KEY");
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-[100vh]">
          <Spin />
        </div>
      )}
      {!loading && (
        <div className="flex justify-center">
          <div className="flex max-w-xs m-20 justify-center flex-col gap-[0.65rem] w-full">
            <Form
              className="flex justify-center flex-col"
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                className="max-w-full bg-[#f6f4f2]"
              >
                <Input
                  className=" px-[0.75rem] py-[0.5rem] h-10"
                  placeholder="Enter your email..."
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className="max-w-full bg-[#f6f4f2]"
              >
                <Input.Password
                  className="px-[0.75rem] py-[0.5rem] h-10"
                  placeholder="Enter your password..."
                />
              </Form.Item>
              <ReCAPTCHA
                sitekey={`6LcEIRgpAAAAAB9b3ifL3AujJxFOUJP9N_0qqnfS`}
                onChange={onChangeCaptcha}
              />
              ,
              <Button
                className="flex justify-center items-center px-[0.75rem] py-[0.5rem] bg-[#474645] text-white h-10"
                htmlType="submit"
              >
                Sign in
              </Button>
            </Form>

            <span className="flex justify-center items-center text-[#666] text-xs my-2">
              OR
            </span>
            <Button
              className="flex justify-center items-center px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => navigateLink()}
            >
              Register
            </Button>
            <Button
              className="flex justify-center items-center shadow-3xl border-1 border-[#d8d6d4] border-solid px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => navigateAuthGoogle()}
            >
              <img className="mr-[0.75rem]" src={IcLogoGoogle} alt="" />
              <span className="text-sm">Sign in with Google</span>
            </Button>
            <Button
              className="flex justify-center items-center shadow-3xl border-1 border-[#d8d6d4] border-solid px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => null}
            >
              <img className="mr-[0.75rem]" src={IcLogoMicrosoft} alt="" />
              <span className="text-sm">Sign in with Microsoft</span>
            </Button>
            <Button
              className="flex justify-center items-center shadow-3xl border-1 border-[#d8d6d4] border-solid px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => null}
            >
              <img className="mr-[0.75rem]" src={IcLogoGithub} alt="" />
              <span className="text-sm">Sign in with Github</span>
            </Button>
            <Button
              className="flex justify-center items-center shadow-3xl border-1 border-[#d8d6d4] border-solid px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => null}
            >
              <img className="mr-[0.75rem]" src={IcLogoApple} alt="" />
              <span className="text-sm">Sign in with Apple</span>
            </Button>
            <Button
              className="flex justify-center items-center shadow-3xl border-1 border-[#d8d6d4] border-solid px-[0.75rem] py-[0.5rem] h-10"
              onClick={() => null}
            >
              <img className="mr-[0.75rem]" src={IcLogoPasskey} alt="" />
              <span className="text-sm">Sign in with a passkey</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

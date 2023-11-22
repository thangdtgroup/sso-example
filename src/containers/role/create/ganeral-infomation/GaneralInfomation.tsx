import { Form, Input } from "antd";
import { FC } from "react";

type FieldType = {
  roleName?: string;
  slug?: string;
  description?: string;
  content?: string;
};
interface Props {}
const GaneralInfomation: FC<Props> = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-600 pt-1">*</span>
        <p>Role name</p>
      </div>
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
          name="roleName"
          rules={[{ required: true, message: "Please input your role name!" }]}
          className="max-w-full "
        >
          <Input
            className=" px-[0.75rem] py-[0.5rem] h-10"
            placeholder="Enter your role name..."
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default GaneralInfomation;

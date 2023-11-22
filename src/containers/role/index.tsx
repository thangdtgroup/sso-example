import { Button } from "antd";
import TableRole from "./table/TableRole";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
const Role = () => {
  const navigate = useNavigate();
  const navigateCreateScreen = useCallback(() => {
    navigate("create");
  }, [navigate]);
  return (
    <div>
      <Button
        className="bg-[#1677ff] selection:hover:bg-[#4096ff] "
        htmlType="button"
        onClick={navigateCreateScreen}
      >
        <div className="flex gap-2">
          <PlusOutlined className="text-white" />
          <span className="text-white"> New Role</span>
        </div>
      </Button>
      <div className="mt-5">
        <TableRole />
      </div>
    </div>
  );
};

export default Role;

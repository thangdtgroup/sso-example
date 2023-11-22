import { FC } from "react";
import FeaturePermission from "./feature-permission/FeaturePermission";
import GaneralInfomation from "./ganeral-infomation/GaneralInfomation";

interface Props {}
const CreateRole: FC<Props> = () => {
  return (
    <div>
      <p className="text-[#334155] text-lg font-semibold mb-4">Add new role</p>
      <GaneralInfomation />
      <FeaturePermission />
    </div>
  );
};

export default CreateRole;

import { Table } from "antd";
import { FC } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

interface Props {
  data?: any;
}
const TableRole: FC<Props> = ({ data }) => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
    },
    {
      key: "2",
      name: "John",
    },
  ];

  const columns = [
    {
      title: "Role name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      sortIcon: (check: any) => {
        if (check.sortOrder === "ascend") {
          return <ArrowDownOutlined className="cursor-pointer" />;
        }
        return <ArrowUpOutlined className="cursor-pointer" />;
      },
      render: (_: any, record: { key: string; name: string }) => {
        console.log(record, "record");
        return (
          <>
            <div className="flex gap-5">
              <p className="">{record.name}</p>
            </div>
          </>
        );
      },
    },
    {
      title: "Options",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: { key: React.Key }) => {
        return (
          <>
            <div className="flex gap-5">
              <DeleteOutlined className="cursor-pointer" />
              <EditOutlined className="cursor-pointer" />
            </div>
          </>
        );
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default TableRole;

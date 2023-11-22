import { FC } from "react";

interface Props {}
const FeaturePermission: FC<Props> = () => {
  const data = [
    {
      featureName: "Bulk PDF Export",
      capabilities: [
        {
          name: "View(Global)",
          check: true,
        },
      ],
    },
    {
      featureName: "Contracts",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Credit Notes",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Customers",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Email Templates",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Estimates",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Expenses",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Items",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
    {
      featureName: "Knowledge Base",
      capabilities: [
        {
          name: "View (Own)",
          check: true,
        },
        {
          name: "View(Global)",
          check: false,
        },
        {
          name: "Create",
          check: false,
        },
        {
          name: "Edit",
          check: false,
        },
        {
          name: "Delete",
          check: false,
        },
        {
          name: "View All Templates",
          check: false,
        },
      ],
    },
  ];
  const styleCommon = "border-[1px] border-solid border-[#dddddd] p-[8px]";
  return (
    <>
      <table className="w-full border-collapse">
        <tr>
          <th className={styleCommon}>Features</th>
          <th className={styleCommon}>Capabilities</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td className={styleCommon}>{item.featureName}</td>
              <td className={`${styleCommon} flex items-center gap-2`}>
                {item.capabilities.map((i) => {
                  return (
                    <>
                      <input type={"checkbox"} />
                      <p>{i.name}</p>
                    </>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default FeaturePermission;

import React, { useState } from "react";
import cn from "classnames";

const tabpanels = [
  {
    key: 1,
    text: "트렌딩",
  },
  {
    key: 2,
    text: "컬렉션",
  },
  {
    key: 3,
    text: "게임",
  },
  {
    key: 4,
    text: "예술",
  },
  {
    key: 5,
    text: "스포츠",
  },
  {
    key: 6,
    text: "Etc",
  },
];

const TabPanel = () => {
  const [active, setActive] = useState(1);

  const handleActive = (key) => setActive(key);

  return (
    <div className="tab-menu">
      {tabpanels.map((it) => {
        return (
          <span
            onClick={() => handleActive(it.key)}
            className={cn("tab-menu__item", { active: active === it.key })}
            key={it.key}
          >
            {it.text}
          </span>
        );
      })}
    </div>
  );
};

export default TabPanel;

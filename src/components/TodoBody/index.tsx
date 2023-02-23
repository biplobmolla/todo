import { Checkbox, Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";

const CheckboxGroup = Checkbox.Group;

// const plainOptions = [
//   "Apple",
//   "Pear",
//   "Orange",
//   "Banana",
//   "Apple2",
//   "Pear3",
//   "Orange4",
//   "Banana5",
// ];

function TodoBody({ plainOptions }: any) {
  const [done, setDone] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setCheckAll(e.target.checked);
  };

  const whenDone = () => {
    if (checkedList) {
      const percentage = checkedList.length / plainOptions.length;
    }
    setDone(true);
  };

  return (
    <div className="p-5">
      <h1>Work List</h1>
      {done ? null : (
        <>
          <div>
            <Checkbox onChange={onCheckAllChange} checked={checkAll}>
              {checkAll ? "Uncheck all" : "Check all"}
            </Checkbox>
            <Divider />
            <CheckboxGroup
              className="flex flex-col"
              style={{ margin: 0 }}
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={whenDone}
              className="bg-green-700 text-x font-bold rounded-md text-white py-1.5 px-4 hover:bg-green-600"
            >
              Done
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoBody;

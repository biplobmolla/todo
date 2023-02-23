function Navigation({
  datas,
  selectedTabIdx,
  setSelectedTabIdx,
  selectedTab,
  setSelectedTab,
}: any) {
  const onClickHandler = (idx: number, data: string) => {
    setSelectedTabIdx(idx);
    setSelectedTab(data);
  };
  return (
    <div>
      <ul className="flex justify-between">
        {datas?.map((data: string, idx: number) => (
          <li
            key={data}
            className={`text-xl cursor-pointer p-6 ${
              idx === selectedTabIdx ? "bg-white" : null
            } w-full`}
            onClick={() => onClickHandler(idx, data)}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;

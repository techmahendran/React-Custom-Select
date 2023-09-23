import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { DistricList } from "./DistrictContent/DistricList";

function App() {
  const [titleName, setTitleName] = useState("Select District");
  const [districName, setDistricName] = useState(DistricList);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const dropDownBtn = () => {
    setActiveDropDown(!activeDropDown);

    setSearchInput("");
  };

  const selectDistric = (disName) => {
    setTitleName(disName);

    setActiveDropDown(!activeDropDown);

    setDistricName(DistricList);
  };

  return (
    <>
      <div className={`${activeDropDown ? "container active" : "container"}`}>
        <Header dropDownBtn={dropDownBtn} title={titleName} />

        <SearchBox
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          districName={districName}
          DistricList={DistricList}
          setDistricName={setDistricName}
          activeDropDown={activeDropDown}
          selectDistric={selectDistric}
        />
      </div>
    </>
  );
}

export default App;

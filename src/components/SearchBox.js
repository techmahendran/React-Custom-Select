const SearchBox = ({
  searchInput,
  setSearchInput,
  districName,
  setDistricName,
  activeDropDown,
  DistricList,
  selectDistric,
}) => {
  const SearchDistric = (e) => {
    setSearchInput(e.target.value);

    filterErrorMsg(e.target.value);
  };

  const filterErrorMsg = (filterName) => {
    const filterDistrics = DistricList.filter((item) => {
      return item.toLowerCase().includes(filterName);
    });

    setDistricName(filterDistrics);

    console.log(filterDistrics);
  };

  return (
    <>
      <div className={`${activeDropDown ? "main active" : "main"}`}>
        <div className="box">
          <div className="search_box">
            <i className="fa fa-search"></i>
            <input
              type="text"
              value={searchInput}
              onChange={SearchDistric}
              placeholder="Search for District..."
            />
          </div>
        </div>
        <ul className="options">
          {districName.map((Distric, index) => {
            return (
              <li key={index} onClick={() => selectDistric(Distric)}>
                {Distric}
              </li>
            );
          })}
        </ul>
        {districName.length === 0 && <p className="error">No Search found</p>}
      </div>
    </>
  );
};

export default SearchBox;

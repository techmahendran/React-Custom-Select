const Header = ({ dropDownBtn, title }) => {
  return (
    <>
      <header>
        <div className="select_btn" onClick={dropDownBtn}>
          <span>{title}</span>
          <i className="fa fa-angle-down"></i>
        </div>
      </header>
    </>
  );
};

export default Header;

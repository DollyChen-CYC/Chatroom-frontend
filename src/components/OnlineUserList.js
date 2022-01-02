const OnlineUserList = () => {
  return (
    <div className="list">
      <div className="list__title">
        <h1 className="list__title__text font__black__18__700">
          上線使用者 ({5})
        </h1>
      </div>

      <div className="list__users">
        <div className="list__users__card">
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUserList;

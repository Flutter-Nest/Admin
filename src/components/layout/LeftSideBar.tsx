import { BsPerson } from "react-icons/bs";

function LeftSideBar({
  openUserSearchModal,
}: {
  openUserSearchModal: () => void;
}) {
  // const navigate = useNavigate();

  // const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <>
      <div className="h-full min-w-[320px] bg-[#161A1E]">
        <div className="w-full h-[64px] flex p-4 mb-4 items-center justify-between border-b-2 border-[#2C3238]">
          <div className="flex gap-4 items-center cursor-default">
            <img
              className="w-[40px] h-[40px] rounded-md"
              src={process.env.PUBLIC_URL + "/assets/dev-jeans.png"}
              alt="workspace"
            />
            <div className="text-white">종훈</div>
          </div>
        </div>
        <button
          onClick={openUserSearchModal}
          className="w-full h-10 flex justify-between p-4 text-white hover:bg-[#2C3238]"
        >
          <div className="flex h-full gap-4 items-center">
            <BsPerson />
            <span>Search Student</span>
          </div>
        </button>
        <div className="w-full h-10 flex justify-between p-4 text-white cursor-default">
          <div className="flex h-full gap-4 items-center">
            <span></span>
          </div>
          <div className="flex h-full items-center"></div>
        </div>
        {/* <div>
          {boards?.map((board: BoardType) => (
            <button
              key={board.boardId}
              className="w-full h-10 flex justify-between p-4 text-white hover:bg-[#2C3238] items-center"
              onClick={() =>
                navigate(`/workspaces/${workspaceId}/boards/${board.boardId}`)
              }
            >
              {board.boardName}
            </button>
          ))}
        </div> */}
      </div>
    </>
  );
}
export default LeftSideBar;

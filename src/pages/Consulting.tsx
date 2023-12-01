import { useState } from "react";
import ConsultingLeftSideBar from "../components/layout/ConsultingLeftSideBar";
import DefaultLayout from "../components/layout/DefaultLayout";
import Wrapper from "../components/layout/Wrapper";
import UserSearchModal from "../components/modals/UserSearchModal";
import useModal from "../hooks/useModal";

function Consulting() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [message, setMessage] = useState("");

  const {
    isOpen: isUserSearchModalOpen,
    modalRef: userSearchModalRef,
    openModal: openUserSearchModal,
    closeModal: closeUserSearchModal,
  } = useModal();

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <DefaultLayout>
      <Wrapper>
        <ConsultingLeftSideBar openUserSearchModal={openUserSearchModal} />
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/4 h-5/6 flex flex-col bg-white rounded-lg p-8">
            {selectedUser ? (
              <>
                <div>보내는사람: {currentUser.userName}</div>
                <div>
                  받는사람: 고{selectedUser.grade} {selectedUser.className}{" "}
                  {selectedUser.userName}
                </div>
                <textarea
                  className="w-full h-40 mt-4 p-2 border rounded"
                  placeholder="컨설팅 내용을 입력해주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="w-24 h-10 mt-4 self-end bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
                  onClick={() => {}}
                >
                  보내기
                </button>
              </>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <div>컨설팅 메시지를 받을 학생을 선택해주세요🙇‍♀️</div>
              </div>
            )}
          </div>
        </div>

        {isUserSearchModalOpen && (
          <UserSearchModal
            userSearchModalRef={userSearchModalRef}
            closeUserSearchModal={closeUserSearchModal}
            onUserSelect={(user) => setSelectedUser(user)}
          />
        )}
      </Wrapper>
    </DefaultLayout>
  );
}

export default Consulting;

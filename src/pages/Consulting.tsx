import { useState } from "react";
import { postAPI } from "../axios";
import ConsultingLeftSideBar from "../components/layout/ConsultingLeftSideBar";
import DefaultLayout from "../components/layout/DefaultLayout";
import Wrapper from "../components/layout/Wrapper";
import UserSearchModal from "../components/modals/UserSearchModal";
import useModal from "../hooks/useModal";

function Consulting() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    isOpen: isUserSearchModalOpen,
    modalRef: userSearchModalRef,
    openModal: openUserSearchModal,
    closeModal: closeUserSearchModal,
  } = useModal();

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  const submitConsultingMessage = async () => {
    try {
      const formattedStartDate = getISODateTime(startDate);
      const formattedEndDate = getISODateTime(endDate);

      await postAPI("/consulting", {
        content: message,
        studentId: selectedUser.userId,
        consultantId: currentUser.userId,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      });
      setSelectedUser(null);
      setMessage("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleStartDateChange = (date: any) => {
    setStartDate(date);

    const startDateObj = new Date(date);
    const endDateObj = new Date(startDateObj);
    endDateObj.setDate(startDateObj.getDate() + 6);

    const formattedEndDate = `${endDateObj.getFullYear()}-${
      endDateObj.getMonth() + 1
    }-${endDateObj.getDate()}`;
    setEndDate(formattedEndDate);
  };

  const getISODateTime = (dateString: any) => {
    const date = new Date(dateString);
    return date.toISOString();
  };

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
                <div>
                  컨설팅 주차:{" "}
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => handleStartDateChange(e.target.value)}
                  />{" "}
                  ~{" "}
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => handleStartDateChange(e.target.value)}
                  />
                </div>
                <textarea
                  className="w-full h-40 mt-4 p-2 border rounded"
                  placeholder="컨설팅 내용을 입력해주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="w-24 h-10 mt-4 self-end bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
                  onClick={submitConsultingMessage}
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

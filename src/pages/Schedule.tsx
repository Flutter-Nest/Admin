import { useState } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ScheduleLeftSideBar from "../components/layout/ScheduleLeftSideBar";
import UserSearchModal from "../components/modals/UserSearchModal";
import useModal from "../hooks/useModal";

function Schedule() {
  const [, setSelectedUser] = useState(null);

  const {
    isOpen: isUserSearchModalOpen,
    modalRef: userSearchModalRef,
    openModal: openUserSearchModal,
    closeModal: closeUserSearchModal,
  } = useModal();
  return (
    <DefaultLayout>
      <ScheduleLeftSideBar openUserSearchModal={openUserSearchModal} />
      {isUserSearchModalOpen && (
        <UserSearchModal
          userSearchModalRef={userSearchModalRef}
          closeUserSearchModal={closeUserSearchModal}
          onUserSelect={(user) => setSelectedUser(user)}
        />
      )}
    </DefaultLayout>
  );
}

export default Schedule;

import DefaultLayout from "../components/layout/DefaultLayout";
import LeftSideBar from "../components/layout/LeftSideBar";
import NavigationBar from "../components/layout/NavigationBar";
import Wrapper from "../components/layout/Wrapper";
import UserSearchModal from "../components/modals/UserSearchModal";
import useModal from "../hooks/useModal";

function Main() {
  const {
    isOpen: isUserSearchModalOpen,
    modalRef: userSearchModalRef,
    openModal: openUserSearchModal,
    closeModal: closeUserSearchModal,
  } = useModal();
  return (
    <DefaultLayout>
      <NavigationBar />
      <Wrapper>
        <LeftSideBar openUserSearchModal={openUserSearchModal} />
        {isUserSearchModalOpen && (
          <UserSearchModal
            userSearchModalRef={userSearchModalRef}
            closeUserSearchModal={closeUserSearchModal}
          />
        )}
      </Wrapper>
    </DefaultLayout>
  );
}

export default Main;

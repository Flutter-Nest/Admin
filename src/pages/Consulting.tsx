import ConsultingLeftSideBar from "../components/layout/ConsultingLeftSideBar";
import DefaultLayout from "../components/layout/DefaultLayout";
import Wrapper from "../components/layout/Wrapper";
import UserSearchModal from "../components/modals/UserSearchModal";
import useModal from "../hooks/useModal";

function Consulting() {
  const {
    isOpen: isUserSearchModalOpen,
    modalRef: userSearchModalRef,
    openModal: openUserSearchModal,
    closeModal: closeUserSearchModal,
  } = useModal();
  return (
    <DefaultLayout>
      <Wrapper>
        <ConsultingLeftSideBar openUserSearchModal={openUserSearchModal} />
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/4 h-5/6 bg-white rounded-lg"></div>
        </div>
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

export default Consulting;

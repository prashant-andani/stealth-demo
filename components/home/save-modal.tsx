import Modal from "../../components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

const SaveModal = ({
  showSaveModal,
  setShowSaveModal,
}: {
  showSaveModal: boolean;
  setShowSaveModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showSaveModal} setShowModal={setShowSaveModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="/">
          </a>
          <h3 className="font-display text-2xl font-bold">Saved Successfully</h3>
          
        </div>
      </div>
    </Modal>
  );
};

export function useSaveModal() {
  const [showSaveModal, setShowSaveModal] = useState(false);

  const SaveModalCallback = useCallback(() => {
    return (
      <SaveModal
        showSaveModal={showSaveModal}
        setShowSaveModal={setShowSaveModal}
      />
    );
  }, [showSaveModal, setShowSaveModal]);

  return useMemo(
    () => ({ setShowSaveModal, SaveModal: SaveModalCallback }),
    [setShowSaveModal, SaveModalCallback],
  );
}
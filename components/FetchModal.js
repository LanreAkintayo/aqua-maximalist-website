import Loader from "./Loader";
import ModalLayout from "./ModalLayout";

export default function FetchModal({ active, handleModal, hidden }) {
  console.log("Hidden", hidden);
  console.log("Active", active);
  return (
    <>
      <ModalLayout>
        <div className="p-5 font-hand text-xl dark:bg-black bg-white ">
          <div className="flex justify-between">
            <div className="sm:text-3xl text-3xl text-center">
              Fetching Data
            </div>
            <div className="flex justify-between items-center rounded-t">
              <button
                onClick={handleModal}
                type="button"
                className="text-gray-400 bg-transparent dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="small-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-5-full flex flex-col items-center ">
            <Loader />
          </div>

          <div className="flex flex-col justify-center w-full">
            <small className="text-center">
              {active ? (
                <div className="text-center">
                  <p>Please wait for a moment!</p>{" "}
                  <p>Internet connection is required</p>
                </div>
              ) : (
                "Connect your Wallet"
              )}
            </small>
          </div>
        </div>
      </ModalLayout>
    </>
  );
}

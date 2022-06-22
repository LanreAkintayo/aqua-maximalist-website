import ModalLayout from "./ModalLayout";

export default function MintModal({handleModal}) {
  return (
    <ModalLayout>
      <div className="p-5 font-hand text-xl dark:bg-black bg-white">
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
        <div className="sm:text-5xl text-3xl text-center">Mint your Clan</div>
        <div className="my-5 w-full flex flex-col items-center ">
          <img
            alt="..."
            src="/img/fish2.jpg"
            className="object-cover rounded-md w-48 h-full "
          />
        </div>
        <div className="flex py-2 border-x-0 border-t-0 border-b items-center justify-between">
          <p>Remaining:</p>
          <p>300 / 10000</p>
        </div>
        <div className="flex py-2 border-x-0 border-t-0 border-b  items-center justify-between">
          <p>Price:</p>
          <p>0.5 ETH</p>
        </div>
        <div className="flex border-x-0 border-t-0 border-b items-center justify-between">
          <p>Quantity</p>
          <div className="flex text-2xl">
            <button>-</button>
            <p className="border-y-0 border-x py-2 text-2xl px-3 mx-3">3</p>
            <button>+</button>
          </div>
          <p>0.8 ETH</p>
        </div>
        <div className="my-5 w-full flex flex-col items-center ">
          <button className="p-2 w-full dark:bg-white bg-black dark:text-black text-white rounded-md font-medium text-2xl">
            Mint Now
          </button>
        </div>
      </div>
    </ModalLayout> 
  );
}

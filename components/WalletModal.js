import ModalLayout from "./ModalLayout";

export default function WalletModal({
  handleWalletModal,
 connectWallet,
  disconnectWallet,
  active,
  currentWallet,
}) {
  return (
    <ModalLayout>
      <div className="p-5 font-hand text-xl dark:bg-black bg-white">
        {!active && (
          <div>
            <div className="flex justify-between items-center rounded-t">
              <div className="sm:text-4xl text-2xl text-center">
                Connect a Wallet
              </div>
              <button
                onClick={handleWalletModal}
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

            <div
              onClick={() => connectWallet("Injected")}
              className="flex mt-4 py-2 cursor-pointer dark:bg-white dark:text-black rounded-md px-2 items-center justify-between hover:bg-gray-300"
            >
              <p>Metamask</p>
              <img
                alt="..."
                src="/img/metamask.png"
                className="object-contain w-8 h-8 rounded-md"
              />
            </div>
            <div
              onClick={() => connectWallet("WalletConnect")}
              className="flex mt-4 py-2 cursor-pointer dark:bg-white dark:text-black rounded-md px-2 items-center justify-between hover:bg-gray-300"
            >
              <p>WalletConnect</p>
              <img
                alt="..."
                src="/img/walletConnect.png"
                className="object-contain w-8 h-8 rounded-md"
              />
            </div>
          </div>
        )}

        {active && (
          <div>
            <div className="flex justify-between items-center rounded-t">
              <div className="sm:text-4xl text-2xl text-center">{`Disconnect ${
                currentWallet == "Injected"
                  ? "Metamask"
                  : currentWallet
              }`}</div>
              <button
                onClick={handleWalletModal}
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
            {currentWallet === "Injected" && (
              <div
                onClick={() => disconnectWallet("Injected")}
                className="flex mt-4 py-2 cursor-pointer dark:bg-white dark:text-black rounded-md px-2 items-center justify-between hover:bg-gray-300"
              >
                <p>Metamask</p>
                <img
                  alt="..."
                  src="/img/metamask.png"
                  className="object-contain w-8 h-8 rounded-md"
                />
              </div>
            )}

            {currentWallet === "WalletConnect" && (
              <div
                onClick={() => disconnectWallet("WalletConnect")}
                className="flex mt-4 py-2 cursor-pointer dark:bg-white dark:text-black rounded-md px-2 items-center justify-between hover:bg-gray-300"
              >
                <p>WalletConnect</p>
                <img
                  alt="..."
                  src="/img/walletConnect.png"
                  className="object-contain w-8 h-8 rounded-md"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </ModalLayout>
  );
}

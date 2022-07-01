import React, { Component } from "react";
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingSpinerComponent = ({ buttonText, loadingMessage }) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div className="">
      {promiseInProgress === true ? (
        <div className="flex justify-center items-center w-full">
          <div className="loader"></div>
          {loadingMessage && <div className="ml-2 dark:text-black text-white text-center font-medium">{loadingMessage}</div>}
        </div>
      ) : (
        buttonText
      )}
    </div>
  );
};
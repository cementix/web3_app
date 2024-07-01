import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex md:flex-row flex-col justify-between items-start px-4 py-12 md:p-20">
        <div className="flex flex-col flex-1 justify-start md:mr-10">
          <h1 className="py-1 text-3xl text-gradient text-white sm:text-5xl">
            Send Crypto <br /> across the world
          </h1>
          <p className="mt-5 w-11/12 md:w-9/12 font-light text-base text-left text-white">
            Explore the crypto world. Buy and sell cryptocurrencies on Krypto
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center bg-[#2952e3] hover:bg-[#2546bd] my-5 p-3 rounded-full cursor-pointer"
          >
            <p className="font-semibold text-base text-white">Connect Wallet</p>
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 w-full">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-start items-center mt-10 md:mt-0 w-full">
        <div className="flex-col justify-end items-start my-5 p-3 rounded-xl w-full sm:w-72 eth-card h-40 white-glassmorpism">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-between items-start">
              <div className="flex justify-center items-center border-2 border-white rounded-full w-10 h-10">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div>
              <p className="font-light text-sm text-white">Adress</p>
              <p className="mt-1 font-semibold text-lg text-white">Ethereum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

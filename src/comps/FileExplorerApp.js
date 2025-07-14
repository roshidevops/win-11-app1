import Draggable from "react-draggable";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsArrowUpShort,
  BsCreditCard2FrontFill,
  BsDash,
} from "react-icons/bs";
import { IoIosSquareOutline } from "react-icons/io";
import {
  IoCloseOutline,
  IoReloadOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { VscChromeRestore, VscSearch } from "react-icons/vsc";
import { BiPaste } from "react-icons/bi";
import { FaRegShareSquare, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  cancelMaximizeActiveWindow,
  maximizeActiveWindow,
  minimizeActiveWindow,
  removeActiveWindow,
} from "../redux/feat/desktopSlice";
import { icons } from "../assets";
import { TbArrowsSort, TbCirclePlus, TbCut } from "react-icons/tb";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdMoreHoriz,
  MdOutlineCopyAll,
} from "react-icons/md";
import { CgScan } from "react-icons/cg";
import { HiOutlineViewList } from "react-icons/hi";
import { RiComputerFill } from "react-icons/ri";
import { WIN_FEATURES } from "../const/winSize";
import { useState } from "react";
import { motion } from "framer-motion";

const FileExplorerApp = ({
  id,
  title = "",
  height = "80vh",
  width = "80vw",
  x = 10,
  y = 10,
  minimized = false,
  maximized = false,
}) => {
  const dispatch = useDispatch();

  return (
    <Draggable
      handle="#draggable"
      defaultPosition={{ x: maximized ? 0 : y, y: maximized ? 0 : x }}
      position={maximized ? { x: 0, y: 0 } : null}
      onDrag={() => {
        dispatch(cancelMaximizeActiveWindow(id));
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={
          !maximized
            ? { width: width, height: height }
            : { width: "100vw", height: "93vh" }
        }
        className={`inverse-toggle absolute z-10 overflow-hidden rounded-md border-[1px] border-gray-300 bg-gray-900 text-sm leading-normal text-gray-100 subpixel-antialiased shadow-lg`}
      >
        {/* Window Actions */}
        <div className="flex items-center justify-between">
          <div
            className="flex flex-grow py-2 pl-2 hover:cursor-grab active:cursor-grabbing"
            id="draggable"
          >
            <div className="mr-2">
              <img
                className="h-4 w-4"
                src={icons.apps.winFileExplorer}
                alt=""
              />
            </div>
            {title}
          </div>
          <div className="flex items-center justify-center text-white">
            <div
              className="flex items-center p-3 hover:bg-white hover:bg-opacity-10"
              title="Minimize"
              onClick={() => {
                dispatch(minimizeActiveWindow({ id, minimized: true }));
              }}
            >
              <BsDash />
            </div>
            <div
              className="ml-2 flex items-center p-3 hover:bg-white hover:bg-opacity-10"
              title={maximized ? "Restore" : "Maximize"}
              onClick={() => {
                dispatch(maximizeActiveWindow(id));
              }}
            >
              {maximized ? <VscChromeRestore /> : <IoIosSquareOutline />}
            </div>
            <div
              className="ml-2 flex items-center p-3 hover:bg-red-500"
              title="Close"
              onClick={() => {
                dispatch(removeActiveWindow(id));
              }}
            >
              <IoCloseOutline />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Tools */}
          <div className="hidden border-b-[1px] border-gray-300 py-2 lg:block">
            <div className="flex w-full flex-row">
              <button className="mx-2 flex items-center justify-center rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                <TbCirclePlus size={23} /> New <MdKeyboardArrowDown />
              </button>
              <div className="border-x-[1px] border-sky-300">
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <TbCut size={23} />
                </button>
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <MdOutlineCopyAll size={23} />
                </button>
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <BiPaste size={23} />
                </button>
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <CgScan size={23} />
                </button>
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <FaRegShareSquare size={23} />
                </button>
                <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <IoTrashOutline size={23} />
                </button>
              </div>
              <div className="flex border-r-[1px] border-sky-300">
                <button className="mx-2 flex items-center justify-center rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <TbArrowsSort size={23} /> Sort <MdKeyboardArrowDown />
                </button>
                <button className="mx-2 flex items-center justify-center rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                  <HiOutlineViewList size={23} /> View <MdKeyboardArrowDown />
                </button>
              </div>
              <button className="mx-2 rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10">
                <MdMoreHoriz size={23} />
              </button>
            </div>
          </div>
          {/* Navigation */}
          <div className="hidden border-b-[1px] border-gray-300 py-2 lg:block">
            <div className="flex w-full flex-row px-1">
              <button className="px-1">
                <BsArrowLeftShort size={23} />
              </button>
              <button className="px-1">
                <BsArrowRightShort size={23} />
              </button>
              <button className="px-1">
                <MdKeyboardArrowDown />
              </button>
              <button className="px-1">
                <BsArrowUpShort size={23} />
              </button>
              <div className="mx-2 flex flex-1 flex-row items-center justify-between border-[1px] border-white px-2">
                <div className="flex">
                  <button className="pr-1">
                    <FaStar color="gold" />
                  </button>
                  <button className="pr-1">
                    <MdKeyboardArrowRight />
                  </button>
                  <span className="pr-10">Quick access</span>
                </div>
                <div className="flex">
                  <button className="flex pl-2">
                    <MdKeyboardArrowDown />
                  </button>
                  <button className="flex pl-2">
                    <IoReloadOutline size={16} />
                  </button>
                </div>
              </div>

              <div className="mx-2 flex items-center justify-center bg-transparent">
                <div className="relative text-white focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="focus:shadow-outline p-1 focus:outline-none">
                      <VscSearch />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="border-[1px] border-white bg-transparent py-2 pl-10 text-sm placeholder:text-white focus:outline-none"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Container Content */}
          <div className="grid w-full grid-cols-12">
            <div className="hidden border-r-[1px] border-white lg:col-span-2 lg:grid">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-start bg-white bg-opacity-10 px-2 py-[1px]">
                  <FaStar color="gold" className="mr-1" />
                  Quick access
                </div>
                <div className="flex flex-row items-center justify-start px-2 py-[1px] hover:bg-white hover:bg-opacity-10">
                  <BsCreditCard2FrontFill color="skyblue" className="mr-1" />
                  Desktop
                </div>
                <div className="flex flex-row items-center justify-start px-2 py-[1px] hover:bg-white hover:bg-opacity-10">
                  <RiComputerFill color="skyblue" className="mr-1" />
                  This PC
                </div>
              </div>
            </div>
            <div
              className={`col-span-12 grid h-[73.5vh] lg:col-span-10 ${
                maximized
                  ? "scroll-y-hidden lg:h-71vh lg:overflow-y-scroll"
                  : "overflow-y-scroll lg:h-[57.8vh]"
              }`}
            >
              <div className="hero min-h-auto justify-start">
                <div className="hero-content flex-col lg:flex-row">
                  <div className="columns-2">
                    <img
                      src="https://c.tenor.com/wDDY2RNqRGEAAAAC/anime.gif"
                      className="w-200 ml-5  mt-5 h-96 w-screen max-w-sm rounded-lg shadow-2xl"
                      alt="Profile"
                    />
                    <h1 className=" pt-10 text-5xl font-bold">About Me</h1>
                    <p className=" pt-10 text-gray-300">
                      Hi, I'm
                      <span className=" text-bold text-2xl text-gray-400">
                        {" "}
                        Tanvi Shindodkar
                      </span>
                    </p>
                    <p className=" pr-10 text-gray-300">
                      an experienced front-end web developer specializing in
                      crafting seamless and dynamic user experiences. With
                      expertise in HTML, CSS, JavaScript, and modern frameworks
                      like React and Next.js, I bring innovative designs to life
                      and ensure they perform flawlessly across all devices.
                      Let's create exceptional web experiences together!"
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Draggable>
  );
};

export default FileExplorerApp;

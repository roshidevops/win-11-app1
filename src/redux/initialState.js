import { icons } from "../assets";
import CommandLineApp from "../comps/CommandLineApp";
import FileExplorerApp from "../comps/FileExplorerApp";
import SettingsApp from "../comps/SettingsApp";
import { WIN_FEATURES } from "../const/winSize";
import { newActiveWindow } from "./feat/desktopSlice";

const initialState = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "Edge",
      icon: icons.apps.edge,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://www.google.com", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Command Prompt",
      icon: icons.apps.winCMD,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },

    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 28,
      height: 28,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Tanvi Shindodkar!, [your message here]"
        );
        window.open(
          `https://wa.me/+6285720959031?text=${textMessage}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "X",
      icon: icons.apps.x,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://x.com/TShindodka48760", "_blank", WIN_FEATURES);
      },
    },
    // {
    //   name: "Apple Store",
    //   icon: icons.apps.apple,
    //   width: 35,
    //   height: 35,
    //   onClick: () => {
    //     window.open(
    //       "https://iphone-15-pro-lyart.vercel.app/",
    //       "_blank",
    //       WIN_FEATURES
    //     );
    //   },
    // },
  ],
  shortcutApps: [
    {
      name: "Apple Store",
      icon: icons.apps.apple,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://iphone-15-pro-lyart.vercel.app/",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Crypto Tracker",
      icon: icons.apps.CryptoTracker,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://crypto-currency-tracker-livid.vercel.app/",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    //   {
    //     name: "LinkedIn",
    //     icon: icons.apps.linkedin,
    //     width: 35,
    //     height: 35,
    //     onClick: () => {
    //       window.open(
    //         "https://www.linkedin.com/in/tanvi-shindodkar-b27a09236/",
    //         "_blank",
    //         WIN_FEATURES
    //       );
    //     },
    //   },
    //   {
    //     name: "Visual Studio Code",
    //     icon: icons.apps.vscode,
    //     width: 35,
    //     height: 35,
    //     onClick: () => {
    //       window.open("https://vscode.dev", "_blank", WIN_FEATURES);
    //     },
    //   },
    //   {
    //     name: "WhatsApp",
    //     icon: icons.apps.whatsapp,
    //     width: 35,
    //     height: 35,
    //     onClick: () => {
    //       const textMessage = encodeURIComponent(
    //         "Hello Tanvi Shindodkar!, [your message here]"
    //       );
    //       window.open(
    //         `https://wa.me/+625720959031?text=${textMessage}`,
    //         "_blank",
    //         WIN_FEATURES
    //       );
    //     },
    //   },
  ],
};

export default initialState;

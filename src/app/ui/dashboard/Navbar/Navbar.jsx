"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import {
  MdDehaze,
  MdNotes,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Image } from "@mui/icons-material";
import logo from "@/assets/images/oyolloo-logo-color-horizontal.png";
import UserDropdown from "@/Component/Shared-Component/UserDropDown/UserDropdown";

const Navbar = ({ OpenSidebar }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img style={{ maxWidth: "220px" }} src={logo.src} alt='' />
        <div className={styles.search}>
          {/* <MdSearch className={styles.searchIcon} /> */}
          <Paper
            component='form'
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 320,
            }}
          >
            {/* <IconButton sx={{ p: "10px" }} aria-label='menu'>
              <MenuIcon />
            </IconButton> */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search'
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          {/* <MdOutlineChat size={20} /> */}
          <MdNotifications size={20} />
          <UserDropdown></UserDropdown>
          <MdDehaze className={styles.menuBar} onClick={OpenSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

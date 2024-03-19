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

const Navbar = ({ OpenSidebar }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          {/* <MdSearch className={styles.searchIcon} /> */}
          <Paper
            component='form'
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
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
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton
              color='primary'
              sx={{ p: "10px" }}
              aria-label='directions'
            >
              <DirectionsIcon />
            </IconButton> */}
          </Paper>
        </div>
        <div className={styles.icons}>
          {/* <MdOutlineChat size={20} /> */}
          <MdNotifications size={20} />
          {/* <MdPublic size={20} /> */}
          <MdDehaze className={styles.menuBar} onClick={OpenSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

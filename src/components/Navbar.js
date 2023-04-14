import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HoverButton from "./HoverButton";
import PublicIcon from "@mui/icons-material/Public";
import Divider from "@mui/material/Divider";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  function stringAvatar(name) {
    return {
      sx: {
        backgroundColor: "#172b4d",
        height: "28px",
        width: "30px",
        fontSize: "13px",
        fontWeight: "6px",

        objectFit: "cover",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", background: "#0000003d" }}
    >
      <Toolbar className="navbar" style={{ position: "relative" }}>
        <Typography
          className="title"
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "32px",
            padding: "0 12px",

            right: 0,
          }}
          variant="h6"
          component="h1"
        >
          Trello-Clone
        </Typography>

        <Button
          sx={{
            borderRadius: "3px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",

            padding: "4px 6px",

            color: "white",
            height: "32px",
            width: "32px",

            minWidth: "0",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <StarBorderIcon
            sx={{
              fontSize: "16px",
              transition: "font-size 0.2s ease-in-out",

              "&:hover": {
                fontSize: "20px",
                color: "yellow",
              },
            }}
          />
        </Button>

        <Divider
          sx={{
            height: "21px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: "21px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          variant="middle"
          orientation="vertical"
          flexItem
        />
        <HoverButton
          Text={
            <span
              style={{
                padding: "0px 3px",
                margin: "0px 0px",
                fontWeight: "400",
              }}
            >
              Public
            </span>
          }
          styles={{
            display: "flex",
            color: "white",
            fontSize: "14px",
            padding: "4px 6px",
          }}
          Component={
            <PublicIcon
              sx={{ fontSize: "16px", padding: "4px  6px  4px 2px" }}
            />
          }
        />

        <Divider
          sx={{
            height: "21px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: "21px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          variant="middle"
          orientation="vertical"
          flexItem
        />

        <Button
          sx={{
            backgroundColor: "rgb(235, 236, 240)",
            "&:hover": {
              backgroundColor: "white",
            },
            textTransform: "none",
            display: "flex",
            color: "rgb(23, 43, 77)",
            borderRadius: "3px",
            fontSize: "14px",
            padding: "4px 6px",

            marginRight: "5px",
          }}
        >
          <svg
            style={{ marginLeft: "5px", marginRight: "4px" }}
            color="rgb(23, 43, 77)"
            width="16"
            height="16"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
              fill="currentColor"
            ></path>
          </svg>

          <span
            style={{
              padding: "0px 3px",
              margin: "0px 0px",
              fontWeight: "400",
            }}
          >
            Board
          </span>
        </Button>

        <HoverButton
          styles={{
            display: "flex",
            color: "white",
            fontSize: "14px",
            padding: "4px 6px",

            marginRight: "46%",
            minWidth: "0px",
          }}
          Component={
            <ExpandMoreIcon
              sx={{ fontSize: "16px", padding: "4px  6px  4px 2px" }}
            />
          }
        />

        <Divider
          sx={{
            height: "21px",
            marginLeft: "55px",
            marginRight: "6px",
            marginTop: "21px",

            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          variant="middle"
          orientation="vertical"
          flexItem
        />
        <HoverButton
          Text={
            <span
              style={{
                padding: "0px 3px",
                margin: "0px 0px",
                fontWeight: "400",
              }}
            >
              Filter
            </span>
          }
          styles={{
            display: "flex",
            color: "white",
            fontSize: "14px",
            padding: "4px 6px",
          }}
          Component={
            <FilterListIcon
              sx={{ fontSize: "16px", padding: "4px  6px  4px 2px" }}
            />
          }
        />

        <Divider
          sx={{
            height: "21px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: "21px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          variant="middle"
          orientation="vertical"
          flexItem
        />
        <div style={{ position: "relative", padding: "3px" }}>
          <Avatar variant="circular" {...stringAvatar("Arpit Enter")} />
          <KeyboardDoubleArrowUpIcon
            sx={{
              display: "block",
              position: "absolute",
              height: "13px",
              width: "15px",
              top: "19px",
              right: "0",
            }}
          />
        </div>

        <Divider
          sx={{
            height: "21px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: "21px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          variant="middle"
          orientation="vertical"
          flexItem
        />
        <HoverButton
          styles={{
            display: "flex",
            color: "white",
            height: "31px",
            width: "35px",
            fontSize: "14px",
            padding: "0px",
            minWidth: "0px",
          }}
          Component={
            <MoreHorizIcon
              sx={{ display: "inlineBlock", fontSize: "23px", padding: "0" }}
            />
          }
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

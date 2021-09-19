import React from "react";
import clsx from "clsx";
import CmtDropdownMenu from "../../@coremat/CmtDropdownMenu";
import CmtAvatar from "../../@coremat/CmtAvatar";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useDispatch } from "react-redux";
// import { AuhMethods } from '../../../../services/auth';
// import { CurrentAuthMethod } from '../../../constants/AppConstants';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  profileRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 20,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      // backgroundColor: fade(theme.palette.common.dark, 0.15),
    },
  },
  profileContent: {
    display: "inline-flex",
    alignItems: "center",
  },
  title: {
    padding: "0 0 0 7px",
    fontSize: 14,
    fontWeight: 500,
  },
}));

const actionsList = [
  {
    icon: <AccountCircleIcon />,
    label: "Update Profile",
  },
  {
    icon: <HttpsOutlinedIcon />,
    label: "Change Password",
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
  },
  {
    icon: <ExitToAppIcon />,
    label: "Logout",
  },
  // {
  //   icon: <LocalHospitalIcon />,
  //   label: 'Add Hospital',
  // },
  // {
  //   icon: <AssignmentIcon />,
  //   label: 'Documents Config',
  // },
];

const UserDropDown = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onItemClick = (item) => {
    if (item.label === "Logout") {
      // dispatch(AuthenticationMethods.jwtAuth.onLogout());
      history.push("/signin");
    }
    if (item.label === "Add Hospital") {
      history.push("/add-hospital");
    }
    if (item.label === "Documents Config") {
      history.push("/documents-config");
    }
  };

  return (
    <Box className={clsx(classes.profileRoot, "Cmt-profile-pic")}>
      <CmtDropdownMenu
        onItemClick={onItemClick}
        TriggerComponent={
          <Box className={classes.profileContent}>
            <CmtAvatar
              size="small"
              src={"https://via.placeholder.com/150x150"}
            />
            <div className={classes.title}>John Doe</div>
            <KeyboardArrowDownIcon fontSize="small" />
          </Box>
        }
        items={actionsList}
      />
    </Box>
  );
};

export default UserDropDown;

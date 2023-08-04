import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
	HeaderContainer,
	HeaderAvatar,
	HeaderLeft,
	HeaderSearch,
	HeaderRight,
} from "../Styles/Header";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
				// TODO: Add onClick
				// TODO: Add user photo for source
				/>
				<AccessTimeIcon />
			</HeaderLeft>
			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search TradingWithKevin" />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
};

export default Header;

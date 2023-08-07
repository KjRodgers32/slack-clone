import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import { styled as muStyled } from "@mui/material/styles";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const data = [
	{
		icon: InsertCommentIcon,
		title: "Threads",
	},
	{
		icon: InboxIcon,
		title: "Mentions & Reactions",
	},
	{
		icon: DraftsIcon,
		title: "Saved Items",
	},
	{
		icon: BookmarkBorderIcon,
		title: "Channel Browser",
	},
	{
		icon: PeopleAltIcon,
		title: "People & User Groups",
	},
	{
		icon: AppsIcon,
		title: "Apps",
	},
	{
		icon: FileCopyIcon,
		title: "File Browser",
	},
	{
		icon: ExpandLessIcon,
		title: "Show Less",
	},
];

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Trading With Kevin</h2>
					<h3>
						<CustomFiberManualRecordIcon />
						Kevin Rodgers
					</h3>
				</SidebarInfo>
				<CustomCreateIcon />
			</SidebarHeader>
			{data.map((item, i) => (
				<SidebarOption key={i} Icon={item.icon} title={item.title} />
			))}
		</SidebarContainer>
	);
};

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slack-color);
	color: white;
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 300px;
	margin-top: 60px;
`;
const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;
`;

const CustomCreateIcon = muStyled(CreateIcon)`
	padding: 5px;
	color: #49274b;
	font-size: 1.75rem;
	background-color: white;
	border-radius: 100%;
`;

const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		align-items: center;
		font-size: 13px;
		font-weight: 400;
	}
`;

const CustomFiberManualRecordIcon = muStyled(FiberManualRecordIcon)`
	font-size: 14px;
	color: green;
	margin-top: 1px;
	margin-right: 2px;
`;

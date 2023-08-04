import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Trading With Kevin</h2>
					<h3>
						<FiberManualRecordIcon />
						Kevin Rodgers
					</h3>
				</SidebarInfo>
				<CreateIconCustom />
			</SidebarHeader>
		</SidebarContainer>
	);
};

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slack-color);
	color: white;
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	margin-top: 60px;
`;
const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`;

const CreateIconCustom = styled(CreateIcon)`
	color: var(--slack-color);
	border: none;
	border-radius: 100%;
	padding: 5px;
	background-color: white;
	object-fit: contain;
`;

const SidebarInfo = styled.div`
	h2 {
		font-size: 0.8rem;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 0.5px;
	}

	h3 {
		font-size: 0.7rem;
		display: flex;
		align-items: center;
		font-weight: 100;

		> .MuiSvgIcon {
			width: 5px;
			height: 5px;
		}
	}
`;

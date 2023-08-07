import React from "react";
import { styled } from "styled-components";

const SidebarOption = ({ Icon, title }) => {
	return (
		<SidebarOptionContainer>
			{Icon && <Icon fontSize="large" style={{ padding: 10 }} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span> {title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	);
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	padding-left: 2px;
	cursor: pointer;

	:hover {
		opacity: 0.8;
		background-color: white;
	}
`;

const SidebarOptionChannel = styled.div``;

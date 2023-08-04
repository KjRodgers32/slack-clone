import styled from "styled-components";

const HeaderSearch = styled.div`
	display: flex;
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	text-align: center;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;
	background-color: #421f44;

	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 35vw;
		outline: 0;
		color: white;
	}
`;

export default HeaderSearch;

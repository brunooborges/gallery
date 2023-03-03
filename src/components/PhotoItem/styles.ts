import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #3d3f43;
	border-radius: 10px;
	padding: 10px;

	img {
		max-width: 100%;
		display: block;
		margin-bottom: 10px;
		border-radius: 10px;
	}
`;

export const Button = styled.button`
	background-color: red;
	align-self: flex-end;
	border: 0;
	color: #fff;
	padding: 8px 16px;
	font-size: 15px;
	border-radius: 10px;
	margin: 0 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

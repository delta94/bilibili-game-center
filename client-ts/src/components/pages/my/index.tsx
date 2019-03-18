import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import UserBoard from "./userBoard";
import Menu from "./menu"

class My extends React.Component {
	public componentWillUnmount(){
		pageScroll.saveScrollTop("my");
	}

	public componentDidMount(){
		pageScroll.setScrollTopToPage("my");
	}

	public render() {
		return (
			<div>
				<UserBoard/>
				<Menu/>
			</div>
		)
	}
}

export default My;
import axios from 'axios';
import BallotMajorNavigation from "components/base/BallotMajorNavigation";
import { Link } from "react-router";
import MainMenu from "components/base/MainMenu";
import React from "react";

export default class BallotOpinionsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	static getProps() {
		return {};
	}

	render() {
	    return (
			<div>
                <MainMenu />
				<div className="container-fluid well well-90">
					<h2 className="text-center">More Opinions I Can Follow</h2>

					<ul className="list-group">
					  <li className="list-group-item"><span className="icon_organization"></span>&nbsp;Organization Name<br />
					  supports</li>
					  <li className="list-group-item"><span className="icon_organization"></span>&nbsp;Another Organization<br />
					  opposes</li>
					</ul>
				</div>
                <BallotMajorNavigation />
			</div>
		);
	}
}

import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SideBar = () => {
	const links = [
		{
			nameRu: "Стивен кинг",
			link: '',
		},
		{
			nameRu: "Поиск",
			link: 'search',
		},
		{
			nameRu: "Результаты",
			link: 'results',
		}
	]
	return (
		<div className="sidebar">
			<div className="sidebar-links-container">
			{links.map((item, index)=>{
				return(
						<NavLink key={`navlink-${index}`} activeClassName="sidebar-active-link_active" className="sidebar-active-link" to={`/${item.link}`}>{item.nameRu}</NavLink>
				)
			})}
			</div>
		</div>
	);
};

export default SideBar;

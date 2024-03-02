import React, { useState } from "react";
import "../../css/Tab.css"

const TabMenu = ({ tabs, defaultTab }) => {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const changeTab = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<div className="tab-menu">
			<ul className="tab-menu-list">
				{tabs.map((tab, index) => (
					<li
						key={index}
						className={index === activeTab ? "active" : ""}
						onClick={() => changeTab(index)}
					>
						{tab.label}
					</li>
				))}
			</ul>
			<div className="tab-content">{tabs[activeTab].content}</div>
		</div>
	);
};

export default TabMenu;

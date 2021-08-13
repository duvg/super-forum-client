import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import TopCategory from './TopCategory';
import { getTopCategories } from '../../../services/DataService';
import groupBy from 'lodash/groupBy';
import "./RightMenu.css";

const RightMenu = () => {

    const [topCategories, setTopCategories] = useState<Array<JSX.Element> | undefined>();
    const { width } = useWindowDimensions();

    useEffect(() => {
        getTopCategories().then((res) => {
            const topCatThreads = groupBy(res, "category");
            const topElements = [];
            for (const key in topCatThreads) {
                const currentTop = topCatThreads[key];
                topElements.push(<TopCategory key={key} topCategories={currentTop} />);
            }
            setTopCategories(topElements);
        })
    }, []);

    if (width <= 768) {
        return null;
    }

    
    return (
        <div className="rightmenu rightmenu-container">{topCategories}</div>
    )
}

export default RightMenu;
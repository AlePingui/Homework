import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import Context from 'context/collapseContext';
import Tooltip, {showTooltip} from "components/Tooltip";

// El error es q handleMouseOver no detecta al elementRef.current

export default function MenuItem ({ title, icon }) {
    const { collapse } = useContext(Context);
    const elementRef = useRef();

    const handleMouseOver = (evt) => {
        const tooltip = elementRef.current;
        tooltip.classList.add(showTooltip);
    }

    const handleMouseOut = (evt) => {
        console.log("Out");
    }

    return <li>
        <Link
            to={title.replace(" ", "-").toLowerCase()}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {icon}
            {!collapse && title}
            {collapse && <Tooltip ref={elementRef} text={title} />}
        </Link>
    </li>
}

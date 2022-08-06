import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import Context from 'context/collapseContext';
import Tooltip, {showTooltip} from "components/Tooltip";

export default function MenuItem ({ title, icon }) {
    const { collapse } = useContext(Context);
    const elementRef = useRef();

    const handleMouseOver = (evt) => {
        if (collapse) {
            const tooltip = elementRef.current.lastElementChild;
            tooltip.classList.add(showTooltip);
        }
    }

    const handleMouseOut = (evt) => {
        if (collapse) {
            const tooltip = elementRef.current.lastElementChild;
            tooltip.classList.remove(showTooltip);
        }
    }

    return <li>
        <Link
            to={title.replace(" ", "-").toLowerCase()}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            ref={elementRef}
        >
            {icon}
            {!collapse && title}
            {collapse && <Tooltip text={title} />}
        </Link>
    </li>
}

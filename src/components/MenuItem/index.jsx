import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from '../../context/collapseContext';

export default function MenuItem ({ title, icon }) {
    const { collapse } = useContext(Context);

    return <li>
        <Link to={title.replace(" ", "-").toLowerCase()}>
            {icon}
            {!collapse && title}
        </Link>
    </li>
}
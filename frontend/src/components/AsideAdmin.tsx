import { Link } from "react-router-dom";
import "./styles/AsideAdmin.css"

export default function AsideAdmin() {
  return (
    <aside className="aside-adm">
        <img className="logo-adm" src="/images/logo_maior.svg"/>
        <ul className="list-adm">
          <li className="item-adm">
            <Link className="item-adm" to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="item-adm">
            <Link className="item-adm" to="/admin/programacao">Programação</Link>
          </li>
          <li className="item-adm">
            <Link className="item-adm" to="/admin/atracoes">Atrações</Link>
          </li>
        </ul>
    </aside>
  );
}
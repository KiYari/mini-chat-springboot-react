import style from './header.module.css'
import { Header, Breadcrumb, Menu, theme } from "antd/lib/layout/layout";
import Link from "next/link";

export default function App() {
    return(<Header
            className={style.header}
            theme="light"
            >
        <div className={style.linkHolder}>
            <Link 
            href="/"
            className={style.link}
            >
                Ass
            </Link>
        </div>
        
        <div className={style.test}>dasasdad</div>
        </Header>
    )
}
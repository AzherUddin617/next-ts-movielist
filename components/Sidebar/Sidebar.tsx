import Link from 'next/link'

import classes from './Sidebar.module.css'
import { MdMovie } from 'react-icons/md'
import { FaThList, FaBookmark, FaRegBookmark, FaRegUserCircle } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'

const contents = [
    { title: 'Home', Icon: FaThList, link: '/' },
    { title: 'Top Rated', Icon: HiTrendingUp, link: '/top' },
    { title: 'Bookmark', Icon: FaBookmark, link: '/bookmark' },
]

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
        <div className={classes.container}>

            <div className={classes.logo}>
                <Link href='/'>
                    <MdMovie className={classes.icon} />
                </Link>
            </div>

            <ul className={classes.list}>
                {contents.map((content, index) => (
                    <Link key={index} href={content.link}>
                        <li className={classes.item}>
                            <content.Icon className={classes.icon} />
                        </li>
                    </Link>
                ))}
            </ul>

            <div className={classes.user}>
                <FaRegUserCircle className={classes.icon} />
            </div>

        </div>
    </div>
  )
}

export default Sidebar
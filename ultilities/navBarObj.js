import { faHackerNews } from "@fortawesome/free-brands-svg-icons";
import { faBook, faEye, faHeart, faRegistered, faSignal, faSignIn, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const secondNavBar = [
    {
        name: "HOT",
        submenu: []
    },
    {
        name: "THEO DOI",
        submenu: []
    },
    {
        name: "LICH SU",
        submenu: []
    },
    {
        name: "THE LOAI",
        numCols: "13",
        submenuCoordinate: "[300px]",
        submenu: [
            {
                name: "Tat ca",
                textColor: "red"
            },
            {
                name: "Action",
            },
            {
                name: "Adult",
            },
            {
                name: "Adventure",
            },
            {
                name: "Anime",
            },
            {
                name: "Chuyen sinh",
            },
            {
                name: "Comedy",
            },
            {
                name: "Comic",
            },
            {
                name: "Cooking",
            },
            {
                name: "Co dai",
                textColor: "red"
            },
            {
                name: "Doujinshi",
            },
            {
                name: "Drama",
            },
            {
                name: "Dam My",
                textColor: "red"
            },
            {
                name: "Ecchi",
            },
            {
                name: "Fantasy",
            },
            {
                name: "Gender Bender",
            },
            {
                name: "Harem",
            },
            {
                name: "Historical",
            },
            {
                name: "Horror",
            },
            {
                name: "Josei",
            },
            {
                name: "Live action",
            },
            {
                name: "Manga",
            },
            {
                name: "Manhua",
                textColor: "red"
            },
            {
                name: "Manhwa",
            },
            {
                name: "Martial Arts",
            },
            {
                name: "Mature",
            },
            {
                name: "Mecha",
            },
            {
                name: "Mystery",
            },
            {
                name: "Ngon Tinh",
                textColor: "red"
            },
            {
                name: "One shot",
            },
            {
                name: "Psychological",
            },
            {
                name: "Romance",
                textColor: "red"
            },
            {
                name: "School Life",
            },
            {
                name: "Sci-fi",
            },
            {
                name: "Seinen",
            },
            {
                name: "Shoujo",
            },
            {
                name: "Shoujo Ai",
            },
            {
                name: "Shounen",
            },
            {
                name: "Shounen Ai",
            },
            {
                name: "Slice of Life",
            },
            {
                name: "Smut",
            },
            {
                name: "Soft Yaoi",
            },
            {
                name: "Soft Yuri",
            },
            {
                name: "Sports",
            },
            {
                name: "Supernatural",
            },
            {
                name: "Thieu Nhi",
            },
            {
                name: "Tragedy",
            },
            {
                name: "Trinh Tham",
            },
            {
                name: "Truyen Scan",
            },
            {
                name: "Truyen Mau",
            },
            {
                name: "Webtoon",
            },
            {
                name: "Xuyen Khong",
                textColor: "red"
            },
        ]
    },
    {
        name: "XEP HANG",
        numCols: "5",
        submenuCoordinate: "[150px]",
        submenu: [
            {
                name: "Top all",
                icon: <FontAwesomeIcon icon={faEye} />
            },
            {
                name: "Top thang",
                icon: <FontAwesomeIcon icon={faEye} />
            },
            {
                name: "Top tuan",
                icon: <FontAwesomeIcon icon={faEye} />
            },
            {
                name: "Top ngay",
                icon: <FontAwesomeIcon icon={faEye} />
            },
            {
                name: "Top follow",
                icon: <FontAwesomeIcon icon={faEye} />
            },
            {
                name: "Truyen full",
                icon: <FontAwesomeIcon icon={faSignal} />
            },
            {
                name: "Yeu Thich",
                icon: <FontAwesomeIcon icon={faHeart} />
            },
            {
                name: "Moi cap nhat",
                icon: <FontAwesomeIcon icon={faUpload} />
            },
            {
                name: "Truyen moi",
                icon: <FontAwesomeIcon icon={faHackerNews} />
            },
            {
                name: "So chapter",
                icon: <FontAwesomeIcon icon={faBook} />
            },
        ]
    },
    {
        name: "TIM TRUYEN",
        submenu: []
    },

]



export default secondNavBar;

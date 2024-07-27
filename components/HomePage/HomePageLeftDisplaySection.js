import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomePageLeftAnimeDisplay from './HomePageLeftAnimeDisplay'

export default function HomePageLeftDisplaySection() {
    const animeObj = [
        {
            title: "Daily Update",
            animeList: [
                { name: "Dandadan", composer: "YUKINOBU TATSU", latestChapter: "162", View: "293920", description: "Let's Blow the De", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100171/title_thumbnail_portrait_list/312235.jpg?hash=ov0SDV1k1eVUfWumGcn1zw&expires=2145884400" },
                { name: "'Tis Time for Torture'", composer: "ROBINSON HARUHARA /HIRAKEI", latestChapter: "238", View: "43037", description: "Torture", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100071/title_thumbnail_portrait_list/314089.jpg?hash=BDZnuCLpWYIxJvh5Am9x9Q&expires=2145884400" },
                { name: "Dogsred", composer: "SATORU NODA", latestChapter: "029", View: "21998", description: "War Criminal", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100283/title_thumbnail_portrait_list/321604.jpg?hash=y1QCQhjMdQVKAiHONKLlcA&expires=2145884400" },
                { name: "[OSHI NO KO]", composer: "AKA AKASAKA X MENGO YOKOYARI", latestChapter: "156", View: "236624", description: "MEMe", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100191/title_thumbnail_portrait_list/310708.jpg?hash=nbLid9Bc-3J4EfELZmtjTg&expires=2145884400" },
                { name: "Dandadan", composer: "YUKINOBU TATSU", latestChapter: "162", View: "293920", description: "Let's Blow the De", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100171/title_thumbnail_portrait_list/312235.jpg?hash=ov0SDV1k1eVUfWumGcn1zw&expires=2145884400" },
                { name: "'Tis Time for Torture'", composer: "ROBINSON HARUHARA /HIRAKEI", latestChapter: "238", View: "43037", description: "Torture", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100071/title_thumbnail_portrait_list/314089.jpg?hash=BDZnuCLpWYIxJvh5Am9x9Q&expires=2145884400" },
                { name: "Dandadan", composer: "YUKINOBU TATSU", latestChapter: "162", View: "293920", description: "Let's Blow the De", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100171/title_thumbnail_portrait_list/312235.jpg?hash=ov0SDV1k1eVUfWumGcn1zw&expires=2145884400" },
                { name: "'Tis Time for Torture'", composer: "ROBINSON HARUHARA /HIRAKEI", latestChapter: "238", View: "43037", description: "Torture", linkImg: "https://jumpg-assets.tokyo-cdn.com/secure/title/100071/title_thumbnail_portrait_list/314089.jpg?hash=BDZnuCLpWYIxJvh5Am9x9Q&expires=2145884400" },
                
            ]
        }
    ]
    return (
        <div className='flex items-center  justify-center w-full space-y-5'>
            {
                animeObj.map((value, index) => (
                    <div key={`homepageleftdisplay${index}`} className='flex flex-col w-full cursor-pointer'>
                        <div className='flex flex-row w-full justify-between p-2'>
                            <div className='text-2xl font-semibold gradiant-text'>{value.title}</div>
                            <div className='flex flex-row items-center space-x-3 text-md gradiant-text'>See more<FontAwesomeIcon className='h-[16px] w-[16px] ml-2' icon={faArrowRight} /></div>
                        </div>
                        <HomePageLeftAnimeDisplay animeList={value.animeList}/>
                    </div>

                ))
            }

        </div>
    )
}

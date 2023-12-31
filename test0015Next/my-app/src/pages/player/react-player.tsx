import React, { useContext, useEffect, useState, createContext } from "react"
import Link from "next/link"
import { ReactPlayerYoutube } from "@/component/ReactPlayer"

export default function Home() {
    const primaryVideoId = "https://youtu.be/AlHRqSsF--8"
    const [videoId, setVideoId] = useState(primaryVideoId)
    const [start, setStart] = useState(1);
    const url = videoId

    const settinghandler = () => {
        console.log(1)
        setVideoId("https://www.youtube.com/watch?v=wBjhxyFU3EY")
        console.log(2)
        setStart(30)
        console.log(3)
    }

    return (
        <>
            <Link href="/">Home</Link>
            <h1>react-player/youtube</h1>

            <div>
                <ReactPlayerYoutube url={url} start={start} />
                <button onClick={() => setVideoId("https://www.youtube.com/watch?v=zwSRD65SFQI")}>zwSRD65SFQIにセット</button>
                <button onClick={() => setVideoId("https://www.youtube.com/watch?v=48xDoCnkayc")}>48xDoCnkaycにセット</button>
                <br />
                <button onClick={() => setStart(1)}>1秒にセット</button>
                <button onClick={() => setStart(60)}>1分にセット</button>
                <button onClick={() => setStart(300)}>5分にセット</button>
                <br />
                <br />
                <button onClick={() => settinghandler()}>wBjhxyFU3EYの30sにセット</button>

                onClickでuseStateを起動。
                一瞬だけその時間になるが、<br />
                すぐに別の時間に上書きされる。<br /><br />
                恐らくは直近に見ていた時間がキャッシュされており<br />
                それに上書きされている。<br />
                ------------------------------------------------------------------<br />
                urlと秒数を固定しておけば、期待通りの時間で再生される。<br />
                (1分にセットしており、何度リロードしても1分に戻る)<br />
                と思いきや、タイムバーを１度いじったら、<br />
                何度リロードしても上書きされるようになった。<br />
                <ReactPlayerYoutube url={"https://www.youtube.com/watch?v=wBjhxyFU3EY"} start={60} />

                {/* <script src="https://www.youtube.com/iframe_api"></script> */}
            </div>
            <div>
            </div>
        </>
    )
}
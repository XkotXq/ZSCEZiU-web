"use client"
import PhotoBar from "../../ui/Sections/photobar";
import { useState } from "react"
export default function page() {
    const [imageIndex, setImageIndex] = useState(0)
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "rada rodziców",
        }
    ]
    const images = [
        "https://cdn.pixabay.com/photo/2023/09/10/11/11/storm-8244663_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/01/22/20/10/bark-8526227_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/08/20/08/30/luis-i-bridge-8201941_640.jpg",
        "https://cdn.pixabay.com/photo/2024/03/09/06/52/flowers-8622033_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/01/16/25/costa-rica-8606850_1280.jpg",
    ]
    const showNextImg = () => {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }
    const showPrevImg = () => {
        setImageIndex(index => {
            if  (index === 0) return images.length - 1
            return index - 1
        })
    }
    return (
        <div>
            <PhotoBar path={path}/>
            <div>
                <div className="relative w-full h-[400px] max-w-[700px] aspect-video">
                    <div className="flex h-full w-full overflow-hidden">
                        {
                            images.map(image => (
                                <img
                                    key={image}
                                    className="object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-transform ease-in-out duration-300 "
                                    style={{ transform: `translateX(-${100 * imageIndex}%)` }}
                                    src={image}
                                    alt="img1"
                                />
                            ))
                        }
                    </div>
                    <button onClick={showPrevImg} className="absolute  top-1/2 translate-y-1/2">lewo</button>
                    <button onClick={showNextImg} className="absolute right-0 top-1/2 translate-y-1/2">prawo</button>
                </div>
            </div>
        </div>
    )
}
import Image from 'next/image'

export default  function Photodemo() {
    return (
        <div className="w-full h-96 relative rounded-md overflow-hidden grow-2">
            <Image src="/default-banner.jpg" alt="test" fill loading="lazy" style={{
                objectFit: 'cover',
            }}/>
        </div>
    )
}
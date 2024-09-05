import qrImage from "/image-qr-code.png"

export default function Card() {
    return (
        <div className=" p-4 bg-white rounded-lg h-[500px] w-[200px] flex flex-col ">
            <img src={qrImage}
                alt="the qr-code image"
                className="rounded-xl max-w-xs"
                width="auto"
                height={30}
            />
            <h1>Improve your front-end skills by building projects</h1>
            <p className="">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}
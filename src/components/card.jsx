import qrImage from "/image-qr-code.png"

export default function Card() {
    return (
        <div className=" p-2 bg-white rounded-lg h-[400px] w-[300px] flex flex-col ">
            <img src={qrImage}
                alt="the qr-code image"
                className="rounded-xl max-w-xs max-h-52"
                width="auto"
                height={20}
            />
            <div className="text-left p-4">
                <h1 className="font-bold">Improve your front-end skills by building projects</h1>
                <p className="">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}
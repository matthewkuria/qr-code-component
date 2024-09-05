import qrImage from "/image-qr-code.png"

export default function Card() {
    return (
        <div className=" p-2 bg-white rounded-lg h-[500px] md:h-[400px] md:w-[300px] flex flex-col items-center">
            <img src={qrImage}
                alt="the qr-code image"
                className=" flex rounded-xl w-96 md:w-80 md:h-64 "
                width="auto"
                height="auto"
            />
            <div className="text-left p-5 ">
                <h1 className="font-bold">Improve your front-end skills by building projects</h1>
                <p className="text-slate-500 font-normal text-center py-1">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}
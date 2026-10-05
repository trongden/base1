 
import { useState } from "react";

function Show() {
    const [isShow, setisShow] = useState(false);
    return(
        <div className="border border-gray-300 p-4 rounded">
        {isShow && (
        <div>
            <p>Tên: Nguyễn Văn A</p>
            <p>Email: example@gmail.com</p>
        </div>
        )}
        <div>
            <button onClick={() => setisShow(!isShow)} className="border">{isShow ? "Ẩn thông tin" : "Hiện thông tin"}</button>
        </div>
        </div>
    )
}
export default Show
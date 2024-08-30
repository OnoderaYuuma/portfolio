import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
    return (
        <div className="m-5">
            <h1 className="text-5xl text-center">profile</h1>
            <div className="flex justify-center m-4">
                <Image src={"/img/icon.png"} alt="icon" width={120} height={75} className="mx-4"></Image>
                <div>
                    <p>Name: 小野寺悠真</p>
                    <p>盛岡情報ビジネス＆デザイン専門学校<br/>高度情報工学科2年</p>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;
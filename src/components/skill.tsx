import { FC } from "react";

const Skill: FC = () => {
    return (
        <div className="m-5">
            <h1 className="text-5xl text-center">Skill</h1>
            <div className="flex justify-center">
                <div className="text-center">
                    <p className="text-3xl m-4">プログラム言語</p>
                    <p className="text-xl p-4 mr-4 mb-3 bg-slate-200 ">java, javascript <br /> HTML/CSS, PHP</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl m-4">資格</p>
                    <p className="text-xl p-4 mb-3 bg-slate-200">ITパスポート試験<br />基本情報技術者試験</p>
                </div>
            </div>
        </div>
    );
}
 
export default Skill;
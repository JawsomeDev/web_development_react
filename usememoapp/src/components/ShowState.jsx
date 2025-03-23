import { useMemo } from "react";

export default function ShowState({number, text}){
    const consolNumber = (number) => {
        console.log('숫자가 변경되었습니다');
        return number;
    };

    const consoleText = (text) => {
        console.log('글자가 변경되었습니다');
        return text;
    };

    const showNum = useMemo(()=> consolNumber(number), [number]);
    const showText = useMemo(()=> consolNumber(text), [text]);

    return (
        <div>
            <p> 숫자 : {showNum} </p>
            <p> 문자 : {showText} </p>
        </div>
    )
}
import axios from "axios";

export default async function integral(txt: string) {
    const result =
        await axios.get(
            "http://localhost:8000/asdf",
            {
                withCredentials: true // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
            }
        );
    console.log(result.data);
}
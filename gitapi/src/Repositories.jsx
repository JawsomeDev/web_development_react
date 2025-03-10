import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function Repositories(){

  const getRepositories = async () => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=react`);
    return response.data.items;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 밀리초 단위 1초에 해당함.
  });

  // 조건부 렌더링 부분 구현 : 데이터를 이용할 수 있을 때 렌더링
  // REST API 호출이 오류로 끝나는 경우 메시지 렌더링
  if(isLoading){
    return <p>로딩 중 ...</p>
  }
  if(isError){
    return <p>오류 발생했습니다.</p>
  }
  else{
    return(
      <table>
        <tbody>
          {
            data.map(repo => 
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}

export default Repositories;
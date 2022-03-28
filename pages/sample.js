import { useEffect, useState } from 'react';

export default function Netanotane() {
  const [datas, setDatas] = useState([]);//取得した本のリスト

  useEffect(async () => {
    setDatasAPI();
  }, []);

  const setDatasAPI = async() => {
    const response = await fetch(`http://127.0.0.1:3000/api/sample`);
    console.log(response)
    const data = await response.json();

    setDatas(data.rows);
  }

    return (
      <div>
        {datas.length > 0 && (
          datas.map((data) => {
          return (
            <>
              {data.title}
            </>
        )}))}
      </div>
  )
}
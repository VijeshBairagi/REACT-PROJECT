import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="flex align-middle justify-center w-[90%] mx-auto bg-gray-600 " >
          <div className="text-center m-4 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} className="py-8" alt="Git picture" width={300} />
      </div>
    </div>
  );
}
export default Github;


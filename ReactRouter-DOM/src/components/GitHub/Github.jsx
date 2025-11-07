import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="flex items-center justify-center w-[90%] mx-auto bg-gray-600 text-white p-4 h-[70vh] py-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={data.avatar_url}
          className="rounded-full"
          alt="Git picture"
          width={200}
        />
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-bold">Name : {data.name} </h3>
          <p className="text-2xl mt-2"> Github followers : {data.followers}</p>
        </div>
      </div>
    </div>
  );
}
export default Github;


import Home from './../components/home';
export default async function Page() {
  
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl gap-5 px-5 md:grid-cols-3 xl:px-0">
        <Home/>
      </div>
    </>
  );
}
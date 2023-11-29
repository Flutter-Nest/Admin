import DefaultLayout from "../components/layout/DefaultLayout";
import NavigationBar from "../components/layout/NavigationBar";

function Main() {
  return (
    <DefaultLayout>
      <NavigationBar />
      <div className=" text-6xl">Main</div>
    </DefaultLayout>
  );
}

export default Main;

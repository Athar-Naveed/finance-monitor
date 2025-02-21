import Box from "../components/Box";
import MainContent from "../components/MainContent";
import {Toaster} from "react-hot-toast";
export default function User() {
  return (
    <>
      <section>
        <Toaster />
        <MainContent
          title={"Dashboard"}
          description={"Heads up! Your expenses are coming this way!"}
        />
        <div className="boxes m-10">{/* <Box  /> */}</div>
      </section>
    </>
  );
}

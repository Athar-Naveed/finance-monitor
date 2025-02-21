import Box from "../components/Box";
import Currency from "../components/Currency";
import MainContent from "../components/MainContent";
import {pockets} from "../data/constants";
export default function Pockets() {
  return (
    <>
      <section>
        <MainContent
          title={"Pockets"}
          description={"All Incoming & Outgoing cash is stored here"}
        />
        <Currency />
        <div className="boxes my-5 mx-2">
          <Box data={pockets} />
        </div>
        <div className="h-[30vh]"></div>
      </section>
    </>
  );
}

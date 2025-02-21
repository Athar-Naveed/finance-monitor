import Cards from "./Cards";

const Box = ({data}: {data: any}) => {
  return (
    <>
      <div className="grid">
        <div className="boxes">
          {data.map((items: any, index: number) => (
            <div key={index} className="box">
              {items.user_pocket.map((item: any, index: number) => (
                <div key={index} className="box">
                  <div className="box-heading">
                    <h3>{item.pocketName}</h3>
                    <p>{item.pocketDesc}</p>
                  </div>
                  <div className="cards">
                    {item.earnings.map((pocketItem: any, index: number) => (
                      <div key={index} className="card">
                        <Cards
                          title={"earnings"}
                          from={pocketItem.from}
                          amount={pocketItem.amount}
                        />
                      </div>
                    ))}
                    {item.spendings.map((pocketItem: any, index: number) => (
                      <div key={index} className="card">
                        <Cards
                          title={"spendings"}
                          from={pocketItem.to}
                          amount={pocketItem.amount}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Box;

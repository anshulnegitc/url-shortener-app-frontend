import { useState, useEffect, useContext } from "react";

import api from "../api";
import Expression from "./Expression";
import GenerateLink from "./Generate-link";
import CardAnalytics from "./Card-Analytics";
import WorldMap from "./WorldMap";
import WorldTable from "./WorldTable";
import LayoutContext from "../store";

function MainContent() {
  const width =
    useContext(LayoutContext) <= (process.env.REACT_APP_MAX_WIDTH || 1000);
  const [exp, setExp] = useState({
    like: {
      id: "",
      count: 0,
    },
    heart: {
      id: "",
      count: 0,
    },
    star: {
      id: "",
      count: 0,
    },
  });
  const [cardAnalytics, setCardAnalytics] = useState([
    {
      name: "Total Visitor",
      count: 0,
      slug: "visitor",
      id: "",
    },
    {
      name: "Links Generated",
      count: 0,
      slug: "links_generated",
      id: "",
    },
    {
      name: "Links Redirected",
      count: 0,
      slug: "links_redirected",
      id: "",
    },
  ]);

  useEffect(() => {
    getExpression();
    updateVisitor();
  }, []);

  const getExpression = () => {
    api
      .getExpression()
      .then((res) => {
        const len = res.data.data.totalRecords;
        const records = res.data.data.records;
        let i = 0,
          exp = {},
          cardAna = cardAnalytics;

        while (i < len) {
          if (["heart", "like", "star"].includes(records[i].entityData.name)) {
            exp[[records[i].entityData.name]] = {};
            exp[[records[i].entityData.name]].id = records[i].entityId;
            exp[[records[i].entityData.name]].count =
              records[i].entityData.count;
          } else {
            const index = cardAna.findIndex(
              (c) => c.slug === records[i].entityData.name
            );
            cardAna[index].count =
              records[i].entityData.name === "visitor"
                ? records[i].entityData.count + 1
                : records[i].entityData.count;
            cardAna[index].id = records[i].entityId;
          }

          i++;
        }
        setCardAnalytics(cardAna);
        setExp(exp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateVisitor = () => {
    api.saveInfo().then((res) => {});
  };

  const updateExpression = (id) => {
    api.updateExpression(id).then((res) => {
      const record = res.data.data.record;

      setExp({
        ...exp,
        [record.entityData.name]: {
          id: record.entityId,
          count: record.entityData.count,
        },
      });
    });
  };

  const incrLinkGen = () => {
    const nCardAnalytics = [...cardAnalytics];
    nCardAnalytics[1].count += 1;
    setCardAnalytics(nCardAnalytics);
  };
  return (
    <main className="max-container mx-auto h-100 mt-5 mb-4 d-flex flex-column w-100">
      <section>
        <div className="d-flex">
          {width ? null : (
            <div className="col-2" style={{ fontFamily: "monospace" }}>
              <Expression
                exp={exp}
                updateExpression={(id) => updateExpression(id)}
              />
            </div>
          )}
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-12">
            <GenerateLink incrLinkGen={incrLinkGen} />
          </div>
        </div>
      </section>
      <section className="mt-xxl-5 mt-xl-5 mt-lg-5 mt-3 d-flex flex-wrap">
        {width ? (
          <div className="col-4" style={{ fontFamily: "monospace" }}>
            <Expression
              exp={exp}
              updateExpression={(id) => updateExpression(id)}
            />
          </div>
        ) : null}
        <div className="col-xxl-2 col-xl-3 col-lg-3 col-8">
          <CardAnalytics cardAnalytics={[...cardAnalytics]} />
        </div>
        <div className="col-xxl-10 col-xl-7 col-lg-7 col-12 p-xxl-2 p-xl-2 p-lg-2 p-md-3 rounded-2">
          <div className="mb-4 ff-Roboto-M">
            IP address is checked for analytics purpose.
            <br />
            Only continent is stored in database when visiting, generating and
            redirecting link.
          </div>
          {width ? <WorldTable /> : <WorldMap />}
        </div>
      </section>
    </main>
  );
}

export default MainContent;

import { useEffect } from "react";
import { memo, useState } from "react";
import api from "../api";

function WorldTable() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    api.getContinents("").then((res) => {
      setContinents(res.data.data.records);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr className="ff-Roboto-M">
            <th scope="col">Continents</th>
            <th scope="col">Visitor</th>
            <th scope="col">Links Generated</th>
            <th scope="col">Links Redirected</th>
          </tr>
        </thead>
        <tbody className="ff-Roboto-R">
          {continents.map((c, i) => (
            <tr key={c.entityId}>
              <th scope="row">{c.name}</th>
              <td>{c.visitor}</td>
              <td>{c.links_gen}</td>
              <td>{c.links_redirect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(WorldTable);

import React, { useState, useEffect } from "react";
import { getDeliveries } from "./network";

export const Question3: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [deliveries, setDeliveries] = useState<any | null>(null);
  const [status] = useState<any | null>({
    active: 1,
    upcoming: 2,
    pending: 3
  });

  const fetchSortedDelieveries = () => {
    getDeliveries()
      .then((item) => {
        if (!isMounted) {
          const data = item.sort((itemA: any | null, itemB: any | null) => {
            return (
              status[itemA.status] - status[itemB.status] ||
              itemA.eta - itemB.eta
            );
          });
          setDeliveries(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const deliveriesRecord = () => {
    return deliveries.map((item: any) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>{item.eta}</td>
          <td>{item.status}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    fetchSortedDelieveries();

    return () => {
      setIsMounted(true);
    };
  }, []);

  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">ETA</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>{deliveries && deliveriesRecord()}</tbody>
    </table>
  );
};

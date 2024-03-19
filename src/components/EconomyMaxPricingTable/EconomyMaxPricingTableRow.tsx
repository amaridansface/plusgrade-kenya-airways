function EconomyMaxPricingTableRow({ routes, oneSeat, twoSeats }: Props) {
  return (
    <tr className="table-row">
      <th scope="row" className="economy-max-routes">
        {routes}
      </th>
      <td>{oneSeat}</td>
      <td>{twoSeats}</td>
    </tr>
  );
}

interface Props {
  routes: string;
  oneSeat: string;
  twoSeats: string;
}

export default EconomyMaxPricingTableRow;

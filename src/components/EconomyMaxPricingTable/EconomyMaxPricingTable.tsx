import CONSTANTS from "../../../constants";
import EconomyMaxPricingTableRow from "./EconomyMaxPricingTableRow";
import "./economy-max-pricing-table.css";

function EconomyMaxPricingTable({ titleRow, subtitleRow, columnNames }: Props) {
  return (
    <>
      <table aria-label={titleRow}>
        <thead>
          <tr>
            <th className="title-row" colSpan={3}>
              {titleRow}
            </th>
          </tr>
          <tr>
            <th scope="col" className="title-row" colSpan={3}>
              {subtitleRow}
            </th>
          </tr>
          <tr className="column-names">
            {columnNames.map((name) => (
              <th scope="col">{name}</th>
            ))}
          </tr>
        </thead>

        {CONSTANTS.ECONOMY_MAX_PRICING_TABLE_ROWS.map((row) => (
          <EconomyMaxPricingTableRow
            routes={row.routes}
            oneSeat={row.oneSeat}
            twoSeats={row.twoSeats}
          />
        ))}
      </table>
      <div className="table-note">{CONSTANTS.ECONOMY_MAX_PRICING_NOTE}</div>
    </>
  );
}

interface Props {
  titleRow: string;
  subtitleRow: string;
  columnNames: string[];
}

export default EconomyMaxPricingTable;

import { useState } from "react";
import "./Spreadsheet.css";
import { initCells, recalculate } from "../utils/evaluator";

const COLS = "ABCDEFGHIJ".split("");
const ROWS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Spreadsheet() {
  const [cells, setCells] = useState(initCells());

  function updateCell(id, value) {
    const next = structuredClone(cells);
    next[id].value = value;
    recalculate(next);
    setCells(next);
  }

  return (
    <div className="sheet">
      <table>
        <thead>
          <tr>
            <th />
            {COLS.map(c => <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, ri) => (
            <tr key={r}>
              <th>{r}</th>
              {COLS.map((_, ci) => {
                const id = `${COLS[ci]}${ROWS[ri]}`;
                return (
                  <td key={id}>
                    <input
                      value={cells[id].value}
                      onChange={e => updateCell(id, e.target.value)}
                    />
                    <div className="computed">
                      {cells[id].computed}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

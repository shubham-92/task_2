const COLS = "ABCDEFGHIJ".split("");
const ROWS = Array.from({ length: 10 }, (_, i) => i + 1);

export function initCells() {
  const cells = {};
  for (let r of ROWS) {
    for (let c of COLS) {
      cells[`${c}${r}`] = {
        value: "",
        computed: "",
        deps: new Set()
      };
    }
  }
  return cells;
}

export function recalculate(cells) {
  Object.values(cells).forEach(c => (c.deps = new Set()));

  for (const id in cells) {
    try {
      cells[id].computed = evaluate(id, cells, new Set());
    } catch (e) {
      cells[id].computed = e.message;
    }
  }
}

function evaluate(id, cells, visiting) {
  if (visiting.has(id)) throw new Error("#CIRCULAR");
  visiting.add(id);

  const cell = cells[id];
  if (!cell.value.startsWith("=")) {
    visiting.delete(id);
    return cell.value;
  }

  let expr = cell.value.slice(1);

  expr = expr.replace(/[A-J][1-9]0?/g, ref => {
    cell.deps.add(ref);
    const val = evaluate(ref, cells, visiting);
    if (val === "" || val === undefined) return 0;
    if (isNaN(val)) throw new Error("#ERROR");
    return val;
  });

  try {
    const result = Function(`return (${expr})`)();
    visiting.delete(id);
    return result;
  } catch {
    visiting.delete(id);
    throw new Error("#ERROR");
  }
}

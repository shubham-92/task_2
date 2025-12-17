# Spreadsheet Engine

A simple web-based spreadsheet application built with React and Vite. This application provides a 10x10 grid where users can enter values and formulas, with automatic recalculation of dependent cells.

## Features

- **10x10 Grid**: Cells range from A1 to J10.
- **Formula Support**: Enter formulas starting with `=` (e.g., `=A1 + B1`).
- **Cell References**: Formulas can reference other cells, and changes propagate automatically.
- **Automatic Recalculation**: Dependencies are tracked, and cells update when referenced values change.
- **Error Handling**: Displays errors for circular references (`#CIRCULAR`) or invalid expressions (`#ERROR`).
- **JavaScript Expressions**: Supports basic arithmetic, parentheses, and JavaScript functions (e.g., `=Math.sqrt(A1)`).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubham-92/task_2.git
   cd task_2/spreadsheet-engine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- **Editing Cells**: Click on any cell to edit its value or formula.
- **Entering Values**: Type numbers or text directly.
- **Entering Formulas**: Start with `=` followed by an expression (e.g., `=A1 * 2 + B1`).
- **Viewing Results**: The computed value appears below the input field.
- **Dependencies**: Changes to a cell will automatically update all cells that reference it.

### Example

- In cell A1, enter `10`
- In cell B1, enter `=A1 + 5`
- B1 will display `15`
- Change A1 to `20`, and B1 updates to `25`

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and building.
- **JavaScript**: For formula evaluation.

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

This project is open-source. Check the repository for license details.

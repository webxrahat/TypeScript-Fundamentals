enum Direction {
  Up,
  Down,
  Left,
  Right,
}
export default Direction;

function makeTable(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Table is facing Up";
    case Direction.Down:
      return "Table is facing Down";
    case Direction.Left:
      return "Table is facing Left";
    case Direction.Right:
      return "Table is facing Right";
    default:
      return "Unknown direction";
  }
}

console.log(makeTable(Direction.Left));

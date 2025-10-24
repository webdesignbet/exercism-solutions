// @ts-check

/**
 * Task 1 - Size
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Task 2 - Position
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

/**
 * Task 3-5 - ProgramWindow
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resize window (Task 4)
   * @param {Size} newSize
   */
  resize(newSize) {
    // ensure min size of 1
    const width = Math.max(1, newSize.width);
    const height = Math.max(1, newSize.height);

    // clip to not exceed screen bounds
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(width, maxWidth);
    this.size.height = Math.min(height, maxHeight);
  }

  /**
   * Move window (Task 5)
   * @param {Position} newPosition
   */
  move(newPosition) {
    // ensure min position of 0
    const x = Math.max(0, newPosition.x);
    const y = Math.max(0, newPosition.y);

    // clip to not exceed screen bounds
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(x, maxX);
    this.position.y = Math.min(y, maxY);
  }
}

/**
 * Task 6 - Change a program window
 * @param {ProgramWindow} programWindow
 * @returns {ProgramWindow}
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
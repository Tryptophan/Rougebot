class GameObject {

  sprite: ImageBitmap;
  size: Size;
  position: Position;

  constructor(sprite: ImageBitmap, size: Size, position: Position) {
    this.sprite = sprite;
    this.size = size;
    this.position = position;
  }
}
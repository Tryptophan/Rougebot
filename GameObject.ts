class GameObject {

  sprite: ImageBitmap;
  size: Size;
  position: Position;
  layer: Number;

  constructor(sprite: ImageBitmap, size: Size, position: Position, layer: Number) {
    this.sprite = sprite;
    this.size = size;
    this.position = position;
    this.layer = layer;
  }
}
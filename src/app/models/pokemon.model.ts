export class Pokemon {

  public id: number;
  public name: string;
  public height: number;
  public weight: number;
  public img: string;

  constructor(data?: any) {
    if (data && data.id) {
      this.id = data.id;
      this.name = data.name;
      this.height = data.height;
      this.weight = data.weight;
      this.img = data.sprites.front_default;
    } else {
        this.id = 0;
        this.name = '';
        this.height = 0;
        this.weight = 0;
        this.img = '';
    }
  }

}

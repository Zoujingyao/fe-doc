export class Pair<FT = any, ST = any> {
  first: FT;
  second: ST;

  constructor(first: FT, second: ST) {
    this.first = first;
    this.second = second;
  }
}

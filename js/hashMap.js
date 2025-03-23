class HashMap {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i <= key.length - 1; i++) {
      hash = (hash + key[i].charCodeAt(0) * i) % this.data.length;
      // console.log(`(${hash} + ${ key[i].charCodeAt(0)} * ${i}) % ${this.data.length} = ${hash}`)
    }
    // console.log(hash);
    return hash;
  }

  get(key) {
    console.log(this.data)
    let address = this._hash(key);
    let currentBucket = this.data[address];
    console.log(currentBucket)
    if(currentBucket){
      for(let i=0; i < currentBucket.length; i++){
        if(currentBucket[i][0] == key){
          return currentBucket[i][1]
        }
      }
    }
  }

  set(key, value) {
    let address = this._hash(key);
    // console.log(address, !this.data[address], !this.data.includes(address));
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}
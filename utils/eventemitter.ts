export default class EventEmitter {
  private listener: {
    [name: string]: Function[];
  } = {};

  public on<Input>(eventName: string, fn: (arg: Input) => void) {
    if (!this.listener[eventName]) {
      this.listener[eventName] = [];
    }
    this.listener[eventName].push(fn);

    return this;
  }

  public emit(eventName: string, ...args: any[]) {
    if (this.listener[eventName]) {
      this.listener[eventName].forEach(fn => {
        fn(...args);
      });
    }

    return this;
  }

  public off(eventName: string, fn: Function) {
    if (this.listener[eventName]) {
      this.listener[eventName] = this.listener[eventName].filter(f => f !== fn);
    }

    return this;
  }
}

// Todo:
// on<Input> need to map to emit(...args: any[])
// 實際安裝 eventemitter3 看看型別
// 研究 dom eventlistener 型別怎麼寫的
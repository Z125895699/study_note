const originState: unique symbol = Symbol.for("origin-state");

const arrayHandlers: ProxyHandler<
  Array<any> & { [originState]: ObservableArray }
> = {
  set(target, prop, value): boolean {
    console.log("set exec");
    const observableArray = target[originState];
    const result = Reflect.set(target, prop, value);
    /**
     * length change
     */
    if (prop === "length") {
      observableArray.notify();
      return result;
    }
    /**
     * index change
     */
    if (!(typeof prop === "symbol" || isNaN(+prop))) {
      observableArray.notify();
      return result;
    }

    return result;
  },
};

class ObservableArray {
  proxy;
  constructor(value: any[]) {
    value[originState] = this;
    this.proxy = new Proxy(value, arrayHandlers);
  }

  public get value() {
    return this.proxy;
  }

  public notify() {
    /**
     * expect exec once, after shift operation done
     */
    const job = () => {
      console.log("job start");
    };
    const scheduler = () => queueJob(job);
    scheduler();
  }
}

const resolvedPromise = Promise.resolve() as Promise<any>;
let lock = false;
const queueJob = (job: any) => {
  if (!lock) {
    /** microtask will exec after the sync operation done */
    resolvedPromise.then(() => {
      job();
      lock = false;
    });
    lock = true;
  }
};

const arr = new ObservableArray([1, 2, 3, 4, 5, 6]);
arr.value.shift();

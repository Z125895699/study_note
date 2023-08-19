var originState = Symbol.for("origin-state");
var arrayHandlers = {
    set: function (target, prop, value) {
        console.log("set exec");
        var observableArray = target[originState];
        var result = Reflect.set(target, prop, value);
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
var ObservableArray = /** @class */ (function () {
    function ObservableArray(value) {
        value[originState] = this;
        this.proxy = new Proxy(value, arrayHandlers);
    }
    Object.defineProperty(ObservableArray.prototype, "value", {
        get: function () {
            return this.proxy;
        },
        enumerable: false,
        configurable: true
    });
    ObservableArray.prototype.notify = function () {
        /**
         * expect exec once, after shift operation done
         */
        var job = function () {
            console.log("job start");
        };
        var scheduler = function () { return queueJob(job); };
        scheduler();
    };
    return ObservableArray;
}());
var resolvedPromise = Promise.resolve();
var lock = false;
var queueJob = function (job) {
    if (!lock) {
        /** microtask will exec after the sync operation done */
        resolvedPromise.then(function () {
            job();
            lock = false;
        });
        lock = true;
    }
};
var arr = new ObservableArray([1, 2, 3, 4, 5, 6]);
arr.value.shift();

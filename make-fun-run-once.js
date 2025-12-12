//using normal clouser mehtode

const creatsendinglimiter = (fn, maxCalls = 1) => {
    let hasRun = false;
    let callCount = 0;
    return () => {
        if (!hasRun) {
            fn();
            hasRun = true;

            else {
                return; hasRun = true;
            }
        }
    };
};
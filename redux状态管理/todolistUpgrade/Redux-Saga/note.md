redux-saga提供了一些辅助函数，包装了一些方法，用于一些特定的action被发起到store时派生任务。

- takeEvery：监测到有特定action触发时，触发回调函数，允许并发
- takeLatest：同上，但是不允许并发，只响应最后一次
- put：用于创建一个dispatch Effect
- take：类似于takeEvery，但是可控。takeEvery的任务是被动推送的，而take的任务是主动拉取的。
- call：执行函数。call(func,params)
- all：类似promise.all
- race：类似promise.race
- fork：取消任务


race Effect 中。所有参与 race 的任务，除了优胜者（译注：最先完成的任务），其他任务都会被取消。

并行的 Effect (yield [...])。一旦其中任何一个任务被拒绝，并行的 Effect 将会被拒绝（受 Promise.all 启发）。在这种情况中，所有其他的 Effect 将被自动取消。
# rm-test-mount-fails-on-second-exec

Issue for Vue-Test-Utils/Vuetify

Problem is that when executing multiple tests each mounting a component the second attempt will always fail. The Issues can be found here

[Vue-Test-Utils](https://github.com/vuejs/vue-test-utils/issues/1359)
[Vuetify](https://github.com/vuetifyjs/vuetify/issues/9820)

To reproduce the error

1. Clone Repository
2. npm install
3. npm run test:unit
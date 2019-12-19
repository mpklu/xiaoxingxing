/*
 * File: WIthTest.js
 * Project: x-star
 * 
 * Created by kunlu on 11/09/2019
 * 
 * Description: A convenient wrapper that injects test-only actions to MST model.
 * MST nodes are protected by default, trying modify a node without using an action will throw an exception.
 * For a complex model, having to setting it up in each test could be cumbersome.
 * withTest() allows you to modify node properties directly in tests.
 * `withTest()` has no effects in 'development' or 'production' builds.
 */
import { types, getPropertyMembers, clone } from "./node_modules/mobx-state-tree";
export const withTest = function(model) {
  if (process.env.NODE_ENV === "test") {
    return types
      .compose(
        model,
        types
          .model()
          .views(self => ({
            mocked(obj) {
              let ret = clone(self);
              ret.updateProps(obj);
              return ret;
            }
          }))
          .actions(self => ({
            updateProps(obj) {
              for (const key in obj) {
                if (self.hasOwnProperty(key)) {
                  self[key] = obj[key];
                }
              }
            }
          }))
      )
      .named(getPropertyMembers(model).name); // keep the same name
  } else {
    return model;
  }
};
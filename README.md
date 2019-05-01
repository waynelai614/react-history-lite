# react-history-lite
`react-history-lite` provides tools to manage session history using `React`. This is a simple wrapper of [`history`](https://github.com/ReactTraining/history) library, allows you to develop a SPA `React` project without install the whole [`react-router`](https://github.com/ReactTraining/react-router).

**Note:** This project is suit for small SPA, if you need to handle routes between different components, [`react-router`](https://github.com/ReactTraining/react-router) is your best choice.

## Example
https://waynelai614.github.io/react-history-lite/

## Document
### `<HistoryContext.Provider />`
The provider component store the `history` data in the context.

Wrap with your `App` component, depending on where you want to keep track of history changes.

#### Usage
```js
import { HistoryContext } from 'components/history'

const App = () => {
  <HistoryContext.Provider>
    <App />
  </HistoryContext.Provider>
}
```

### `<Location />`
The component allows you to do some side effect when location changes.

#### Props
##### `paramsSelector()` (Optional)
 A selector function to extract params data from `location`, and pass as second argument to `onChange()`.

**Default function:**
Return the url params (From `"?a=1&b=2"` to `{ a: '1', b: '2' }`)

You can build your custom param selector
e.g.
```js
const paramsSelector = location => {
  const {
    pathname, search, hash
  } = location

  return {
    // ...
  }
}
```


##### `onChange()` (Required)

A callback function allows you to do some side effect when location changes

e.g.
```js
// argument `params` is the output of `paramsSelector()`
const onChange = ({ location, params }) => {
  const {
    pathname, search, hash
  } = location

  // do something... ex: dispatch redux action, call api, etc.
}
```

#### Usage
```js
import { HistoryContext, Location } from 'components/history'

const Parent = () => {
  <HistoryContext.Provider>
    <Child />
  </HistoryContext.Provider>
}

const Child = () => (
  <div>
    <p>Child Component</p>
    <Location
      paramsSelector={customParamsSelector}
      onChange={handleLocationChange}
    />
  </div>
)
```

### `withLocation()`
The `hoc` version of `<Location />`

#### Usage
```js
import {
  compose, withHandlers, pure
} from 'recompose'
import { withLocation } from 'components/history'

const enhance = compose(
  withHandlers({
    handleLocationChange: props => ({ params }) => {
      // ...
    },
    customParamsSelector: props => location => {
      return {
        // ...
      }
    }
  }),
  withLocation(({ customParamsSelector, handleLocationChange }) => ({
    paramsSelector: customParamsSelector,
    onChange: handleLocationChange
  })),
)
```

### `connectHistory()`
A `hoc` allows you to get `<HistoryContext.Provider />`'s context value as `historyCtx` prop to child component

#### Usage
```js
import { connectHistory } from 'components/history'

const Foo = ({ historyCtx }) => {
  // historyCtx - <HistoryContext.Provider />'s context
}

export default connectHistory(Foo)
```

## Navigation
Use the `history` object methods to change the current location.

Please see [ReactTraining/history#navigation](https://github.com/ReactTraining/history#navigation) for more details.

### Usage
```js
import { $history } from 'utils/history'

const doSearch = (params = {}) => {
  const { keyword } = params
  const searchUrl = `/?keyword=${keyword}`

  $history.push(searchUrl)
}

const SearchButton = () => (
  <button
    type="button"
    onClick={() => doSearch({ keyword: 'iPhone' })}
  >
    Search iPhone
  </button>
)
```

## Development
1. Clone this repository
```
git clone https://github.com/waynelai614/react-history-lite.git
```

2. Install packages
```
npm install
```

3. Run the app
```
npm run dev
```
Visit http://0.0.0.0:3000

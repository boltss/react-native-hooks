## Bolt React Native Hooks

[![Version][version-badge]][package]

> Note: You must use React Native >= 0.59.0

### Installation with npm

```sh
npm install @react-native-community/hooks
```

Installation with yarn
```sh
yarn add @react-native-community/hooks
```

## API
- [useRoundedCorners](https://github.com/react-native-community/hooks#useRoundedCorners)

### `useRoundedCorners`

```js
import { useRoundedCorners } from '@boltss/react-native-hooks'

const {
  onLayout,
  horizontalRoundStyle,
  verticalRoundStyle,
} = useRoundedCorners()

<View onLayout={onLayout} style={horizontalRoundStyle}>..</View>
```

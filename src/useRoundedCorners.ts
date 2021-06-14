import { useLayout } from '@react-native-community/hooks'
import { useMemo } from 'react'
import { ViewStyle } from 'react-native'

const useRoundedCorners = () => {
	const { onLayout, ...layout } = useLayout()

	const horizontalRoundStyle: ViewStyle = useMemo(
		() => ({ borderRadius: layout.height / 2 }),
		[layout.height],
	)
	const verticalRoundStyle: ViewStyle = useMemo(
		() => ({ borderRadius: layout.width / 2 }),
		[layout.width],
	)

	return {
		onLayout,
		horizontalRoundStyle,
		verticalRoundStyle,
	}
}
export default useRoundedCorners

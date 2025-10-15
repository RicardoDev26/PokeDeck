import { LinearGradient } from 'expo-linear-gradient'
import { StyledView } from "../../shared/styled"

export default function EffectFadeScroll({ height = 180 }: { height?: number }) {
  return (
    <StyledView style={{ width: '100%', height, position: 'absolute', top: 0, zIndex: 10 }}>
      <LinearGradient
        colors={[
          'rgba(255,255,255,1)',
          'rgba(255,255,255,0.8)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0)',
        ]}
        locations={[0, 0.2, 0.5, 1]}
        style={{ flex: 1 }}
      />
    </StyledView>
  )
}

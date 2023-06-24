import { BannerContainer } from './styles'
import LogoBanner from '../../assets/Logo.svg'

export function Banner() {
  return (
    <BannerContainer>
      <img src={LogoBanner} alt="" />
    </BannerContainer>
  )
}

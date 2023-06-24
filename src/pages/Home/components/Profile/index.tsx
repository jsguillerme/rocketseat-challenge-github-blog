import { Building, ExternalLink, Github, Users2 } from 'lucide-react'
import {
  DetailsInfosUser,
  DetailsUserName,
  ProfileContainer,
  ProfileContent,
  ProfileDetailsInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="" />
        <ProfileDetailsInfo>
          <DetailsUserName>
            <h3>Cameron Williamson</h3>
            <a href="#">
              GITHUB <ExternalLink />
            </a>
          </DetailsUserName>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <DetailsInfosUser>
            <div>
              <Github />
              <span>Cameronwll</span>
            </div>
            <div>
              <Building />
              <span>Rocketseat</span>
            </div>
            <div>
              <Users2 />
              <span>32 seguidores</span>
            </div>
          </DetailsInfosUser>
        </ProfileDetailsInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}

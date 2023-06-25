import { API_AXIOS } from '../../../../lib/axios'
import { useEffect, useState } from 'react'
import { Building, ExternalLink, Github, Users2 } from 'lucide-react'
import {
  DetailsInfosUser,
  DetailsUserName,
  ProfileContainer,
  ProfileContent,
  ProfileDetailsInfo,
} from './styles'

interface UserGithubProfile {
  avatar_url: string
  github_name: string
  github_bio: string
  github_followers: number
  github_url: string
  github_user: string
  github_location: string
}

export function Profile() {
  const [userGithub, setUserGithub] = useState<UserGithubProfile>()

  async function getUser() {
    const response = await API_AXIOS.get('/users/jsguillerme')
    setUserGithub({
      avatar_url: response.data.avatar_url,
      github_name: response.data.name,
      github_bio: response.data.bio,
      github_followers: response.data.followers,
      github_url: response.data.html_url,
      github_user: response.data.login,
      github_location: response.data.location,
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={userGithub?.avatar_url} alt="" />
        <ProfileDetailsInfo>
          <DetailsUserName>
            <h3>{userGithub?.github_name}</h3>
            <a href={userGithub?.github_url}>
              GITHUB <ExternalLink />
            </a>
          </DetailsUserName>
          <p>{userGithub?.github_bio}</p>
          <DetailsInfosUser>
            <div>
              <Github />
              <span>{userGithub?.github_user}</span>
            </div>
            <div>
              <Building />
              <span>{userGithub?.github_location}</span>
            </div>
            <div>
              <Users2 />
              <span>{userGithub?.github_followers} seguidores</span>
            </div>
          </DetailsInfosUser>
        </ProfileDetailsInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}

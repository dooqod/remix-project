/* eslint-disable @typescript-eslint/no-unused-vars */
import { VerticalIcons } from 'libs/remix-ui/vertical-icons/types/vertical-icons'
import React, { ReactNode } from 'react'
import BasicLogo from './BasicLogo'
import IconKind from './IconKind'
interface HomeProps {
  verticalIconPlugin: VerticalIcons
}

function Home ({ verticalIconPlugin }: HomeProps) {
  return (
    <div
      className="m-1 mt-2 remixui_homeIcon"
      onClick={async () => verticalIconPlugin.activateHome()}
      // @ts-ignore
      plugin="home"
      title="Home"
      data-id="verticalIconsHomeIcon"
      id="verticalIconsHomeIcon"
    >
      <BasicLogo />
    </div>
  )
}

export default Home
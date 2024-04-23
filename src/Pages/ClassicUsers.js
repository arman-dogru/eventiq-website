import React from 'react'
import ClassicsHeader from '../components/ClassicsHeader'
import ClassicsAbout from '../components/ClassicsAbout'
import ClassicsIntro from '../components/ClassicsIntro'
import ClassicsBusiness from '../components/ClassicsBusiness'
import ClassicsFans from '../components/ClassicsFans'
import ScrollingBanner from '../components/ScrollingBanner'

const ClassicUsers = () => {
    return (
        <div>
           <ClassicsHeader/>
           <ClassicsAbout/>
           <ClassicsIntro/>
           <ClassicsBusiness/>
           <ClassicsFans/>
           <ScrollingBanner/>
        </div>
    )
}

export default ClassicUsers
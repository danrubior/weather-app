import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
   title: "AppFrame",
   component: AppFrame
}

export const AppFrameExample = () => (
   <Router>
      <AppFrame>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium fermentum est at rhoncus. Sed vitae consectetur eros. Pellentesque convallis sagittis ipsum. Fusce vehicula gravida arcu, ac dapibus odio tristique sit amet.
      </AppFrame>
   </Router>
)
import React from 'react'
import {createStackNavigator} from 'react-navigation'
import HomePage from './pages/Home'
import ArticlePage from './pages/Article'

const RootStack = createStackNavigator({
	HomePage: {
		screen: HomePage
	},
	ArticlePage: {
		screen: ArticlePage
	}
},{
	initialRouteName: 'HomePage'
})


export default RootStack

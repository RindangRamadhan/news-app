import React from 'react'
import {createStackNavigator} from 'react-navigation'
import HomePage from './pages/Home'
import ArticlePage from './pages/Article'
import {Provider} from 'react-redux'
import store from './store'

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


export default class App extends React.Component {
	render() {
		return (
			<Provider store={store} >
				<RootStack />
			</Provider>
		)
	}
}
